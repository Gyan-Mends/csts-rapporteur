import React from 'react';
import { useLoaderData, Link, type MetaFunction, type LoaderFunction } from "react-router";
import { FileText, Download, Eye, Calendar, MapPin, User, Tag, ArrowLeft, Clock } from "lucide-react";
import axios from "axios";
import backgroundVideo from '~/components/images/large1.mp4';

export const meta: MetaFunction = ({ data }) => {
  const report = data as Report;
  return [
    { title: `${report?.title || 'Report'} - CSTS Professional Documentation Services` },
    { name: "description", content: report?.description || "Detailed event report from CSTS rapporteur services" },
    { name: "keywords", content: `${report?.title}, event report, meeting documentation, rapporteur report, ${report?.category}` },
    { name: "og:image", content: "https://csts.com.gh/images/csts-logo.png" },
    { name: "og:title", content: `${report?.title || 'Report'} - CSTS` },
    { name: "og:description", content: report?.description || "Detailed event report from CSTS rapporteur services" },
    { name: "og:type", content: "article" },
  ];
};

interface Report {
  _id: string;
  title: string;
  description: string;
  category: string;
  eventDate: string;
  filename?: string;
  fileUrl?: string;
  fileSize?: string;
  isPublished: boolean;
  tags?: string[];
  eventLocation?: string;
  eventOrganizer?: string;
  summary?: string;
  keyOutcomes?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { id } = params;
    
    if (!id) {
      throw new Response("Report ID is required", { status: 400 });
    }

    // Call the external API directly with query parameter
    const response = await axios.get(`https://cstsgh.vercel.app/api/reports?id=${id}`);
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Response(response.data.message || "Report not found", { status: 404 });
    }
  } catch (error: any) {
    console.error('Error fetching report:', error);
    if (error.response?.status === 404) {
      throw new Response("Report not found", { status: 404 });
    }
    throw new Response("Failed to fetch report", { status: 500 });
  }
};

export default function ReportDetail() {
  const report = useLoaderData<Report>();

  const handleDownloadReport = (fileUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 csts-hero-bg-2">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              to="/reports" 
              className="inline-flex items-center gap-2 text-white hover:text-pink-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Reports
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-pink-300 bg-pink-500/20 px-3 py-1 rounded-full mb-4">
              {report.category}
            </span>
            <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-6">
              {report.title}
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed">
              {report.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Report Meta Information */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-pink-500" />
                <div>
                  <p className="text-sm text-gray-600">Event Date</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(report.eventDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {report.eventLocation && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="font-semibold text-gray-900">{report.eventLocation}</p>
                  </div>
                </div>
              )}

              {report.eventOrganizer && (
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-600">Organizer</p>
                    <p className="font-semibold text-gray-900">{report.eventOrganizer}</p>
                  </div>
                </div>
              )}

              {report.fileSize && (
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-pink-500" />
                  <div>
                    <p className="text-sm text-gray-600">File Size</p>
                    <p className="font-semibold text-gray-900">{report.fileSize}</p>
                  </div>
                </div>
              )}
            </div>

            {report.createdAt && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>
                    Report created on {new Date(report.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Summary Section */}
          {report.summary && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Executive Summary</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">{report.summary}</p>
              </div>
            </div>
          )}

          {/* Key Outcomes */}
          {report.keyOutcomes && report.keyOutcomes.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes</h2>
              <div className="space-y-4">
                {report.keyOutcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {report.tags && report.tags.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Topics Covered</h2>
              <div className="flex flex-wrap gap-2">
                {report.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-1 bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* View/Download Actions */}
          <div className="bg-gradient-to-r from-pink-50 to-violet-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Full Report</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Get the complete documentation including detailed discussions, decisions, and recommendations from this event.
            </p>
            
            {report.fileUrl ? (
              <div className="flex justify-center">
                {report.filename && (
                  <button
                    onClick={() => handleDownloadReport(report.fileUrl!, report.filename!)}
                    className="csts-btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Report
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-600 mb-4">Report document is currently being processed.</p>
                <Link 
                  to="/contact" 
                  className="csts-btn-primary inline-flex items-center gap-2"
                >
                  Contact Us for Access
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Need Professional Event Documentation?
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-violet-900/10 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Need Similar Documentation Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our expert rapporteurs provide comprehensive documentation services for your events, ensuring every detail is captured with precision and professionalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Explore Our Services
            </Link>
            <Link 
              to="/contact" 
              className="csts-btn-primary text-white hover:bg-white hover:text-violet-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 