import React from 'react';
import { Link, type MetaFunction } from 'react-router';
import { FileText, Users, Eye, Clock, CheckCircle, Quote } from 'lucide-react';
import backgroundVideo from '~/components/images/large1.mp4';

export const meta: MetaFunction = () => {
    return [
        { title: "Why Rapporteurs? - CSTS Professional Documentation Services" },
        { name: "description", content: "Learn about the importance of professional rapporteurs for meetings, conferences, and events. Discover how accurate documentation drives organizational success." },
        { name: "keywords", content: "rapporteur importance, meeting documentation, professional reporting, organizational effectiveness" },
        { name: "og:image", content: "https://csts.com.gh/images/csts-logo.png" },
        { name: "og:title", content: "CSTS - Professional Rapporteur Services" },
        { name: "og:description", content: "Corporate Secretarial and Training Services Limited offers exceptional rapporteur services with flexibility, impartiality and credible analytical skills for your formal events." },
        { name: "og:url", content: "https://csts.com.gh" },
        { name: "og:type", content: "website" },
        { name: "og:locale", content: "en_US" },
        { name: "og:site_name", content: "CSTS" },
    ];
};

const WhyRapporteurs = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 csts-hero-bg-2">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
                        Why Rapporteurs?
                    </h1>
                    <p className="text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
                        Understanding the critical role of professional documentation in organizational success
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Opening Statement */}
                        <div className="mb-16">
                            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                                Discussions and decisions at meetings, workshops, forums, summits, and conferences need to be accurately recorded for further actions towards effective organizational work. A rapporteur monitors the development of a certain event to capture and report key resolutions and consensus outcomes.
                            </p>
                            <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                                Such documentation is important for reference and follow-up after the meeting and shall ensure that all members are satisfied with the outcomes of discussions.
                            </p>
                        </div>

                        {/* Key Benefits Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <FileText className="w-8 h-8 text-pink-500 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-800">Accurate Documentation</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Ensures all key decisions, discussions, and outcomes are properly recorded for future reference and accountability.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <Users className="w-8 h-8 text-pink-500 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-800">Member Satisfaction</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Guarantees that all participants are aligned with and satisfied with the documented outcomes of discussions.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <Eye className="w-8 h-8 text-pink-500 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-800">Event Monitoring</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Continuous monitoring of event development to capture key moments and consensus outcomes.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-lg">
                                <div className="flex items-center mb-4">
                                    <Clock className="w-8 h-8 text-pink-500 mr-3" />
                                    <h3 className="text-xl font-bold text-gray-800">Follow-up Actions</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Provides essential reference materials for implementing decisions and tracking progress on action items.
                                </p>
                            </div>
                        </div>

                        {/* Professional Qualities Section */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                                Beyond Writing: Professional Qualities
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 text-center">
                                Rapporteurs go beyond writing. They have certain qualities and follow guidelines and principles that ensure effectiveness.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { quality: "Emotional Balance", description: "Maintaining objectivity and composure throughout complex discussions" },
                                    { quality: "Respect", description: "Treating all participants and viewpoints with dignity and professionalism" },
                                    { quality: "Concentration", description: "Sustained focus on capturing every important detail and nuance" },
                                    { quality: "Teamwork", description: "Collaborating effectively with organizers and participants" },
                                    { quality: "Perseverance", description: "Commitment to accuracy and completeness even in challenging situations" },
                                    { quality: "Impartiality", description: "Neutral stance ensuring fair representation of all perspectives" }
                                ].map((item, index) => (
                                    <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
                                        <CheckCircle className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                                        <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.quality}</h4>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Expert Quote Section */}
                        <div className="bg-gradient-to-r from-pink-50 to-violet-50 p-8 rounded-lg mb-16">
                            <div className="flex items-start space-x-4">
                                <Quote className="w-8 h-8 text-pink-500 mt-1 flex-shrink-0" />
                                <div>
                                    <blockquote className="text-lg italic text-gray-800 mb-4">
                                        "Without Rapporteurs, substantive progress cannot be made, informed decisions will be hindered, and reference materials will hardly be available and accessible."
                                    </blockquote>
                                    <cite className="text-sm font-semibold text-gray-600">
                                        - Taiwo Peter Akinremi, 7th Rapporteur General of the African IGF
                                    </cite>
                                </div>
                            </div>
                        </div>

                        {/* Impact Statement */}
                        {/* <div className="text-center bg-gradient-to-r from-gray-100 to-white text-gray-800 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
                            <p className="text-lg">
                                A meeting is only effective based on its outcomes, and our rapporteurs ensure that outcome.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            {/* <section className="py-20 bg-gradient-to-r from-violet-500 to-pink-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Ensure Your Meeting's Success?
                    </h2>
                    <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
                        Don't let important decisions and discussions go undocumented. Trust CSTS to provide professional rapporteur services for your next event.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/services" 
                            className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                            Explore Our Services
                        </Link>
                        <Link 
                            to="/contact" 
                            className="border-2 border-white text-white hover:bg-white hover:text-violet-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </section> */}

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
                    Ready to Ensure Your Meeting's Success?
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-violet-900/10 z-10"></div>

                {/* Content */}
                <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                    Ready to Ensure Your Meeting's Success?
                    </h2>
                    <p className="text-xl  mb-8 max-w-2xl mx-auto">
                    Don't let important decisions and discussions go undocumented. Trust CSTS to provide professional rapporteur services for your next event.
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
};

export default WhyRapporteurs; 