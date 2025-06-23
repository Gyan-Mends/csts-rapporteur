import React from 'react';
import { useState, useEffect } from "react";
import { FileText, Download, Eye, Search, AlertTriangle, Info } from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import axios from "axios";
import backgroundVideo from '~/components/images/large1.mp4';

export const meta: MetaFunction = () => {
  return [
    { title: "Reports - CSTS Professional Documentation Services" },
    { name: "description", content: "Access comprehensive event reports and documentation from our rapporteur services across various corporate events, conferences, and meetings." },
    { name: "keywords", content: "event reports, meeting documentation, rapporteur reports, conference documentation, professional reporting" },
    { name: "og:image", content: "https://csts.com.gh/images/csts-logo.png" },
    { name: "og:title", content: "CSTS - Event Reports Library" },
    { name: "og:description", content: "Access comprehensive documentation from our rapporteur services across various corporate events, conferences, and meetings." },
    { name: "og:url", content: "https://csts.com.gh/reports" },
    { name: "og:type", content: "website" },
    { name: "og:locale", content: "en_US" },
    { name: "og:site_name", content: "CSTS" },
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

const categories = [
  "All Categories",
  "Trade Forums", 
  "Legal Conferences",
  "Technology Conferences",
  "Government Meetings",
  "Business Roundtables",
  "Academic Conferences"
];

export default function Reports() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://cstsgh.vercel.app/api/reports');
        
        if (response.data.success) {
          setReports(response.data.data.filter((report: Report) => report.isPublished));
        } else {
          setError(response.data.message || 'Failed to fetch reports');
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'An error occurred while fetching reports');
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const filteredReports = reports.filter(report => {
    const matchesCategory = selectedCategory === "All Categories" || report.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Removed download handlers - download functionality moved to detail page

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Reports</h3>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 csts-hero-bg-2">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
            Event Reports
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Access comprehensive documentation from our rapporteur services across various corporate events, conferences, and meetings
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Report Library</h2>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8 max-w-4xl mx-auto">
              Explore our comprehensive collection of event documentation. Each report captures key discussions, decisions, and outcomes from various corporate events, conferences, and meetings.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'csts-bg-primary text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-pink-500 hover:text-pink-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>

          {/* Value Proposition Section */}
          {reports.length === 0 && (
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FileText className="w-8 h-8 text-pink-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Comprehensive Documentation</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Every report captures key discussions, decisions, and outcomes with precision and clarity for future reference.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Eye className="w-8 h-8 text-pink-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-800">Professional Quality</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our rapporteurs ensure accurate, impartial, and well-structured documentation that meets professional standards.
                    </p>
                  </div>
                </div>

                <div className="text-center bg-gradient-to-r from-pink-50 to-violet-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Building Our Report Library</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    We're continuously adding comprehensive documentation from our rapporteur services. Each report represents our commitment to capturing every important detail from corporate events, conferences, and meetings.
                  </p>
                  <Link 
                    to="/contact" 
                    className="csts-btn-primary inline-flex items-center"
                  >
                    Request Documentation Services
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Reports Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <div key={report._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-black/20 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 csts-bg-primary/10 rounded-lg">
                        <FileText className="w-6 h-6 csts-text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-pink-500 bg-pink-50 px-2 py-1 rounded">
                          {report.category}
                        </span>
                      </div>
                    </div>

                  </div>
                  
                  <Link to={`/reports/${report._id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-pink-600 transition-colors cursor-pointer">
                      {report.title}
                    </h3>
                  </Link>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {report.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{new Date(report.eventDate).toLocaleDateString()}</span>
                    <span>{report.fileSize || 'N/A'}</span>
                  </div>
                  
                  {report.eventLocation && (
                    <div className="text-sm text-gray-500 mb-2">
                      <span className="font-medium">Location:</span> {report.eventLocation}
                    </div>
                  )}
                  
                  {report.tags && report.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {report.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {report.tags.length > 3 && (
                        <span className="text-xs text-gray-500">+{report.tags.length - 3} more</span>
                      )}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Link 
                      to={`/reports/${report._id}`}
                      className="flex-1 csts-btn-primary flex items-center justify-center gap-2 py-2 text-sm text-white hover:bg-pink-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Report
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReports.length === 0 && reports.length > 0 && (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Reports Found</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {searchTerm ? (
                  <>
                    No reports match your search "<strong>{searchTerm}</strong>".
                    <br />
                    Try adjusting your search terms or browse by category.
                  </>
                ) : (
                  `No reports found in the "${selectedCategory}" category.`
                )}
              </p>
              {(searchTerm || selectedCategory !== "All Categories") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Categories");
                  }}
                  className="csts-btn-primary"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}

          {reports.length === 0 && !loading && !error && (
            <div className="text-center py-16">
              <Info className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">No Reports Available</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our report library is currently being updated. Check back soon for comprehensive documentation from our latest events.
              </p>
            </div>
          )}
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
            Need Professional Event Documentation?
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