import type { Report, CreateReportRequest, UpdateReportRequest, ReportValidationError } from '~/types/report';
import { ReportError } from '~/types/report';
import { db } from '~/lib/database';
import { FileUploadService } from '~/lib/fileUpload';

export class ReportModel {
  
  static validateCreateRequest(data: CreateReportRequest): ReportValidationError[] {
    const errors: ReportValidationError[] = [];

    // Title validation
    if (!data.title || data.title.trim().length === 0) {
      errors.push({ field: 'title', message: 'Title is required' });
    } else if (data.title.length > 200) {
      errors.push({ field: 'title', message: 'Title must be less than 200 characters' });
    }

    // Description validation
    if (!data.description || data.description.trim().length === 0) {
      errors.push({ field: 'description', message: 'Description is required' });
    } else if (data.description.length > 1000) {
      errors.push({ field: 'description', message: 'Description must be less than 1000 characters' });
    }

    // Category validation
    const validCategories = [
      'Trade Forums',
      'Legal Conferences',
      'Technology Conferences',
      'Government Meetings',
      'Business Roundtables',
      'Academic Conferences'
    ];
    if (!data.category || !validCategories.includes(data.category)) {
      errors.push({ field: 'category', message: 'Valid category is required' });
    }

    // Event date validation
    if (!data.eventDate) {
      errors.push({ field: 'eventDate', message: 'Event date is required' });
    } else {
      const eventDate = new Date(data.eventDate);
      if (isNaN(eventDate.getTime())) {
        errors.push({ field: 'eventDate', message: 'Valid event date is required' });
      }
    }

    // Optional field validations
    if (data.eventLocation && data.eventLocation.length > 200) {
      errors.push({ field: 'eventLocation', message: 'Event location must be less than 200 characters' });
    }

    if (data.eventOrganizer && data.eventOrganizer.length > 200) {
      errors.push({ field: 'eventOrganizer', message: 'Event organizer must be less than 200 characters' });
    }

    if (data.summary && data.summary.length > 2000) {
      errors.push({ field: 'summary', message: 'Summary must be less than 2000 characters' });
    }

    return errors;
  }

  static validateUpdateRequest(data: UpdateReportRequest): ReportValidationError[] {
    const errors: ReportValidationError[] = [];

    // Only validate provided fields
    if (data.title !== undefined) {
      if (!data.title || data.title.trim().length === 0) {
        errors.push({ field: 'title', message: 'Title cannot be empty' });
      } else if (data.title.length > 200) {
        errors.push({ field: 'title', message: 'Title must be less than 200 characters' });
      }
    }

    if (data.description !== undefined) {
      if (!data.description || data.description.trim().length === 0) {
        errors.push({ field: 'description', message: 'Description cannot be empty' });
      } else if (data.description.length > 1000) {
        errors.push({ field: 'description', message: 'Description must be less than 1000 characters' });
      }
    }

    if (data.category !== undefined) {
      const validCategories = [
        'Trade Forums',
        'Legal Conferences',
        'Technology Conferences',
        'Government Meetings',
        'Business Roundtables',
        'Academic Conferences'
      ];
      if (!validCategories.includes(data.category)) {
        errors.push({ field: 'category', message: 'Valid category is required' });
      }
    }

    if (data.eventDate !== undefined) {
      const eventDate = new Date(data.eventDate);
      if (isNaN(eventDate.getTime())) {
        errors.push({ field: 'eventDate', message: 'Valid event date is required' });
      }
    }

    if (data.eventLocation !== undefined && data.eventLocation.length > 200) {
      errors.push({ field: 'eventLocation', message: 'Event location must be less than 200 characters' });
    }

    if (data.eventOrganizer !== undefined && data.eventOrganizer.length > 200) {
      errors.push({ field: 'eventOrganizer', message: 'Event organizer must be less than 200 characters' });
    }

    if (data.summary !== undefined && data.summary.length > 2000) {
      errors.push({ field: 'summary', message: 'Summary must be less than 2000 characters' });
    }

    return errors;
  }

  static async create(data: CreateReportRequest, file?: File): Promise<Report> {
    // Validate input data
    const validationErrors = this.validateCreateRequest(data);
    if (validationErrors.length > 0) {
      throw new ReportError('Validation failed', 400, validationErrors);
    }

    let fileData = null;
    if (file) {
      try {
        fileData = await FileUploadService.uploadFile(file);
      } catch (error) {
        if (error instanceof ReportError) {
          throw error;
        }
        throw new ReportError('File upload failed', 500);
      }
    }

    // Prepare report data
    const reportData: Omit<Report, 'id' | 'createdAt' | 'updatedAt'> = {
      title: data.title.trim(),
      description: data.description.trim(),
      category: data.category,
      eventDate: new Date(data.eventDate),
      filename: fileData?.filename || '',
      fileUrl: fileData?.fileUrl || '',
      fileSize: fileData?.fileSize || 0,
      filePath: fileData?.filePath || '',
      isPublished: data.isPublished ?? false,
      tags: data.tags || [],
      eventLocation: data.eventLocation?.trim(),
      eventOrganizer: data.eventOrganizer?.trim(),
      summary: data.summary?.trim(),
      keyOutcomes: data.keyOutcomes || [],
    };

    try {
      return await db.createReport(reportData);
    } catch (error) {
      // If database operation fails and we uploaded a file, clean it up
      if (fileData) {
        await FileUploadService.deleteFile(fileData.filePath);
      }
      throw new ReportError('Failed to create report', 500);
    }
  }

  static async getById(id: string): Promise<Report> {
    if (!id || id.trim().length === 0) {
      throw new ReportError('Report ID is required', 400);
    }

    const report = await db.getReportById(id);
    if (!report) {
      throw new ReportError('Report not found', 404);
    }

    return report;
  }

  static async getAll(filters?: any, page = 1, limit = 10) {
    if (page < 1) page = 1;
    if (limit < 1 || limit > 100) limit = 10;

    return await db.getAllReports(filters, page, limit);
  }

  static async update(id: string, data: UpdateReportRequest, file?: File): Promise<Report> {
    if (!id || id.trim().length === 0) {
      throw new ReportError('Report ID is required', 400);
    }

    // Validate input data
    const validationErrors = this.validateUpdateRequest(data);
    if (validationErrors.length > 0) {
      throw new ReportError('Validation failed', 400, validationErrors);
    }

    // Check if report exists
    const existingReport = await db.getReportById(id);
    if (!existingReport) {
      throw new ReportError('Report not found', 404);
    }

    let fileData = null;
    if (file) {
      try {
        fileData = await FileUploadService.uploadFile(file);
        // Delete old file if it exists
        if (existingReport.filePath) {
          await FileUploadService.deleteFile(existingReport.filePath);
        }
      } catch (error) {
        if (error instanceof ReportError) {
          throw error;
        }
        throw new ReportError('File upload failed', 500);
      }
    }

    // Prepare update data
    const updateData: Partial<Report> = {
      ...data,
      eventDate: data.eventDate ? new Date(data.eventDate) : undefined,
    };

    // Add file data if new file was uploaded
    if (fileData) {
      updateData.filename = fileData.filename;
      updateData.fileUrl = fileData.fileUrl;
      updateData.fileSize = fileData.fileSize;
      updateData.filePath = fileData.filePath;
    }

    const updatedReport = await db.updateReport(id, updateData);
    if (!updatedReport) {
      throw new ReportError('Failed to update report', 500);
    }

    return updatedReport;
  }

  static async delete(id: string): Promise<void> {
    if (!id || id.trim().length === 0) {
      throw new ReportError('Report ID is required', 400);
    }

    // Get report to access file path
    const report = await db.getReportById(id);
    if (!report) {
      throw new ReportError('Report not found', 404);
    }

    // Delete from database
    const deleted = await db.deleteReport(id);
    if (!deleted) {
      throw new ReportError('Failed to delete report', 500);
    }

    // Delete associated file
    if (report.filePath) {
      await FileUploadService.deleteFile(report.filePath);
    }
  }

  static async getStats() {
    return await db.getReportStats();
  }

  static async togglePublishStatus(id: string): Promise<Report> {
    const report = await this.getById(id);
    return await this.update(id, { isPublished: !report.isPublished });
  }
} 
