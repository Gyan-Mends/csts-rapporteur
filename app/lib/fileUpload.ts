import type { FileUploadResult, ReportError } from '~/types/report';
import { ReportError as ReportErrorClass } from '~/types/report';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

// Configuration
const UPLOAD_DIR = 'public/reports';
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME_TYPES = ['application/pdf'];
const ALLOWED_EXTENSIONS = ['.pdf'];

export class FileUploadService {
  
  static async ensureUploadDirectory(): Promise<void> {
    try {
      await fs.access(UPLOAD_DIR);
    } catch {
      await fs.mkdir(UPLOAD_DIR, { recursive: true });
    }
  }

  static async uploadFile(file: File): Promise<FileUploadResult> {
    // Validate file
    this.validateFile(file);

    // Ensure upload directory exists
    await this.ensureUploadDirectory();

    // Generate unique filename
    const fileExtension = path.extname(file.name);
    const uniqueFilename = `${randomUUID()}${fileExtension}`;
    const filePath = path.join(UPLOAD_DIR, uniqueFilename);
    const fileUrl = `/reports/${uniqueFilename}`;

    try {
      // Convert File to Buffer and save
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(filePath, buffer);

      return {
        filename: uniqueFilename,
        originalName: file.name,
        fileSize: file.size,
        filePath,
        fileUrl,
        mimeType: file.type,
      };
    } catch (error) {
      throw new ReportErrorClass('Failed to save file', 500);
    }
  }

  static async deleteFile(filePath: string): Promise<boolean> {
    try {
      await fs.unlink(filePath);
      return true;
    } catch (error) {
      console.error('Failed to delete file:', error);
      return false;
    }
  }

  static validateFile(file: File): void {
    const errors: Array<{ field: string; message: string }> = [];

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      errors.push({
        field: 'file',
        message: `File size exceeds maximum allowed size of ${MAX_FILE_SIZE / 1024 / 1024}MB`,
      });
    }

    // Check MIME type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      errors.push({
        field: 'file',
        message: 'Only PDF files are allowed',
      });
    }

    // Check file extension
    const fileExtension = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      errors.push({
        field: 'file',
        message: 'Only .pdf files are allowed',
      });
    }

    if (errors.length > 0) {
      throw new ReportErrorClass('File validation failed', 400, errors);
    }
  }

  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  static async getFileInfo(filePath: string): Promise<{ size: number; exists: boolean }> {
    try {
      const stats = await fs.stat(filePath);
      return {
        size: stats.size,
        exists: true,
      };
    } catch {
      return {
        size: 0,
        exists: false,
      };
    }
  }
} 