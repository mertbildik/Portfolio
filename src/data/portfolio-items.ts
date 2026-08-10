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
        id: 'ofk',
        title: 'OFK Construction',
        type: 'clientProject',
        subtitle: 'Product Designer',
        yearOrStatus: '2025',
        route: '/portfolio/ofk'
    },
    {
        id: 'dog-and-ride',
        title: 'Dog & Ride',
        type: 'clientProject',
        subtitle: 'Multidisciplinary Designer',
        yearOrStatus: '2025',
        route: '/portfolio/dog-and-ride'
    },
    {
        id: 'bunect',
        title: 'Bunect',
        type: 'clientProject',
        subtitle: 'Design Lead',
        yearOrStatus: '2025',
        route: '/portfolio/bunect'
    },
    {
        id: 'adclusive',
        title: 'Adclusive',
        type: 'clientProject',
        subtitle: 'Product designer',
        yearOrStatus: '2024',
        route: '/portfolio/adclusive'
    },
    // Employment
    {
        id: 'mckinsey',
        title: 'McKinsey & Co.',
        type: 'employment',
        subtitle: 'Visual communication',
        yearOrStatus: '3 years',
        route: '/portfolio/mckinsey'
    },
    // Ventures
    {
        id: 'curvix',
        title: 'Curvix',
        type: 'venture',
        subtitle: 'Founder',
        yearOrStatus: 'Current',
        route: '/portfolio/curvix'
    },
    {
        id: 'gala-network',
        title: 'GalaNetwork',
        type: 'venture',
        subtitle: 'Co-founder',
        yearOrStatus: 'Current',
        route: '/portfolio/gala-network'
    }
];
