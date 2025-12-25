'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [mounted, setMounted] = useState(false);
    const [selectedIntent, setSelectedIntent] = useState('');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        organization: '',
        inquiryType: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const intentOptions = [
        { id: 'project', label: 'Start a Project', icon: '🚀' },
        { id: 'partnership', label: 'Partnership Inquiry', icon: '🤝' },
        { id: 'investment', label: 'Investment & Collaboration', icon: '💼' },
        { id: 'academy', label: 'Academy Enrollment', icon: '🎓' },
        { id: 'general', label: 'General Inquiry', icon: '💬' },
    ];

    const handleIntentSelect = (intentId: string) => {
        setSelectedIntent(intentId);
        setFormData({ ...formData, inquiryType: intentId });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                fullName: '',
                email: '',
                organization: '',
                inquiryType: '',
                message: '',
            });
            setSelectedIntent('');
        }, 3000);
    };

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 gradient-bg opacity-50">
                    <div className="absolute inset-0 grid-pattern opacity-20"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-white mb-6 leading-tight">
                                Let&apos;s Build Something <span className="gradient-text">Meaningful</span>
                            </h1>
                            <p className="text-xl text-[#BFC7D5] max-w-2xl mx-auto">
                                Start a conversation with Blu Technologies & Innovation. We respond with clarity, intent, and purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Intent Selector */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-white mb-4">
                            How Can We <span className="gradient-text">Help You?</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg">
                            Select the option that best describes your inquiry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16">
                        {intentOptions.map((intent, index) => (
                            <button
                                key={intent.id}
                                onClick={() => handleIntentSelect(intent.id)}
                                className={`p-6 rounded-xl border-2 transition-all duration-300 ${selectedIntent === intent.id
                                        ? 'border-[#0077FF] bg-[#0077FF]/10'
                                        : 'border-[#1E2738] bg-[#0A0F1A] hover:border-[#0077FF]/50'
                                    } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="text-4xl mb-3">{intent.icon}</div>
                                <p className="text-white font-medium text-sm">{intent.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        {isSubmitted ? (
                            <div className="card p-12 text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-white text-2xl font-semibold mb-4">Message Sent Successfully!</h3>
                                <p className="text-[#BFC7D5] text-lg">
                                    Thank you for reaching out. We typically respond within 24–48 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="card p-8 md:p-12">
                                <div className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-white font-medium mb-2">
                                            Full Name <span className="text-[#0077FF]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[#0E141F] border border-[#1E2738] text-white placeholder-[#5A6372] focus:border-[#0077FF] focus:outline-none transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div>
                                        <label htmlFor="email" className="block text-white font-medium mb-2">
                                            Email Address <span className="text-[#0077FF]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[#0E141F] border border-[#1E2738] text-white placeholder-[#5A6372] focus:border-[#0077FF] focus:outline-none transition-colors"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Organization */}
                                    <div>
                                        <label htmlFor="organization" className="block text-white font-medium mb-2">
                                            Organization <span className="text-[#5A6372] text-sm">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-lg bg-[#0E141F] border border-[#1E2738] text-white placeholder-[#5A6372] focus:border-[#0077FF] focus:outline-none transition-colors"
                                            placeholder="Your company or organization"
                                        />
                                    </div>

                                    {/* Inquiry Type */}
                                    <div>
                                        <label htmlFor="inquiryType" className="block text-white font-medium mb-2">
                                            Inquiry Type <span className="text-[#0077FF]">*</span>
                                        </label>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[#0E141F] border border-[#1E2738] text-white focus:border-[#0077FF] focus:outline-none transition-colors"
                                        >
                                            <option value="">Select an inquiry type</option>
                                            <option value="project">Start a Project</option>
                                            <option value="partnership">Partnership Inquiry</option>
                                            <option value="investment">Investment & Collaboration</option>
                                            <option value="academy">Academy Enrollment</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-white font-medium mb-2">
                                            Message <span className="text-[#0077FF]">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg bg-[#0E141F] border border-[#1E2738] text-white placeholder-[#5A6372] focus:border-[#0077FF] focus:outline-none transition-colors resize-none"
                                            placeholder="Tell us about your project, inquiry, or how we can help..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full btn-hero"
                                    >
                                        Send Message
                                    </button>

                                    <p className="text-[#5A6372] text-sm text-center">
                                        We typically respond within 24–48 hours
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Direct Contact Information */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-white mb-4">
                                Direct <span className="gradient-text">Contact</span>
                            </h2>
                            <p className="text-[#BFC7D5] text-lg">
                                Prefer to reach out directly? Here are our official channels
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="card p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0077FF]/20 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">General Inquiries</h3>
                                <a href="mailto:hello@blutechafrica.com" className="text-[#0077FF] hover:underline">
                                    hello@blutechafrica.com
                                </a>
                            </div>

                            <div className="card p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0077FF]/20 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Business Inquiries</h3>
                                <a href="mailto:business@blutechafrica.com" className="text-[#0077FF] hover:underline">
                                    business@blutechafrica.com
                                </a>
                            </div>

                            <div className="card p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0077FF]/20 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Academy Enrollment</h3>
                                <a href="mailto:academy@blutechafrica.com" className="text-[#0077FF] hover:underline">
                                    academy@blutechafrica.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="section">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="card p-8 md:p-12">
                            <h3 className="text-white text-2xl font-semibold mb-4">
                                Operating Globally, Rooted in Africa
                            </h3>
                            <p className="text-[#BFC7D5] text-lg">
                                Blu Technologies & Innovation serves clients across Africa and beyond, bringing world-class technology solutions to organizations ready to scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Assurance Section */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-white mb-4">
                                Your <span className="gradient-text">Assurance</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Confidential</h3>
                                <p className="text-[#BFC7D5]">All inquiries are handled confidentially</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Meaningful</h3>
                                <p className="text-[#BFC7D5]">We prioritize meaningful collaborations</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Reviewed</h3>
                                <p className="text-[#BFC7D5]">Every message is reviewed by our team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
