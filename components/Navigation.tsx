'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Track active section
            const sections = ['home', 'services', 'technology', 'academy', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Technology', href: '/technology' },
        { name: 'Academy', href: '/academy' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#0A0F1A]/95 backdrop-blur-lg shadow-lg shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        {/* Mobile Logo - Compact "B Blu" */}
                        <Image
                            src="/logo-mobile.jpg"
                            alt="Blu Technologies & Innovation"
                            width={1024}
                            height={682}
                            className="h-10 w-auto rounded-lg md:hidden group-hover:scale-105 transition-transform duration-200"
                            priority
                            unoptimized
                        />
                        {/* Desktop Logo - Full "Blu Technologies & Innovation" */}
                        <Image
                            src="/logo-fixed.jpg"
                            alt="Blu Technologies & Innovation"
                            width={928}
                            height={276}
                            className="h-12 w-auto rounded-lg hidden md:block group-hover:scale-105 transition-transform duration-200"
                            priority
                            unoptimized
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`relative group transition-colors duration-200 ${isActive ? 'text-white' : 'text-[#BFC7D5] hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#0077FF] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </a>
                            );
                        })}
                        <button className="btn-primary">Get Started</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-[#0A0F1A] border-t border-[#1E2738] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="container-custom py-4 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-[#BFC7D5] hover:text-white hover:pl-2 transition-all duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-primary w-full">Get Started</button>
                </div>
            </div>
        </nav>
    );
}
