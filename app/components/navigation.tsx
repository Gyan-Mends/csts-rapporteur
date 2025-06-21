import { useState } from "react";
import { Users, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import logo from "~/components/images/CSTS Logo.png";

const navigation = [
    { name: "Home", to: "/", isExternal: true },
    { name: "Why Rapporteurs?", to: "/why-rapporteurs", isExternal: true },
    { name: "Our Services", to: "/services", isExternal: true },
    { name: "Our Work", to: "/our-work", isExternal: true },
    { name: "Reports", to: "/reports", isExternal: true },
    { name: "Contact", to: "/contact", isExternal: true },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
        if (isExternal) {
            // Let the browser handle external navigation
            setMobileMenuOpen(false);
            return;
        }

        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="border border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 transition-all duration-300 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                    >
                        <img src={logo} alt="CSTS" className=" h-10" />
                        
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.to;
                            return item.isExternal ? (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={`font-medium transition-colors duration-200 relative group ${isActive
                                            ? 'text-pink-500 csts-text-primary'
                                            : 'text-gray-700 hover:text-pink-500'
                                        }`}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 csts-bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.to}
                                    className={`font-medium transition-colors duration-200 relative group ${isActive
                                            ? 'text-pink-500 csts-text-primary'
                                            : 'text-gray-700 hover:text-pink-500'
                                        }`}
                                    onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 csts-bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </a>
                            );
                        })}

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="csts-btn-primary font-heading px-6 py-2 text-sm"
                        >
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t pt-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => {
                                const isActive = location.pathname === item.to;
                                return item.isExternal ? (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className={`font-medium transition-colors duration-200 py-2 ${isActive
                                                ? 'text-pink-500 csts-text-primary font-semibold'
                                                : 'text-gray-700 hover:text-pink-500'
                                            }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                        {isActive && <span className="ml-2 text-pink-500">•</span>}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className={`font-medium transition-colors duration-200 py-2 ${isActive
                                                ? 'text-pink-500 csts-text-primary font-semibold'
                                                : 'text-gray-700 hover:text-pink-500'
                                            }`}
                                        onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                    >
                                        {item.name}
                                        {isActive && <span className="ml-2 text-pink-500">•</span>}
                                    </a>
                                );
                            })}


                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
