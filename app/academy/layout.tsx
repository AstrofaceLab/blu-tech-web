import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Academy | Blu Technologies & Innovation',
    description: 'Building Africa\'s next generation of technology leaders. Practical, industry-aligned skills in software engineering, AI, and emerging technologies.',
    keywords: [
        'tech education Africa',
        'software engineering courses',
        'AI training',
        'coding bootcamp Africa',
        'technology academy',
        'developer training',
        'career development',
        'tech skills',
        'programming courses',
        'Blu Tech Academy',
    ],
    openGraph: {
        title: 'Academy | Blu Technologies & Innovation',
        description: 'Building Africa\'s Next Generation of Technology Leaders',
        type: 'website',
        url: 'https://blutechafrica.com/academy',
        siteName: 'Blu Technologies & Innovation',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Academy | Blu Technologies & Innovation',
        description: 'Practical, industry-aligned technology education',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AcademyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
