import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Blu Technologies & Innovation',
    description: 'Start a conversation with Blu Technologies & Innovation. We respond with clarity, intent, and purpose. Reach out for projects, partnerships, or academy enrollment.',
    keywords: [
        'contact Blu Tech',
        'technology consultation',
        'project inquiry',
        'partnership Africa',
        'tech collaboration',
        'business inquiry',
        'academy enrollment',
        'software development contact',
        'AI consultation',
        'enterprise technology',
    ],
    openGraph: {
        title: 'Contact | Blu Technologies & Innovation',
        description: 'Let\'s Build Something Meaningful',
        type: 'website',
        url: 'https://blutechafrica.com/contact',
        siteName: 'Blu Technologies & Innovation',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact | Blu Technologies & Innovation',
        description: 'Start a conversation with Blu Tech',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
