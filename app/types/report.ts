export interface Report {
  id: string;
  title: string;
  description: string;
  category: ReportCategory;
  eventDate: Date;
  createdAt: Date;
  updatedAt: Date;
  filename: string;
  fileUrl: string;
  fileSize: number; // in bytes
  filePath: string; // server file path
  isPublished: boolean;
  tags?: string[];
  eventLocation?: string;
  eventOrganizer?: string;
  summary?: string;
  keyOutcomes?: string[];
}

export type ReportCategory = 
  | 'Trade Forums'
  | 'Legal Conferences'
  | 'Technology Conferences'
  | 'Government Meetings'
  | 'Business Roundtables'
  | 'Academic Conferences';

export interface CreateReportRequest {
  title: string;
  description: string;
  category: ReportCategory;
  eventDate: string; // ISO date string
  eventLocation?: string;
  eventOrganizer?: string;
  summary?: string;
  keyOutcomes?: string[];
  tags?: string[];
  isPublished?: boolean;
}

export interface UpdateReportRequest {
  title?: string;
  description?: string;
  category?: ReportCategory;
  eventDate?: string;
  eventLocation?: string;
  eventOrganizer?: string;
  summary?: string;
  keyOutcomes?: string[];
  tags?: string[];
  isPublished?: boolean;
}

export interface ReportFilters {
  category?: ReportCategory;
  search?: string;
  isPublished?: boolean;
  startDate?: Date;
  endDate?: Date;
  tags?: string[];
}

export interface PaginatedReports {
  reports: Report[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ReportStats {
  totalReports: number;
  publishedReports: number;
  categoryCounts: Record<ReportCategory, number>;
  recentReports: Report[];
}

// File upload related types
export interface FileUploadResult {
  filename: string;
  originalName: string;
  fileSize: number;
  filePath: string;
  fileUrl: string;
  mimeType: string;
}

export interface ReportValidationError {
  field: string;
  message: string;
}

export class ReportError extends Error {
  public statusCode: number;
  public errors?: ReportValidationError[];

  constructor(message: string, statusCode: number = 500, errors?: ReportValidationError[]) {
    super(message);
    this.name = 'ReportError';
    this.statusCode = statusCode;
    this.errors = errors;
  }
} 