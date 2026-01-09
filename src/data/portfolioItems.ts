export interface PortfolioItem {
    id: string;
    title: string;
    type: 'clientProject' | 'employment' | 'venture';
    subtitle: string;
    yearOrStatus: string;
    route: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    // Client Projects
    {
        id: 'dog-and-ride',
        title: 'Dog & Ride',
        type: 'clientProject',
        subtitle: 'Product Design',
        yearOrStatus: '2025',
        route: '/case-study/dog-and-ride'
    },
    {
        id: 'bunect',
        title: 'Bunect',
        type: 'clientProject',
        subtitle: 'Web Design',
        yearOrStatus: '2024',
        route: '/case-study/bunect'
    },
    {
        id: 'adclusive',
        title: 'Adclusive',
        type: 'clientProject',
        subtitle: 'Product UX',
        yearOrStatus: '2024',
        route: '/case-study/adclusive'
    },
    // Employment
    {
        id: 'mckinsey',
        title: 'McKinsey & Co.',
        type: 'employment',
        subtitle: 'Visual Communication Specialist',
        yearOrStatus: '3 Years',
        route: '/case-study/mckinsey'
    },
    // Ventures
    {
        id: 'curvix',
        title: 'Curvix',
        type: 'venture',
        subtitle: 'Founder',
        yearOrStatus: 'Current',
        route: '/case-study/curvix'
    },
    {
        id: 'gala-network',
        title: 'GalaNetwork',
        type: 'venture',
        subtitle: 'Co-founder',
        yearOrStatus: 'Current',
        route: '/case-study/gala-network'
    }
];
