'use client';

import { useState, useEffect } from 'react';

export default function AcademyPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const philosophyPrinciples = [
        'Education must be practical, not theoretical',
        'Skills should map directly to industry needs',
        'Learning should lead to opportunity',
        'Africa\'s talent deserves global standards',
        'Innovation grows through mentorship and community',
    ];

    const learningPathways = [
        {
            title: 'Foundational Path',
            description: 'Digital literacy, programming fundamentals, problem-solving',
            level: 'Beginner',
        },
        {
            title: 'Professional Path',
            description: 'Software engineering, web & mobile development, cloud systems',
            level: 'Intermediate',
        },
        {
            title: 'Advanced Path',
            description: 'AI systems, data engineering, platform architecture',
            level: 'Advanced',
        },
        {
            title: 'Innovation Path',
            description: 'Product thinking, startup building, research & experimentation',
            level: 'Expert',
        },
    ];

    const programs = [
        {
            title: 'Software Engineering',
            topics: ['Web development', 'Backend systems', 'APIs & databases'],
        },
        {
            title: 'Artificial Intelligence',
            topics: ['Machine learning fundamentals', 'Applied AI systems', 'Data analytics'],
        },
        {
            title: 'Cloud & DevOps',
            topics: ['Cloud fundamentals', 'Infrastructure automation', 'Deployment pipelines'],
        },
        {
            title: 'Product & Innovation',
            topics: ['Product design', 'Startup execution', 'Technical leadership'],
        },
    ];

    const certificationPoints = [
        'Certificates issued by Blu Technologies & Innovation',
        'Aligned with real-world project outcomes',
        'Backed by performance-based assessment',
        'Designed to demonstrate employable skills',
    ];

    const targetAudience = [
        'Students and recent graduates',
        'Early-career professionals',
        'Career switchers into tech',
        'Founders and innovators',
        'Corporate teams (future expansion)',
    ];

    const outcomes = [
        'Job readiness',
        'Project-based portfolios',
        'Internship opportunities (future)',
        'Startup incubation pathways',
        'Community and mentorship access',
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
                                Building Africa&apos;s Next Generation of <span className="gradient-text">Technology Leaders</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-[#BFC7D5] mb-8 max-w-3xl mx-auto">
                                Blu Tech Academy equips learners with practical, industry-aligned skills in software engineering, AI, and emerging technologies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={() => {
                                        const pathwaysSection = document.querySelector('#learning-pathways');
                                        pathwaysSection?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="btn-hero"
                                >
                                    Explore Learning Paths
                                </button>
                                <a href="/#contact" className="btn-secondary">Apply to the Academy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academy Mission & Philosophy */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Our <span className="gradient-text">Learning Philosophy</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Core principles that guide our approach to education and talent development
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
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

            {/* Learning Pathways */}
            <section id="learning-pathways" className="section">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Learning <span className="gradient-text">Pathways</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Structured learning journeys designed for different skill levels and career goals
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {learningPathways.map((pathway, index) => (
                            <div
                                key={pathway.title}
                                className={`card-hover transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-white font-semibold text-xl">{pathway.title}</h3>
                                    <span className="px-3 py-1 rounded-full bg-[#0077FF]/20 text-[#0077FF] text-sm font-medium">
                                        {pathway.level}
                                    </span>
                                </div>
                                <p className="text-[#BFC7D5]">{pathway.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs & Courses */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Programs & <span className="gradient-text">Courses</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Industry-aligned curriculum covering critical technology domains
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {programs.map((program, index) => (
                            <div key={program.title} className="card p-8">
                                <h3 className="text-white font-semibold text-2xl mb-6">{program.title}</h3>
                                <ul className="space-y-3">
                                    {program.topics.map((topic) => (
                                        <li key={topic} className="flex items-start space-x-3">
                                            <div className="w-6 h-6 rounded-full bg-[#0077FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-[#0077FF]"></div>
                                            </div>
                                            <span className="text-[#BFC7D5]">{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification & Credibility */}
            <section className="section relative">
                <div className="absolute inset-0 hexagonal-grid opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Certification & <span className="gradient-text">Credibility</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Industry-recognized certification that demonstrates real skills
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="card p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {certificationPoints.map((point, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-[#BFC7D5]">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="section bg-[#0E141F]/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Who the Academy <span className="gradient-text">Is For</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            Designed for ambitious learners at different stages of their journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {targetAudience.map((audience, index) => (
                            <div key={index} className="card p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-[#0077FF]/20 flex items-center justify-center mx-auto mb-4">
                                    <div className="w-6 h-6 rounded-full bg-[#0077FF]"></div>
                                </div>
                                <p className="text-white font-medium">{audience}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes & Opportunities */}
            <section className="section relative">
                <div className="absolute inset-0 neural-pattern opacity-20"></div>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-white mb-4">
                            Outcomes & <span className="gradient-text">Opportunities</span>
                        </h2>
                        <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
                            What you gain from the Blu Tech Academy experience
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="card p-8 md:p-12">
                            <div className="space-y-6">
                                {outcomes.map((outcome, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0077FF] to-[#167DFF] flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-bold">{index + 1}</span>
                                        </div>
                                        <span className="text-[#BFC7D5] text-lg">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section bg-gradient-to-br from-[#0A1A4A] to-[#0A0F1A] relative overflow-hidden">
                <div className="absolute inset-0 orbital-pattern opacity-10"></div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-6">Start Your Technology Journey With Blu Tech</h2>
                        <p className="text-xl text-[#BFC7D5] mb-8">
                            Join a learning ecosystem designed to build skills, confidence, and opportunity.
                        </p>
                        <a href="/#contact" className="btn-hero">Apply to the Academy</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
