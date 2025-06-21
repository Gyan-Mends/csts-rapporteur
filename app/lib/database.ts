// Database utility for handling database connections and operations
// This is a generic interface that can be adapted to your preferred database (MongoDB, PostgreSQL, etc.)

import { Report, ReportFilters, PaginatedReports } from '~/types/report';

// Generic database interface
export interface DatabaseAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  
  // Report operations
  createReport(report: Omit<Report, 'id' | 'createdAt' | 'updatedAt'>): Promise<Report>;
  getReportById(id: string): Promise<Report | null>;
  getAllReports(filters?: ReportFilters, page?: number, limit?: number): Promise<PaginatedReports>;
  updateReport(id: string, updates: Partial<Report>): Promise<Report | null>;
  deleteReport(id: string): Promise<boolean>;
  getReportStats(): Promise<any>;
}

// Mock/In-memory database implementation for development
class MockDatabase implements DatabaseAdapter {
  private reports: Report[] = [];
  private nextId = 1;

  async connect(): Promise<void> {
    console.log('Connected to mock database');
  }

  async disconnect(): Promise<void> {
    console.log('Disconnected from mock database');
  }

  async createReport(reportData: Omit<Report, 'id' | 'createdAt' | 'updatedAt'>): Promise<Report> {
    const now = new Date();
    const report: Report = {
      ...reportData,
      id: this.nextId.toString(),
      createdAt: now,
      updatedAt: now,
    };
    
    this.nextId++;
    this.reports.push(report);
    return report;
  }

  async getReportById(id: string): Promise<Report | null> {
    return this.reports.find(report => report.id === id) || null;
  }

  async getAllReports(filters?: ReportFilters, page = 1, limit = 10): Promise<PaginatedReports> {
    let filteredReports = [...this.reports];

    // Apply filters
    if (filters) {
      if (filters.category) {
        filteredReports = filteredReports.filter(report => report.category === filters.category);
      }
      
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredReports = filteredReports.filter(report => 
          report.title.toLowerCase().includes(searchLower) ||
          report.description.toLowerCase().includes(searchLower) ||
          report.summary?.toLowerCase().includes(searchLower)
        );
      }
      
      if (filters.isPublished !== undefined) {
        filteredReports = filteredReports.filter(report => report.isPublished === filters.isPublished);
      }
      
      if (filters.startDate) {
        filteredReports = filteredReports.filter(report => report.eventDate >= filters.startDate!);
      }
      
      if (filters.endDate) {
        filteredReports = filteredReports.filter(report => report.eventDate <= filters.endDate!);
      }
      
      if (filters.tags && filters.tags.length > 0) {
        filteredReports = filteredReports.filter(report => 
          report.tags?.some(tag => filters.tags!.includes(tag))
        );
      }
    }

    // Sort by event date (newest first)
    filteredReports.sort((a, b) => b.eventDate.getTime() - a.eventDate.getTime());

    // Pagination
    const total = filteredReports.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const reports = filteredReports.slice(startIndex, endIndex);

    return {
      reports,
      total,
      page,
      limit,
      totalPages,
    };
  }

  async updateReport(id: string, updates: Partial<Report>): Promise<Report | null> {
    const index = this.reports.findIndex(report => report.id === id);
    if (index === -1) return null;

    this.reports[index] = {
      ...this.reports[index],
      ...updates,
      updatedAt: new Date(),
    };

    return this.reports[index];
  }

  async deleteReport(id: string): Promise<boolean> {
    const index = this.reports.findIndex(report => report.id === id);
    if (index === -1) return false;

    this.reports.splice(index, 1);
    return true;
  }

  async getReportStats(): Promise<any> {
    const total = this.reports.length;
    const published = this.reports.filter(r => r.isPublished).length;
    
    const categoryCounts = this.reports.reduce((acc, report) => {
      acc[report.category] = (acc[report.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const recent = this.reports
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5);

    return {
      totalReports: total,
      publishedReports: published,
      categoryCounts,
      recentReports: recent,
    };
  }
}

// Database instance - replace with your actual database implementation
export const db: DatabaseAdapter = new MockDatabase();

// Initialize database connection
export const initializeDatabase = async (): Promise<void> => {
  try {
    await db.connect();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Failed to initialize database:', error);
    throw error;
  }
};

// Close database connection
export const closeDatabase = async (): Promise<void> => {
  try {
    await db.disconnect();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing database connection:', error);
  }
};
