import type { CreateReportRequest, UpdateReportRequest, ReportFilters } from '~/types/report';
import { ReportError } from '~/types/report';
import { ReportModel } from '~/models/Report';

export class ReportController {
  
  /**
   * Create a new report
   */
  static async createReport(request: Request): Promise<Response> {
    try {
      const formData = await request.formData();
      
      // Extract form data
      const reportData: CreateReportRequest = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as any,
        eventDate: formData.get('eventDate') as string,
        eventLocation: formData.get('eventLocation') as string || undefined,
        eventOrganizer: formData.get('eventOrganizer') as string || undefined,
        summary: formData.get('summary') as string || undefined,
        keyOutcomes: formData.get('keyOutcomes') ? JSON.parse(formData.get('keyOutcomes') as string) : undefined,
        tags: formData.get('tags') ? JSON.parse(formData.get('tags') as string) : undefined,
        isPublished: formData.get('isPublished') === 'true',
      };

      // Extract file
      const file = formData.get('file') as File | null;

      const report = await ReportModel.create(reportData, file || undefined);

      return new Response(JSON.stringify({
        success: true,
        data: report,
        message: 'Report created successfully'
      }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get all reports with filtering and pagination
   */
  static async getAllReports(request: Request): Promise<Response> {
    try {
      const url = new URL(request.url);
      const searchParams = url.searchParams;

      // Extract query parameters
      const filters: ReportFilters = {
        category: searchParams.get('category') as any || undefined,
        search: searchParams.get('search') || undefined,
        isPublished: searchParams.get('isPublished') ? searchParams.get('isPublished') === 'true' : undefined,
        startDate: searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined,
        endDate: searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined,
        tags: searchParams.get('tags') ? searchParams.get('tags')!.split(',') : undefined,
      };

      const page = parseInt(searchParams.get('page') || '1');
      const limit = parseInt(searchParams.get('limit') || '10');

      const result = await ReportModel.getAll(filters, page, limit);

      return new Response(JSON.stringify({
        success: true,
        data: result,
        message: 'Reports retrieved successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get public reports (only published ones)
   */
  static async getPublicReports(request: Request): Promise<Response> {
    try {
      const url = new URL(request.url);
      const searchParams = url.searchParams;

      // Extract query parameters
      const filters: ReportFilters = {
        category: searchParams.get('category') as any || undefined,
        search: searchParams.get('search') || undefined,
        isPublished: true, // Only published reports for public access
        startDate: searchParams.get('startDate') ? new Date(searchParams.get('startDate')!) : undefined,
        endDate: searchParams.get('endDate') ? new Date(searchParams.get('endDate')!) : undefined,
        tags: searchParams.get('tags') ? searchParams.get('tags')!.split(',') : undefined,
      };

      const page = parseInt(searchParams.get('page') || '1');
      const limit = parseInt(searchParams.get('limit') || '10');

      const result = await ReportModel.getAll(filters, page, limit);

      return new Response(JSON.stringify({
        success: true,
        data: result,
        message: 'Public reports retrieved successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get a single report by ID
   */
  static async getReportById(request: Request, params: { id: string }): Promise<Response> {
    try {
      const report = await ReportModel.getById(params.id);

      return new Response(JSON.stringify({
        success: true,
        data: report,
        message: 'Report retrieved successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Update a report
   */
  static async updateReport(request: Request, params: { id: string }): Promise<Response> {
    try {
      const formData = await request.formData();
      
      // Extract form data (only include fields that are provided)
      const reportData: UpdateReportRequest = {};
      
      if (formData.has('title')) reportData.title = formData.get('title') as string;
      if (formData.has('description')) reportData.description = formData.get('description') as string;
      if (formData.has('category')) reportData.category = formData.get('category') as any;
      if (formData.has('eventDate')) reportData.eventDate = formData.get('eventDate') as string;
      if (formData.has('eventLocation')) reportData.eventLocation = formData.get('eventLocation') as string;
      if (formData.has('eventOrganizer')) reportData.eventOrganizer = formData.get('eventOrganizer') as string;
      if (formData.has('summary')) reportData.summary = formData.get('summary') as string;
      if (formData.has('keyOutcomes')) reportData.keyOutcomes = JSON.parse(formData.get('keyOutcomes') as string);
      if (formData.has('tags')) reportData.tags = JSON.parse(formData.get('tags') as string);
      if (formData.has('isPublished')) reportData.isPublished = formData.get('isPublished') === 'true';

      // Extract file
      const file = formData.get('file') as File | null;

      const report = await ReportModel.update(params.id, reportData, file || undefined);

      return new Response(JSON.stringify({
        success: true,
        data: report,
        message: 'Report updated successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Delete a report
   */
  static async deleteReport(request: Request, params: { id: string }): Promise<Response> {
    try {
      await ReportModel.delete(params.id);

      return new Response(JSON.stringify({
        success: true,
        message: 'Report deleted successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Toggle publish status of a report
   */
  static async togglePublishStatus(request: Request, params: { id: string }): Promise<Response> {
    try {
      const report = await ReportModel.togglePublishStatus(params.id);

      return new Response(JSON.stringify({
        success: true,
        data: report,
        message: `Report ${report.isPublished ? 'published' : 'unpublished'} successfully`
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Get report statistics
   */
  static async getReportStats(request: Request): Promise<Response> {
    try {
      const stats = await ReportModel.getStats();

      return new Response(JSON.stringify({
        success: true,
        data: stats,
        message: 'Report statistics retrieved successfully'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Handle errors and return appropriate response
   */
  private static handleError(error: unknown): Response {
    console.error('Report Controller Error:', error);

    if (error instanceof ReportError) {
      return new Response(JSON.stringify({
        success: false,
        message: error.message,
        errors: error.errors,
      }), {
        status: error.statusCode,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({
      success: false,
      message: 'Internal server error',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 