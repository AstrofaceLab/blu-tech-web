'use client';

import { useState, useEffect } from 'react';
import { ServiceIcons } from '@/components/ServiceIcons';

// SEO Metadata would be in parent layout or separate metadata file
// For client component, metadata is handled by layout

export default function ServicesPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const servicesOverview = [
        {
            icon: 'AI',
            title: 'AI & Intelligent Systems',
            description: 'Advanced AI solutions for automation and insights',
        },
        {
            icon: 'Platform',
            title: 'Software & Platform Engineering',
            description: 'Scalable web and mobile platforms',
        },
        {
            icon: 'Transform',
            title: 'Digital Transformation',
            description: 'Process modernization and system integration',
        },
        {
            icon: 'Cloud',
            title: 'Cloud & Infrastructure',
            description: 'Resilient cloud architectures',
        },
        {
            icon: 'Startup',
            title: 'Startup & Enterprise Enablement',
            description: 'From idea to execution partnerships',
        },
    ];

    const servicePillars = [
        {
            title: 'AI & Intelligent Systems',
            icon: 'AI',
            description: 'We design and deploy artificial intelligence solutions that automate processes, extract insights from data, and enable intelligent decision-making at scale.',
            capabilities: [
                'Machine learning model development',
                'AI-powered automation',
                'Predictive analytics',
                'Custom AI integrations',
                'Conversational AI systems',
            ],
            idealFor: [
                'Enterprises modernizing operations',
                'Startups building AI-first products',
                'Organizations leveraging data for growth',
            ],
        },
        {
            title: 'Software & Platform Engineering',
            icon: 'Platform',
            description: 'We build secure, scalable, and high-performance web and mobile platforms designed to support long-term growth.',
            capabilities: [
                'Web & mobile applications',
                'API-first architectures',
                'SaaS platform development',
                'Backend systems & databases',
                'System modernization',
            ],
            idealFor: [
                'Startups launching MVPs',
                'Businesses scaling digital products',
                'Organizations replacing legacy systems',
            ],
        },
        {
            title: 'Digital Transformation',
            icon: 'Transform',
            description: 'We help organizations rethink processes, technology, and systems to operate efficiently in a digital-first economy.',
            capabilities: [
                'Process digitization',
                'Systems integration',
                'Workflow automation',
                'Technology advisory',
                'Change enablement',
            ],
            idealFor: [
                'Traditional businesses going digital',
                'Enterprises modernizing workflows',
                'Organizations seeking efficiency',
            ],
        },
        {
            title: 'Cloud & Infrastructure',
            icon: 'Cloud',
            description: 'We design resilient cloud architectures that ensure performance, security, and scalability.',
            capabilities: [
                'Cloud migration',
                'Infrastructure design',
                'DevOps & CI/CD pipelines',
                'Security & compliance',
                'Performance optimization',
            ],
            idealFor: [
                'Companies moving to cloud',
                'Businesses scaling infrastructure',
                'Organizations prioritizing security',
            ],
        },
        {
            title: 'Startup & Enterprise Enablement',
            icon: 'Startup',
            description: 'We partner with innovators and enterprises from idea to execution, providing both technical and strategic support.',
            capabilities: [
                'Product strategy & roadmapping',
                'MVP development',
                'Technical due diligence',
                'Long-term technical partnerships',
            ],
            idealFor: [
                'Early-stage startups',
                'Enterprises launching new ventures',
                'Investors evaluating tech companies',
            ],
        },
    ];

    const engagementModels = [
        {
            title: 'Project-Based Engagements',
            description: 'Clearly defined scope and delivery timeline.',
            icon: 'Project',
        },
        {
            title: 'Dedicated Product Teams',
            description: 'Long-term collaboration with embedded teams.',
            icon: 'Team',
        },
        {
            title: 'Strategic Technology Partnerships',
            description: 'Ongoing advisory and co-development.',
            icon: 'Partnership',
        },
    ];

    const whyBluTech = [
        'Deep-tech focus, not generic development',
        'Africa-first, globally benchmarked standards',
        'Long-term partnership mindset',
        'Strong emphasis on scalability and sustainability',
        'Integrated ecosystem (technology, talent, innovation)',
    ];

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 gradient-bg">
                    <div className="absolute inset-0 grid-pattern opacity-30"></div>
                    <div className="absolute inset-0 orbital-pattern opacity-40"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h1 className="text-white mb-6 leading-tight">
                                Technology Solutions Built for <span className="gradient-text">Scale, Intelligence, and Impact</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[#BFC7D5] mb-8 max-w-3xl mx-auto">
                                We design and build advanced digital platforms, intelligent systems, and infrastructure solutions that enable businesses and innovators across Africa to compete globally.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a href="/#contact" className="btn-hero">Start a Project</a>
                                <button
                                    onClick={() => {
                                        const servicesSection = document.querySelector('#services-overview');
                                        servicesSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="btn-secondary"
                                >
                                    Explore Our Capabilities
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section id="services-overview" className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">Our <span className="gradient-text">Capabilities</span></h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Full-spectrum technology solutions for modern businesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {servicesOverview.map((service, index) => {
                            const IconComponent = ServiceIcons[service.icon as keyof typeof ServiceIcons];
                            return (
                                <div
                                    key={service.title}
                                    className={`card-hover text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex justify-center mb-4 text-[#0077FF]">
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                                    <p className="text-[#BFC7D5] text-sm">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Core Service Pillars */}
            {servicePillars.map((pillar, index) => (
                <section
                    key={pillar.title}
                    className={`section ${index % 2 === 0 ? '' : 'bg-[#0E141F]/50'}`}
                >
                    <div className="container-custom">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                            }`}>
                            {/* Content */}
                            <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                                <h2 className="text-white mb-4">{pillar.title}</h2>
                                <p className="text-[#BFC7D5] text-lg mb-8">{pillar.description}</p>

                                <div className="mb-8">
                                    <h3 className="text-white font-semibold mb-4 text-xl mt-6">Capabilities</h3>
                                    <ul className="space-y-3">
                                        {pillar.capabilities.map((capability) => (
                                            <li key={capability} className="flex items-start space-x-3">
                                                <div className="w-6 h-6 rounded-full bg-[#0077FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-[#0077FF]"></div>
                                                </div>
                                                <span className="text-[#BFC7D5]">{capability}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold mb-4 text-xl mt-6">Ideal For</h3>
                                    <ul className="space-y-2">
                                        {pillar.idealFor.map((item) => (
                                            <li key={item} className="flex items-center space-x-2 text-[#BFC7D5]">
                                                <span className="text-[#0077FF]">→</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className={index % 2 === 0 ? '' : 'lg:order-1'}>
                                <div className="card p-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077FF] rounded-full blur-[100px] opacity-10"></div>
                                    <div className="relative z-10 aspect-square flex items-center justify-center text-[#0077FF] opacity-20">
                                        {(() => {
                                            const IconComponent = ServiceIcons[pillar.icon as keyof typeof ServiceIcons];
                                            return (
                                                <div className="scale-[3]">
                                                    <IconComponent />
                                                </div>
                                            );
                                        })()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Engagement Models */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            How We <span className="gradient-text">Work With You</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Flexible engagement models designed for your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {engagementModels.map((model) => {
                            const IconComponent = ServiceIcons[model.icon as keyof typeof ServiceIcons];
                            return (
                                <div key={model.title} className="card-hover text-center">
                                    <div className="flex justify-center mb-4 text-[#0077FF]">
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-white font-semibold mb-3">{model.title}</h3>
                                    <p className="text-[#BFC7D5]">{model.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Blu Tech */}
            <section className="section">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-white mb-4">
                                Why <span className="gradient-text">Blu Tech</span>
                            </h2>
                            <p className="text-[#BFC7D5] text-lg">
                                What sets us apart from traditional agencies and dev shops
                            </p>
                        </div>

                        <div className="card p-8 md:p-12">
                            <ul className="space-y-6">
                                {whyBluTech.map((point) => (
                                    <li key={point} className="flex items-start space-x-4">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold">✓</span>
                                        </div>
                                        <span className="text-[#BFC7D5] text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-gradient-to-br from-[#0A1A4A] to-[#0A0F1A] relative overflow-hidden">
                <div className="absolute inset-0 hexagonal-grid opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Ready to Build the Future?</h2>
                        <p className="text-xl text-[#BFC7D5] mb-8">
                            Let&apos;s discuss how Blu Tech can support your next product, platform, or transformation initiative.
                        </p>
                        <a href="/#contact" className="btn-hero">Start a Conversation</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
