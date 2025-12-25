'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: 'AI Systems',
      description: 'Advanced artificial intelligence and machine learning platforms designed for scalable African solutions.',
      icon: '🤖',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'High-performance computing and data center services powering Africa\'s digital transformation.',
      icon: '☁️',
    },
    {
      title: 'Development Platforms',
      description: 'Intelligent development tools and frameworks for building next-generation applications.',
      icon: '⚡',
    },
    {
      title: 'Data Analytics',
      description: 'Real-time data processing and analytics systems for actionable business intelligence.',
      icon: '📊',
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions protecting critical digital infrastructure.',
      icon: '🔒',
    },
    {
      title: 'IoT Solutions',
      description: 'Connected device ecosystems enabling smart cities and intelligent automation.',
      icon: '🌐',
    },
  ];

  const technologies = [
    { name: 'Artificial Intelligence', progress: 95 },
    { name: 'Cloud Computing', progress: 90 },
    { name: 'Blockchain', progress: 85 },
    { name: 'Quantum Computing', progress: 75 },
    { name: 'Edge Computing', progress: 88 },
    { name: 'Neural Networks', progress: 92 },
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '1000+', label: 'Students Trained' },
    { value: '15+', label: 'Countries Served' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg">
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 neural-pattern"></div>
          <div className="absolute inset-0 orbital-pattern opacity-40"></div>
          <div className="absolute inset-0 fractal-pattern opacity-20"></div>

          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0077FF] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#167DFF] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#0A1A4A] rounded-full blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>


        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-white mb-6 leading-tight">
                Accelerating Africa&apos;s <span className="gradient-text">Digital Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#BFC7D5] mb-8 max-w-3xl mx-auto">
                Building intelligent systems and advanced technology platforms that power Africa&apos;s next generation of innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="btn-hero">Explore Our Solutions</button>
                <button className="btn-secondary">Join the Academy</button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-[#BFC7D5] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#0077FF] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#0077FF] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">Our <span className="gradient-text">Services</span></h2>
            <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
              Comprehensive deep-tech solutions designed for Africa&apos;s digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-hover group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-white mb-3 group-hover:text-[#0077FF] transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[#BFC7D5]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="section bg-[#0E141F]/50 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white mb-6">
                Cutting-Edge <span className="gradient-text">Technology</span>
              </h2>
              <p className="text-[#BFC7D5] text-lg mb-8">
                We leverage the most advanced technologies to build scalable, intelligent platforms that drive innovation across Africa and beyond.
              </p>
              <div className="space-y-6">
                {technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{tech.name}</span>
                      <span className="text-[#0077FF]">{tech.progress}%</span>
                    </div>
                    <div className="h-2 bg-[#1E2738] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0077FF] to-[#167DFF] rounded-full transition-all duration-1000"
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077FF] rounded-full blur-[100px] opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">Innovation at Scale</h3>
                  <ul className="space-y-4">
                    {[
                      'High-Performance Computing Infrastructure',
                      'Advanced AI & Machine Learning Models',
                      'Distributed Cloud Architecture',
                      'Real-Time Data Processing',
                      'Enterprise-Grade Security',
                      'Scalable API Platforms',
                    ].map((item) => (
                      <li key={item} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-[#0077FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#0077FF]"></div>
                        </div>
                        <span className="text-[#BFC7D5]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section id="academy" className="section relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Blu Tech <span className="gradient-text">Academy</span>
            </h2>
            <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
              Empowering Africa&apos;s next wave of innovators with world-class training and industry-ready certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Machine Learning',
                duration: '12 Weeks',
                level: 'Advanced',
                students: '500+',
              },
              {
                title: 'Cloud Architecture',
                duration: '10 Weeks',
                level: 'Intermediate',
                students: '350+',
              },
              {
                title: 'Full-Stack Development',
                duration: '16 Weeks',
                level: 'Beginner to Advanced',
                students: '800+',
              },
            ].map((course) => (
              <div key={course.title} className="card-hover">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white text-xl font-semibold">{course.title}</h3>
                  <span className="px-3 py-1 bg-[#0077FF]/20 text-[#0077FF] text-xs rounded-full">
                    {course.level}
                  </span>
                </div>
                <div className="space-y-3 text-[#BFC7D5]">
                  <div className="flex items-center space-x-2">
                    <span>⏱️</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>👥</span>
                    <span>{course.students} Students</span>
                  </div>
                </div>
                <button className="btn-secondary w-full mt-6">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-[#0E141F]/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">
              About <span className="gradient-text">Blu Tech</span>
            </h2>
            <p className="text-[#BFC7D5] text-lg mb-8 leading-relaxed">
              Blu Technologies & Innovation is Africa&apos;s frontier deep-tech powerhouse—building AI, infrastructure,
              and next-generation digital platforms designed for global scale. We combine cutting-edge technology
              with African innovation to create scalable impact across the continent and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { title: 'Mission', text: 'Building intelligent systems for Africa\'s digital future' },
                { title: 'Vision', text: 'Becoming Africa\'s leading deep-tech innovation hub' },
                { title: 'Values', text: 'Excellence, Innovation, Impact, Integrity' },
              ].map((item) => (
                <div key={item.title} className="card">
                  <h3 className="text-[#0077FF] font-semibold mb-3">{item.title}</h3>
                  <p className="text-[#BFC7D5]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Clients Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 hexagonal-grid opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              Trusted by <span className="gradient-text">Leading Organizations</span>
            </h2>
            <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
              Partnering with Africa&apos;s most innovative companies and institutions
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              'African Union',
              'Tech Incubator',
              'Innovation Hub',
              'Digital Africa',
              'Smart Cities',
              'AI Research Lab',
              'Cloud Partners',
              'Data Institute',
            ].map((partner) => (
              <div
                key={partner}
                className="card-hover flex items-center justify-center p-8 text-center"
              >
                <div className="text-[#BFC7D5] font-semibold">{partner}</div>
              </div>
            ))}
          </div>

          {/* Key Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Award Winning',
                description: 'Recognized for innovation in African tech',
              },
              {
                icon: '🌍',
                title: 'Pan-African',
                description: 'Operating across 15+ African countries',
              },
              {
                icon: '⚡',
                title: 'Fast Growing',
                description: '300% year-over-year growth',
              },
            ].map((achievement) => (
              <div key={achievement.title} className="card text-center">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                <p className="text-[#BFC7D5]">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-[#0E141F]/50 relative">
        <div className="absolute inset-0 orbital-pattern"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-[#BFC7D5] text-lg max-w-2xl mx-auto">
              Hear from the innovators we&apos;ve empowered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Amara Okafor',
                role: 'CTO, FinTech Solutions Africa',
                quote:
                  'Blu Tech transformed our infrastructure. Their AI systems helped us scale from 10,000 to 1 million users in 6 months.',
              },
              {
                name: 'James Mwangi',
                role: 'Founder, AgriTech Kenya',
                quote:
                  'The academy program equipped our team with cutting-edge skills. We built our entire platform using what we learned.',
              },
              {
                name: 'Fatima Hassan',
                role: 'Director of Innovation, Smart Cities Initiative',
                quote:
                  'Their cloud architecture is world-class. We process 10TB of data daily with 99.99% uptime.',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="card-hover">
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#0077FF] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-[#BFC7D5] italic mb-6">&quot;{testimonial.quote}&quot;</p>
                </div>
                <div className="border-t border-[#1E2738] pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-[#5A6372] text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-white mb-4">Get In <span className="gradient-text">Touch</span></h2>
              <p className="text-[#BFC7D5] text-lg">
                Ready to transform your business with advanced technology? Let&apos;s talk.
              </p>
            </div>

            <div className="card">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">Name</label>
                    <input type="text" className="input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white mb-2 text-sm font-medium">Email</label>
                    <input type="email" className="input" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">Subject</label>
                  <input type="text" className="input" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">Message</label>
                  <textarea className="input min-h-[150px]" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
