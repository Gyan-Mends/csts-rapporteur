import React, { useState } from 'react';
import { type MetaFunction } from 'react-router';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const meta: MetaFunction = () => {
    return [
        { title: "Contact & Book Now - CSTS Rapporteur Services" },
        { name: "description", content: "Contact CSTS to book professional rapporteur services for your meetings, conferences, and events. Get a quote for virtual and in-person documentation services." },
        { name: "keywords", content: "contact CSTS, book rapporteur services, meeting documentation quote, professional reporting services" },
    ];
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        eventType: '',
        eventDate: '',
        eventFormat: 'in-person',
        eventDuration: '',
        attendees: '',
        specialRequirements: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                organization: '',
                eventType: '',
                eventDate: '',
                eventFormat: 'in-person',
                eventDuration: '',
                attendees: '',
                specialRequirements: '',
                message: ''
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 csts-hero-bg-2">
                <div className="absolute inset-0 csts-hero-overlay"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6">
                        REQUEST OUR SERVICE
                    </h1>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-violet-100 mb-6">
                        Book Now!
                    </h2>
                    <p className="text-xl lg:text-2xl text-violet-100 max-w-4xl mx-auto leading-relaxed">
                        Ready to ensure your event is professionally documented? Get in touch with CSTS today.
                    </p>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-800 mb-6">
                            Get In Touch
                        </h2>
                        <div className="w-24 h-1 csts-bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        <div className="text-center p-8 bg-gradient-to-br from-gray-100 to-white rounded-lg">
                            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
                            <p className="text-gray-700">info@csts.com</p>
                            <p className="text-gray-700">rapporteur@csts.com</p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-gray-100 to-white rounded-lg">
                            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
                            <p className="text-gray-700">+233 (0) 123 456 789</p>
                            <p className="text-gray-700">+233 (0) 987 654 321</p>
                        </div>

                        <div className="text-center p-8 bg-gradient-to-br from-gray-100 to-white rounded-lg">
                            <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>
                            <p className="text-gray-700">Mon - Fri: 8:00 AM - 6:00 PM</p>
                            <p className="text-gray-700">Sat: 9:00 AM - 2:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-800 mb-6">
                            Book Our Services
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Fill out the form below to request a quote for our professional rapporteur services. We'll get back to you within 24 hours.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                            <p className="text-green-700 text-lg">
                                Your request has been submitted successfully. We'll contact you within 24 hours to discuss your requirements.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="+233 123 456 789"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Organization *
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Your organization name"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Event Type *
                                    </label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select event type</option>
                                        <option value="conference">Conference</option>
                                        <option value="meeting">Board Meeting</option>
                                        <option value="workshop">Workshop</option>
                                        <option value="seminar">Seminar</option>
                                        <option value="summit">Summit</option>
                                        <option value="forum">Forum</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Event Date *
                                    </label>
                                    <input
                                        type="date"
                                        id="eventDate"
                                        name="eventDate"
                                        value={formData.eventDate}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <label htmlFor="eventFormat" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Event Format *
                                    </label>
                                    <select
                                        id="eventFormat"
                                        name="eventFormat"
                                        value={formData.eventFormat}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    >
                                        <option value="in-person">In-Person</option>
                                        <option value="virtual">Virtual</option>
                                        <option value="hybrid">Hybrid</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="eventDuration" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Duration *
                                    </label>
                                    <select
                                        id="eventDuration"
                                        name="eventDuration"
                                        value={formData.eventDuration}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    >
                                        <option value="">Select duration</option>
                                        <option value="half-day">Half Day (4 hours)</option>
                                        <option value="full-day">Full Day (8 hours)</option>
                                        <option value="2-days">2 Days</option>
                                        <option value="3-days">3 Days</option>
                                        <option value="week">1 Week</option>
                                        <option value="custom">Custom Duration</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="attendees" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Expected Attendees
                                    </label>
                                    <input
                                        type="number"
                                        id="attendees"
                                        name="attendees"
                                        value={formData.attendees}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="e.g., 50"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="specialRequirements" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Special Requirements
                                </label>
                                <textarea
                                    id="specialRequirements"
                                    name="specialRequirements"
                                    value={formData.specialRequirements}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Any specific documentation requirements, format preferences, or special considerations..."
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Additional Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    placeholder="Tell us more about your event, expectations, or any questions you have..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pink-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-pink-600 hover:to-violet-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Submit Request</span>
                            </button>

                            <p className="text-sm text-gray-600 text-center mt-4">
                                * Required fields. We'll respond to your request within 24 hours.
                            </p>
                        </form>
                    )}
                </div>
            </section>

            {/* Additional Information Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading lg:text-4xl font-bold text-gray-800 mb-6">
                            What Happens Next?
                        </h2>
                        <div className="w-24 h-1 csts-bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        {/* Connection Line - Hidden on mobile, visible on lg screens */}
                        <div className="hidden lg:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-pink-300 z-0"></div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-20">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Request Received</h3>
                                <p className="text-gray-600 text-sm">We receive and review your service request within 24 hours.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-violet-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-20">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Consultation Call</h3>
                                <p className="text-gray-600 text-sm">We schedule a consultation to understand your specific needs.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-20">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Proposal & Quote</h3>
                                <p className="text-gray-600 text-sm">We provide a detailed proposal and competitive quote.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-20">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Delivery</h3>
                                <p className="text-gray-600 text-sm">Professional rapporteur services delivered as agreed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
