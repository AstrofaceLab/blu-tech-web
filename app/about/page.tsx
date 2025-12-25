'use client';

import { useState, useEffect } from 'react';

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const values = [
        {
            title: 'Excellence',
            description: 'Global standards in everything we build',
        },
        {
            title: 'Innovation',
            description: 'Engineering better solutions',
        },
        {
            title: 'Impact',
            description: 'Creating measurable value',
        },
        {
            title: 'Integrity',
            description: 'Trust and transparency',
        },
        {
            title: 'African Leadership',
            description: 'Built from Africa, for the world',
        },
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 gradient-bg">
                    <div className="absolute inset-0 grid-pattern opacity-30"></div>
                    <div className="absolute inset-0 orbital-pattern opacity-20"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-white mb-6 leading-tight">
                                Building Africa&apos;s Future Through <span className="gradient-text">Advanced Technology</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[#BFC7D5] mb-8 max-w-3xl mx-auto">
                                Blu Technologies & Innovation is a deep-tech company committed to engineering intelligent systems, scalable platforms, and digital infrastructure that power Africa&apos;s next era of growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-white mb-4">
                                Our <span className="gradient-text">Origin Story</span>
                            </h2>
                        </div>

                        <div className="card p-8 md:p-12">
                            <p className="text-[#BFC7D5] text-lg leading-relaxed mb-6">
                                Blu Technologies & Innovation was founded on a simple but powerful belief: <span className="text-white font-semibold">Africa must not only consume technology — it must build it.</span>
                            </p>
                            <p className="text-[#BFC7D5] text-lg leading-relaxed">
                                The company emerged from a vision to create globally competitive technology solutions while nurturing local talent, innovation, and infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Mission & <span className="gradient-text">Vision</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="card-hover">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold text-2xl mb-4">Mission</h3>
                            <p className="text-[#BFC7D5] text-lg">
                                To build advanced technologies that empower Africa&apos;s digital future.
                            </p>
                        </div>

                        <div className="card-hover">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-white font-semibold text-2xl mb-4">Vision</h3>
                            <p className="text-[#BFC7D5] text-lg">
                                To become Africa&apos;s leading deep-tech powerhouse.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Stand For (Values) */}
            <section className="section bg-[#0E141F]/50 relative">
                <div className="absolute inset-0 hexagonal-grid opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            What We <span className="gradient-text">Stand For</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Our core values guide every decision and action
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                className={`card p-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#0077FF]/20 flex items-center justify-center mb-4">
                                    <div className="w-6 h-6 rounded-full bg-[#0077FF]"></div>
                                </div>
                                <h3 className="text-white font-semibold text-xl mb-3">{value.title}</h3>
                                <p className="text-[#BFC7D5]">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do (Positioning Summary) */}
            <section className="section">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-white mb-4">
                                What We <span className="gradient-text">Do</span>
                            </h2>
                        </div>

                        <div className="card p-8 md:p-12">
                            <p className="text-[#BFC7D5] text-lg leading-relaxed mb-6">
                                Advanced software engineering, artificial intelligence systems, cloud and digital infrastructure, and talent development.
                            </p>
                            <p className="text-white text-xl font-semibold">
                                Blu Tech operates as a technology partner — not a vendor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Role in Africa's Future */}
            <section className="section bg-[#0E141F]/50 relative">
                <div className="absolute inset-0 neural-pattern opacity-20"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Our Role in <span className="gradient-text">Africa&apos;s Future</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="card p-8 md:p-12">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#BFC7D5] text-lg pt-1">
                                        Strengthening Africa&apos;s digital infrastructure
                                    </p>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#BFC7D5] text-lg pt-1">
                                        Enabling local innovation ecosystems
                                    </p>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#BFC7D5] text-lg pt-1">
                                        Supporting startups and emerging talent
                                    </p>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#BFC7D5] text-lg pt-1">
                                        Building technologies that scale globally
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership & Governance */}
            <section className="section">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-white mb-4">
                                Leadership & <span className="gradient-text">Governance</span>
                            </h2>
                        </div>

                        <div className="card p-8 md:p-12 text-center">
                            <p className="text-[#BFC7D5] text-lg">
                                Founder-led vision supported by strong governance, partnerships, and advisory growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="section bg-gradient-to-br from-[#0A1A4A] to-[#0A0F1A] relative overflow-hidden">
                <div className="absolute inset-0 orbital-pattern opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Partner With Blu Tech</h2>
                        <p className="text-xl text-[#BFC7D5] mb-8">
                            Whether you are building, investing, or innovating — Blu Technologies & Innovation is shaping the future of African technology.
                        </p>
                        <a href="/contact" className="btn-hero">Start a Conversation</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
