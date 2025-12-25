import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Technology | Blu Technologies & Innovation',
    description: 'Engineering Africa\'s next generation of intelligent systems. Modern architecture, AI/ML pipelines, cloud-native infrastructure, and world-class engineering standards.',
    keywords: [
        'software architecture Africa',
        'AI engineering',
        'cloud infrastructure',
        'distributed systems',
        'microservices',
        'machine learning pipelines',
        'DevOps Africa',
        'enterprise architecture',
        'scalable systems',
        'technical excellence',
    ],
    openGraph: {
        title: 'Technology | Blu Technologies & Innovation',
        description: 'Engineering Africa\'s Next Generation of Intelligent Systems',
        type: 'website',
        url: 'https://blutechafrica.com/technology',
        siteName: 'Blu Technologies & Innovation',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technology | Blu Technologies & Innovation',
        description: 'Modern engineering principles and globally recognized standards',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function TechnologyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
