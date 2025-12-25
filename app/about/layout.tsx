import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Blu Technologies & Innovation',
    description: 'Building Africa\'s future through advanced technology. A deep-tech company committed to engineering intelligent systems, scalable platforms, and digital infrastructure.',
    keywords: [
        'about Blu Tech',
        'African technology company',
        'deep tech Africa',
        'technology innovation',
        'digital transformation Africa',
        'software engineering Africa',
        'AI company Africa',
        'tech leadership',
        'African tech future',
        'technology partner',
    ],
    openGraph: {
        title: 'About | Blu Technologies & Innovation',
        description: 'Building Africa\'s Future Through Advanced Technology',
        type: 'website',
        url: 'https://blutechafrica.com/about',
        siteName: 'Blu Technologies & Innovation',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About | Blu Technologies & Innovation',
        description: 'Africa\'s leading deep-tech powerhouse',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
