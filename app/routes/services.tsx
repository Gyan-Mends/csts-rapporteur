import React from 'react';
import { Link, type MetaFunction } from 'react-router';
import { FileText, Users, BarChart3, Settings, Globe, Monitor, CheckCircle } from 'lucide-react';
import backgroundVideo from '~/components/images/large1.mp4';

export const meta: MetaFunction = () => {
    return [
        { title: "Rapporteur Services - CSTS Professional Documentation" },
        { name: "description", content: "Comprehensive rapporteur services including professional documentation, customized reports, meeting minutes, data analysis, and virtual/in-person coverage." },
        { name: "keywords", content: "rapporteur services, meeting minutes, professional documentation, data analysis, virtual meetings, CSTS services" },
    ];
};

const Services = () => {
    const services = [
        {
            icon: <Users className="w-12 h-12 text-pink-500" />,
            title: "Professional Rapporteur Services",
            description: "Our team of skilled rapporteurs are experienced in capturing the essence of discussions, presentations, and key takeaways from various events, meetings, and conferences. We ensure that all relevant information is accurately documented.",
            features: [
                "Experienced and skilled rapporteurs",
                "Capture discussion essence and key takeaways",
                "Accurate documentation of all relevant information",
                "Professional presentation of findings"
            ]
        },
        {
            icon: <Settings className="w-12 h-12 text-pink-500" />,
            title: "Customized Report Generation",
            description: "We tailor our reports to meet the specific needs and goals of each client. Our ability to adapt to diverse industries and event types is a testament to our versatility.",
            features: [
                "Tailored reports for specific client needs",
                "Industry-specific formatting and terminology",
                "Adaptable to diverse event types",
                "Goal-oriented documentation approach"
            ]
        },
        {
            icon: <FileText className="w-12 h-12 text-pink-500" />,
            title: "Meeting Minutes and Documentation",
            description: "We provide detailed meeting minutes and documentation services that are integral to preserving the outcomes of board meetings, seminars, workshops, and more.",
            features: [
                "Detailed meeting minutes",
                "Board meeting documentation",
                "Seminar and workshop records",
                "Outcome preservation and tracking"
            ]
        },
        {
            icon: <BarChart3 className="w-12 h-12 text-pink-500" />,
            title: "Data Analysis and Insights",
            description: "Our services go beyond reporting; we analyze data and provide valuable insights to support our clients' strategic decision-making.",
            features: [
                "Beyond basic reporting services",
                "Data analysis and interpretation",
                "Strategic insights and recommendations",
                "Decision-making support"
            ]
        },
        {
            icon: <Globe className="w-12 h-12 text-pink-500" />,
            title: "Virtual and In-Person Capacity",
            description: "Our expertise includes structures to meet the needs of our clients in both virtual and in-person events. We can cover meetings virtually and professionally, ensuring nothing important is missed.",
            features: [
                "Virtual event coverage",
                "In-person meeting documentation",
                "Specialized virtual meeting tools",
                "Professional coverage regardless of format"
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 csts-hero-bg-3">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
                        Rapporteur Services
                    </h1>
                    <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
                        Comprehensive, accurate, and insightful reporting services for your meetings, conferences, and events
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                            Capturing the Essence of Important Events
                        </h2>
                        <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-8">
                            As a compulsory duty, we capture the essence of important meetings and events through comprehensive, accurate, and insightful reporting. We take pride in facilitating effective communication, decision-making, and knowledge-sharing by providing well-structured, detailed, and accessible reports to our clients.
                        </p>
                        <p className="text-lg text-gray-700">
                            With a team of experienced rapporteurs and a commitment to excellence, we deliver high-quality reports that play a critical role in knowledge dissemination, effective communication, and informed decision-making.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                            Our Key Services
                        </h2>
                        <div className="w-24 h-1 csts-bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Virtual Services Highlight */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Virtual Meeting Expertise
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                CSTS values its ability to provide accessible service that is also forward-looking. We can cover meetings virtually and professionally, especially because, without expertise, virtual meetings can be very challenging to track.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                Our skilled rapporteurs with our specialized tools can ensure that nothing important is missed, regardless of the meeting format or platform used.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Monitor className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Advanced virtual meeting tracking capabilities</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Settings className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Specialized tools for virtual documentation</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Users className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Expert rapporteurs trained in virtual environments</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Why Virtual Expertise Matters</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start space-x-2">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Virtual meetings require specialized attention to capture non-verbal cues</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Technical challenges can affect information flow and documentation</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Multiple communication channels need simultaneous monitoring</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Screen sharing and digital presentations require detailed documentation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                            Our Process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Pre-Event Preparation", description: "Understanding your event goals, format, and specific requirements" },
                            { step: "2", title: "Professional Documentation", description: "Real-time capture of discussions, decisions, and key insights" },
                            { step: "3", title: "Analysis & Compilation", description: "Organizing and analyzing captured information for clarity" },
                            { step: "4", title: "Report Delivery", description: "Providing comprehensive, tailored reports within agreed timelines" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-white text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            {/* <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
                        Ready to Document Your Next Event?
                    </h2>
                    <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                        Partner with CSTS for professional rapporteur services that ensure every important detail is captured and preserved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/our-work" 
                            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                            View Our Work
                        </Link>
                        <Link 
                            to="/contact" 
                            className="border-2 border-white text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                            Get a Quote
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
                    Ready to Document Your Next Event?
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-violet-900/10 z-10"></div>

                {/* Content */}
                <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Document Your Next Event?
                    </h2>
                    <p className="text-xl  mb-8 max-w-2xl mx-auto">
                        Partner with CSTS for professional rapporteur services that ensure every important detail is captured and preserved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/our-work"
                            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                            View Our Work
                        </Link>
                        <Link
                            to="/contact"
                            className="csts-btn-primary text-white hover:bg-white hover:text-pink-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;