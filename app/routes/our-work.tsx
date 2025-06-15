import React from 'react';
import { Link, type MetaFunction } from 'react-router';
import { Calendar, MapPin, Users, FileText, Building, Globe } from 'lucide-react';
import backgroundVideo from '~/components/images/large1.mp4';

export const meta: MetaFunction = () => {
    return [
        { title: "Our Work - CSTS Rapporteur Portfolio" },
        { name: "description", content: "Explore CSTS's portfolio of successful rapporteur services including AfCFTA meetings, Ghana Bar Association conferences, and international business roundtables." },
        { name: "keywords", content: "CSTS portfolio, rapporteur work, AfCFTA meetings, Ghana Bar Association, international conferences" },
    ];
};

const OurWork = () => {
    const projects = [
        {
            category: "International Trade & Policy",
            icon: <Globe className="w-8 h-8 text-pink-600" />,
            events: [
                {
                    title: "Council of Ministers meetings of the African Continental Free Trade Area (AfCFTA)",
                    period: "2020-2021",
                    description: "Comprehensive documentation of high-level policy discussions and trade agreements across the African continent.",
                    scope: "Multi-year project covering critical trade policy decisions"
                },
                {
                    title: "African Continental Free Trade Area (AfCFTA) dispute settlement body meetings",
                    period: "Ongoing",
                    description: "Specialized documentation of dispute resolution processes and legal frameworks.",
                    scope: "Technical legal documentation requiring specialized expertise"
                }
            ]
        },
        {
            category: "Legal & Professional Associations",
            icon: <Building className="w-8 h-8 text-pink-600" />,
            events: [
                {
                    title: "Ghana Bar Association (GBA) National Bar Conference, Bolga",
                    period: "2021",
                    description: "Complete documentation of legal proceedings, policy discussions, and professional development sessions.",
                    scope: "National conference with multiple parallel sessions"
                },
                {
                    title: "Ghana Bar Association (GBA) National Bar Conference, Ho",
                    period: "2022",
                    description: "Comprehensive coverage of legal education, policy reforms, and professional ethics discussions.",
                    scope: "Multi-day conference with diverse legal topics"
                },
                {
                    title: "Ghana Bar Association (GBA) National Bar Conference, Cape Coast",
                    period: "2023",
                    description: "Detailed reporting on contemporary legal issues, judicial reforms, and bar association governance.",
                    scope: "Large-scale conference with international participation"
                }
            ]
        },
        {
            category: "Government & Public Sector",
            icon: <Users className="w-8 h-8 text-pink-600" />,
            events: [
                {
                    title: "First Anniversary Celebration Meeting for Nation Builders Corps (NABCO)",
                    period: "2021",
                    description: "Documentation of government program evaluation and future planning discussions.",
                    scope: "High-profile government celebration and strategic planning event"
                },
                {
                    title: "Board Capacity Building for the National Communications Authority (NCA)",
                    period: "2022",
                    description: "Professional development and governance documentation for key regulatory body.",
                    scope: "Specialized regulatory capacity building program"
                }
            ]
        },
        {
            category: "International Business & Trade",
            icon: <Globe className="w-8 h-8 text-pink-600" />,
            events: [
                {
                    title: "The Ministry of Finance's Ghana Mutual Prosperity Roundtable with Chinese Businesses in Ghana",
                    period: "2024",
                    description: "High-level diplomatic and economic discussions between Ghana and Chinese business leaders.",
                    scope: "International economic diplomacy and trade relations"
                },
                {
                    title: "The Ministry of Finance's Ghana Mutual Prosperity Roundtable with German Businesses in Ghana",
                    period: "2024",
                    description: "Strategic economic partnership discussions and investment opportunities documentation.",
                    scope: "Bilateral economic cooperation and trade facilitation"
                }
            ]
        },
        {
            category: "Technology & Innovation",
            icon: <FileText className="w-8 h-8 text-pink-600" />,
            events: [
                {
                    title: "The Africa Energy Technology Conference",
                    period: "2024",
                    description: "Cutting-edge discussions on energy innovation, sustainability, and technological advancement across Africa.",
                    scope: "Technical conference with regional impact"
                },
                {
                    title: "AI as a catalyst to Transform Economies in Sub-Saharan Africa",
                    period: "2024",
                    description: "Forward-looking discussions on artificial intelligence applications and economic transformation.",
                    scope: "High-tech policy and economic development forum"
                }
            ]
        },
        {
            category: "Social & Governance",
            icon: <Calendar className="w-8 h-8 text-pink-600" />,
            events: [
                {
                    title: "Stakeholder Review forum on Assessing the impact of the media Support Programme",
                    period: "2023",
                    description: "Comprehensive evaluation of media development programs and their societal impact.",
                    scope: "Multi-stakeholder assessment and policy review"
                },
                {
                    title: "The Marriage Governance Conference",
                    period: "2024",
                    description: "Specialized documentation of family law, social policy, and governance framework discussions.",
                    scope: "Social policy and legal framework development"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 csts-hero-bg">
                <div className="absolute inset-0 csts-hero-overlay"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
                        Our Work
                    </h1>
                    <p className="text-xl lg:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
                        A comprehensive portfolio of successful rapporteur services across diverse industries and sectors
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-800 mb-6">
                            Trusted by Leading Organizations
                        </h2>
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                            CSTS has successfully provided professional rapporteur services for high-profile events, conferences, and meetings across various sectors including government, international trade, legal, technology, and finance.
                        </p>
                        <p className="text-lg text-gray-700">
                            Our diverse portfolio demonstrates our ability to adapt to different industries, event types, and documentation requirements while maintaining the highest standards of accuracy and professionalism.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-800 mb-6">
                            Our Portfolio
                        </h2>
                        <div className="w-24 h-1 csts-bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-12">
                        {projects.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className=" px-8 py-6">
                                    <div className="flex items-center space-x-4">
                                        {category.icon}
                                        <h3 className="text-2xl font-bold ">
                                            {category.category}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        {category.events.map((event, eventIndex) => (
                                            <div key={eventIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-start justify-between mb-4">
                                                    <h4 className="text-lg font-semibold text-gray-800 flex-1 mr-4">
                                                        {event.title}
                                                    </h4>
                                                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                                        {event.period}
                                                    </span>
                                                </div>
                                                
                                                <p className="text-gray-700 mb-4 leading-relaxed">
                                                    {event.description}
                                                </p>
                                                
                                                <div className="flex items-start space-x-2">
                                                    <FileText className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                                                    <p className="text-sm text-gray-600 italic">
                                                        {event.scope}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonial Section */}
            <section className="py-20 ">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-800 mb-8">
                        What Sets Us Apart
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">International Scope</h3>
                            <p className="text-gray-600">From local governance to continental trade agreements, we handle diverse international events.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-Sector Expertise</h3>
                            <p className="text-gray-600">Proven ability to adapt to various industries including legal, technology, and government sectors.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Consistent Quality</h3>
                            <p className="text-gray-600">Maintained high standards across all projects, regardless of size or complexity.</p>
                        </div>
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
                    Ready to Document Your Next Event?
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-violet-900/10 z-10"></div>

                {/* Content */}
                <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading lg:text-4xl font-bold mb-6">
                    Ready to Add Your Event to Our Portfolio?
                    </h2>
                    <p className="text-xl  mb-8 max-w-2xl mx-auto">
                    Join the prestigious organizations that trust CSTS for their most important documentation needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/our-work"
                            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                                                      View Our Services

                        </Link>
                        <Link
                            to="/contact"
                            className="csts-btn-primary text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                           REQUEST OUR SERVICE - Book Now!
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default OurWork;