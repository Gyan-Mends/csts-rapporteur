import { Outlet } from "react-router";
import Navigation from "~/components/navigation";
import { Link } from "react-router";
import { Mail, Phone, MapPin, FileText, Users, Shield, Facebook, X, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "~/components/images/CSTS Logo.png";

export default function AppLayout() {
    return (
        <div className="min-h-screen">
             {/* Navigation */}
             <Navigation />
            <Outlet />
             {/* Footer */}
             <footer className=" ">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {/* About CSTS */}
                            <div className="lg:col-span-2">
                                <div className="mb-6">
                                  <img src={logo} alt="CSTS" className=" h-10" />
                                </div>
                                <p className=" leading-relaxed mb-6 max-w-md">
                                    Corporate Secretarial and Training Services Limited provides exceptional rapporteur services 
                                    with flexibility, impartiality, and credible analytical skills for your formal events.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="https://web.facebook.com/cstsghana/about" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <Facebook className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="https://x.com/cstsgh" className="w-10 h-10 csts-bg-secondary rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <X className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="https://www.instagram.com/cstsghana" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <Instagram className="text-white text-lg" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/csts-ghana-398975174/" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <Linkedin className="text-white text-lg" />
                                    </a>
                                    {/* youtube */}
                                    <a href="https://www.youtube.com/@cstsghana6166" className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                                        <Youtube className="text-white text-lg" />
                                    </a>
                                </div>
                            </div>

                            {/* Our Services */}
                            <div>
                                <h4 className="font-heading text-lg font-semibold mb-6 csts-text-primary">Our Services</h4>
                                <ul className="space-y-3">
                                    <li><Link to="/services" className=" hover:text-pink-400 transition-colors">Professional Rapporteur Services</Link></li>
                                    <li><Link to="/services" className=" hover:text-pink-400 transition-colors">Meeting Minutes & Documentation</Link></li>
                                    <li><Link to="/services" className=" hover:text-pink-400 transition-colors">Customized Report Generation</Link></li>
                                    <li><Link to="/services" className=" hover:text-pink-400 transition-colors">Data Analysis & Insights</Link></li>
                                    <li><Link to="/services" className=" hover:text-pink-400 transition-colors">Virtual & In-Person Coverage</Link></li>
                                    <li><Link to="/our-work" className=" hover:text-pink-400 transition-colors">Our Portfolio</Link></li>
                                </ul>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-heading text-lg font-semibold mb-6 csts-text-primary">Quick Links</h4>
                                <ul className="space-y-3">
                                    <li><Link to="/" className=" hover:text-pink-400 transition-colors">Home</Link></li>
                                    <li><Link to="/why-rapporteurs" className=" hover:text-pink-400 transition-colors">Why Rapporteurs?</Link></li>
                                    <li><Link to="/services" className=" hover:text-pink-400 transition-colors">Our Services</Link></li>
                                    <li><Link to="/our-work" className=" hover:text-pink-400 transition-colors">Our Work</Link></li>
                                    <li><Link to="/contact" className=" hover:text-pink-400 transition-colors">Contact Us</Link></li>
                                    <li><Link to="/contact" className=" hover:text-pink-400 transition-colors">Book Now</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 csts-text-primary">Contact Us</h4>
                                    <div className="space-y-3 ">
                                        <p className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-pink-500" />
                                            <span>15 Netflix Street UPSA Road, Madina, Accra</span>
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-pink-500" />
                                            <a href="mailto:info@csts.com" className="hover:text-pink-400 transition-colors">
                                            info@cstghana.com
                                            </a>
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-pink-500" />
                                            <a href="tel:+233123456789" className="hover:text-pink-400 transition-colors">
                                            +233 20 110 8331 / +233 50 632 5541 
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 csts-text-primary">Get Started</h4>
                                    <p className=" text-sm mb-4">
                                        Ready to ensure your event is professionally documented?
                                    </p>
                                    <Link to="/contact" className="csts-btn-primary text-sm">
                                        Request Our Services
                                    </Link>
                                </div>

                                <div>
                                    <h4 className="font-heading text-lg font-semibold mb-4 csts-text-primary">Our Expertise</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="  px-3 py-1 rounded-full text-xs">AfCFTA Meetings</span>
                                        <span className="  px-3 py-1 rounded-full text-xs">Legal Conferences</span>
                                        <span className="  px-3 py-1 rounded-full text-xs">Government Forums</span>
                                        <span className="  px-3 py-1 rounded-full text-xs">Business Roundtables</span>
                                        <span className="  px-3 py-1 rounded-full text-xs">Tech Conferences</span>
                                        <span className="  px-3 py-1 rounded-full text-xs">Virtual Events</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="bg-gray-100 py-6">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className=" text-sm">
                                © 2024 Corporate Secretarial and Training Services Limited (CSTS). All rights reserved.
                            </div>
                            <div className="flex gap-6 text-sm">
                                <a href="#privacy" className=" hover:text-pink-400 transition-colors">Privacy Policy</a>
                                <a href="#terms" className=" hover:text-pink-400 transition-colors">Terms of Service</a>
                                <a href="#professional-standards" className=" hover:text-pink-400 transition-colors">Professional Standards</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}