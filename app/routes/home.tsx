import React from 'react';
import { Link, type MetaFunction } from 'react-router';
import { CheckCircle, FileText, Users, Clock, Globe, Shield } from 'lucide-react';
import backgroundVideo from '~/components/images/large1.mp4';

export const meta: MetaFunction = () => {
    return [
        { title: "CSTS - Professional Rapporteur Services" },
        { name: "description", content: "Corporate Secretarial and Training Services Limited offers exceptional rapporteur services with flexibility, impartiality and credible analytical skills for your formal events." },
        { name: "keywords", content: "rapporteur, meeting documentation, corporate secretarial, training services, CSTS, professional reporting" },
        { name: "author", content: "CSTS" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "og:image", content: "https://csts.com.gh/images/csts-logo.png" },
        { name: "og:title", content: "CSTS - Professional Rapporteur Services" },
        { name: "og:description", content: "Corporate Secretarial and Training Services Limited offers exceptional rapporteur services with flexibility, impartiality and credible analytical skills for your formal events." },
        { name: "og:url", content: "https://csts.com.gh" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "en_US" },
        { name: "og:site_name", content: "CSTS" },
        
        
        
    ];
};

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center csts-hero-bg">
                {/* Overlay */}
                <div className="absolute inset-0 csts-hero-overlay"></div>

                {/* Content */}
                <div className="relative z-10 text-white px-4 sm:px-6 max-w-6xl mx-auto ">
                    {/* Main Headline */}
                    <div className="mb-8 animate-fade-in-up">
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                            WE ASSURE FLEXIBILITY, IMPARTIALITY AND CREDIBLE ANALYTICAL SKILLS FOR YOUR FORMAL EVENTS
                        </h1>
                    </div>

                    {/* Subtext */}
                    <div className="mb-12 animate-fade-in-up animation-delay-200">
                        <p className="text-lg sm:text-xl lg:text-lg font-light leading-relaxed max-w-4xl  opacity-95">
                            Corporate Secretarial and Training Services Limited (CSTS) has, as part of its core mandate, a committed obligation to offering exceptional rapporteur services in the form of documenting, summarizing, and reporting on various meetings, conferences, and events.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-12 animate-fade-in-up animation-delay-400">
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl ">
                            <div className="flex items-center  space-x-2">
                                <Shield className="w-6 h-6 text-pink-600" />
                                <span className="font-semibold">Flexibility</span>
                            </div>
                            <div className="flex items-center  space-x-2">
                                <CheckCircle className="w-6 h-6 text-pink-600" />
                                <span className="font-semibold">Impartiality</span>
                            </div>
                            <div className="flex items-center  space-x-2">
                                <FileText className="w-6 h-6 text-pink-600" />
                                <span className="font-semibold">Credible Analysis</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 j items-center animate-fade-in-up animation-delay-600">
                        <Link 
                            to="/why-rapporteurs" 
                            className="csts-btn-primary w-full sm:w-auto"
                        >
                            Learn More
                        </Link>
                        <Link 
                            to="/contact" 
                            className="csts-btn-secondary w-full sm:w-auto"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse hidden lg:block"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse hidden lg:block"></div>
            </section>

            {/* About CSTS Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl lg:text-3xl font-bold text-gray-800 mb-6">
                            About CSTS Rapporteurs
                        </h2>
                        <div className="w-24 h-1 csts-bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                            Our expertise, dedication, and unwavering commitment to delivering high-quality reports make us a trusted partner for clients across a wide range of industries. We understand that accurate documentation and insightful reporting are crucial for organizational success and effective decision-making.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2 text-gray-800">Professional Documentation</h3>
                            <p className="text-gray-600">Comprehensive and accurate meeting documentation with attention to every detail.</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2 text-gray-800">Expert Team</h3>
                            <p className="text-gray-600">Experienced rapporteurs with diverse industry knowledge and expertise.</p>
                        </div>

                        <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2 text-gray-800">Global Reach</h3>
                            <p className="text-gray-600">Virtual and in-person services to meet your needs anywhere in the world.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl lg:text-3xl font-bold text-gray-800 mb-6">
                            Why Choose CSTS Rapporteurs?
                        </h2>
                        <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Trusted by Leading Organizations</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                We have successfully provided rapporteur services for high-profile events, conferences, and meetings across various sectors including government, international trade, legal, technology, and finance.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Proven track record with prestigious organizations</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Specialized expertise in various industries</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Commitment to excellence and accuracy</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-gray-800 mb-4">Our Commitment</h4>
                            <p className="text-gray-700 leading-relaxed">
                                "We capture the essence of important meetings and events through comprehensive, accurate, and insightful reporting. We take pride in facilitating effective communication, decision-making, and knowledge-sharing by providing well-structured, detailed, and accessible reports to our clients."
                            </p>
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
                    Your browser does not support the video tag.
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-violet-900/10 z-10"></div>
                
                {/* Content */}
                <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Experience Professional Rapporteur Services?
                    </h2>
                    <p className="text-xl  mb-8 max-w-2xl mx-auto">
                        Let us help you capture every important detail of your next event with our expert documentation services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/services" 
                            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 transform hover:scale-105"
                        >
                            View Our Services
                        </Link>
                        <Link 
                            to="/contact" 
                            className=" csts-btn-primary   font-semibold px-8 py-4 rounded-lg transition-colors duration-200 transform hover:scale-105"
                        >
                            REQUEST OUR SERVICE - Book Now!
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;