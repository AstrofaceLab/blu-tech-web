import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Blu Technologies & Innovation',
    description: 'Enterprise-grade technology solutions built for scale, intelligence, and impact. AI systems, platform engineering, digital transformation, cloud infrastructure, and startup enablement across Africa.',
    keywords: [
        'AI solutions Africa',
        'software development Africa',
        'digital transformation',
        'cloud infrastructure',
        'enterprise technology',
        'startup enablement',
        'machine learning',
        'platform engineering',
        'technology consulting',
        'Blu Tech services',
    ],
    openGraph: {
        title: 'Services | Blu Technologies & Innovation',
        description: 'Technology Solutions Built for Scale, Intelligence, and Impact',
        type: 'website',
        url: 'https://blutechafrica.com/services',
        siteName: 'Blu Technologies & Innovation',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Services | Blu Technologies & Innovation',
        description: 'Enterprise-grade technology solutions for modern businesses',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
