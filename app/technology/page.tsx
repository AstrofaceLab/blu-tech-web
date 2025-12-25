'use client';

import { useState, useEffect } from 'react';

export default function TechnologyPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const philosophyPrinciples = [
        'Technology must scale before it is beautiful',
        'Architecture decisions define long-term success',
        'Automation, intelligence, and data are first-class citizens',
        'Systems must be resilient, observable, and secure by design',
        'Africa deserves world-class engineering, not shortcuts',
    ];

    const technologyDomains = [
        {
            title: 'Artificial Intelligence & Data Systems',
            description: 'Machine learning pipelines, predictive systems, intelligent automation, data engineering & analytics.',
            icon: '🤖',
        },
        {
            title: 'Software Engineering',
            description: 'Web and mobile platforms, API-first systems, distributed backend services, event-driven architectures.',
            icon: '⚙️',
        },
        {
            title: 'Cloud & Infrastructure Engineering',
            description: 'Cloud-native architectures, Infrastructure as Code, CI/CD pipelines, monitoring & observability.',
            icon: '☁️',
        },
        {
            title: 'Platform & Systems Integration',
            description: 'Third-party integrations, enterprise systems, legacy modernization, data synchronization.',
            icon: '🔗',
        },
    ];

    const architecturePrinciples = [
        'Modular & composable architectures',
        'Separation of concerns',
        'Scalability-first design',
        'Fault tolerance & resilience',
        'Observability-driven development',
    ];

    const techStack = [
        {
            category: 'Frontend',
            description: 'Modern JavaScript frameworks, component-driven UI systems, performance-first rendering.',
        },
        {
            category: 'Backend',
            description: 'Node.js, JVM, and Python ecosystems, REST & GraphQL APIs, microservices where appropriate.',
        },
        {
            category: 'AI & Data',
            description: 'Model training & inference pipelines, data processing frameworks, analytics tools.',
        },
        {
            category: 'Infrastructure',
            description: 'Cloud platforms, containerization, CI/CD tooling.',
        },
    ];

    const securityPillars = [
        {
            title: 'Security',
            description: 'Secure-by-design systems, access control, encryption, compliance awareness.',
        },
        {
            title: 'Scalability',
            description: 'Horizontal and vertical scaling strategies, load optimization.',
        },
        {
            title: 'Reliability',
            description: 'Monitoring, alerting, failover strategies, resilience planning.',
        },
    ];

    const futureReadyTech = [
        'Advanced AI and automation',
        'Distributed systems',
        'Edge computing',
        'Data-centric architectures',
        'Emerging platform models',
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 gradient-bg">
                    <div className="absolute inset-0 neural-pattern opacity-20"></div>
                    <div className="absolute inset-0 grid-pattern opacity-30"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-white mb-6 leading-tight">
                                Engineering Africa&apos;s Next Generation of <span className="gradient-text">Intelligent Systems</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[#BFC7D5] mb-8 max-w-3xl mx-auto">
                                We architect, build, and scale advanced technology systems using modern engineering principles and globally recognized standards.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="/services#services-overview" className="btn-hero">Explore Our Capabilities</a>
                                <a href="/#contact" className="btn-secondary">Partner With Our Engineers</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Philosophy */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Our <span className="gradient-text">Technology Philosophy</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Core principles that guide every engineering decision we make
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="card p-8 md:p-12">
                            <div className="space-y-6">
                                {philosophyPrinciples.map((principle, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-start space-x-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                                            }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center">
                                            <span className="text-white font-bold">{index + 1}</span>
                                        </div>
                                        <p className="text-[#BFC7D5] text-lg pt-1">{principle}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Technology Domains */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Core <span className="gradient-text">Technology Domains</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Deep expertise across critical technology areas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        {technologyDomains.map((domain, index) => (
                            <div
                                key={domain.title}
                                className={`card-hover transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="text-5xl mb-4">{domain.icon}</div>
                                <h3 className="text-white font-semibold text-xl mb-3">{domain.title}</h3>
                                <p className="text-[#BFC7D5]">{domain.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Architecture & Engineering Principles */}
            <section className="section bg-[#0E141F]/50 relative">
                <div className="absolute inset-0 hexagonal-grid opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Architecture & <span className="gradient-text">Engineering Principles</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Foundation of every system we build
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {architecturePrinciples.map((principle, index) => (
                            <div
                                key={index}
                                className="card p-6 text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#0077FF]/20 flex items-center justify-center mx-auto mb-4">
                                    <div className="w-6 h-6 rounded-full bg-[#0077FF]"></div>
                                </div>
                                <p className="text-white font-medium">{principle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tooling & Stack Overview */}
            <section className="section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Tooling & <span className="gradient-text">Technology Stack</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Modern, battle-tested technologies for enterprise-grade solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {techStack.map((stack, index) => (
                            <div key={stack.category} className="card p-8">
                                <h3 className="text-white font-semibold text-2xl mb-4">{stack.category}</h3>
                                <p className="text-[#BFC7D5] text-lg">{stack.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security, Scalability & Reliability */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Security, Scalability & <span className="gradient-text">Reliability</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Non-negotiable pillars of production systems
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {securityPillars.map((pillar, index) => (
                            <div key={pillar.title} className="card-hover text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />}
                                        {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                                        {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold text-xl mb-3">{pillar.title}</h3>
                                <p className="text-[#BFC7D5]">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future-Ready Technologies */}
            <section className="section relative">
                <div className="absolute inset-0 orbital-pattern opacity-20"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Future-Ready <span className="gradient-text">Technologies</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Investing in tomorrow&apos;s technology landscape today
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="card p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {futureReadyTech.map((tech, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 rounded-full bg-[#0077FF]"></div>
                                        <span className="text-[#BFC7D5] text-lg">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-gradient-to-br from-[#0A1A4A] to-[#0A0F1A] relative overflow-hidden">
                <div className="absolute inset-0 neural-pattern opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Let&apos;s Engineer What&apos;s Next</h2>
                        <p className="text-xl text-[#BFC7D5] mb-8">
                            Engage Blu Tech to design, build, or scale advanced technology systems tailored to your vision.
                        </p>
                        <a href="/#contact" className="btn-hero">Start Technical Engagement</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
