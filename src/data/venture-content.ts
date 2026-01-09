export interface VentureContent {
    id: string;
    title: string;
    role: string;
    location?: string;
    timeline: string;
    sections: {
        title: string;
        items?: string[];
        text?: string;
    }[];
    placeholderBox?: {
        label: string;
        items: string[];
    };
}

export const VENTURE_CONTENT: Record<string, VentureContent> = {
    mckinsey: {
        id: 'mckinsey',
        title: 'McKinsey & Co.',
        role: 'Visual Communication Specialist',
        location: 'Poznan, Poland',
        timeline: 'Sep 2021 to Aug 2024',
        sections: [
            {
                title: 'What I did',
                items: [
                    'Turned complex thinking into clean storylines.',
                    'Made decks easier to read fast.',
                    'Refined charts and data visuals for clarity.',
                    'Built reusable slide layouts and systems.',
                    'Kept large presentations consistent.',
                    'Helped teams move faster without losing quality.',
                ],
            },
            {
                title: 'How I worked',
                items: [
                    'Clarify the goal and audience.',
                    'Map the story and logic.',
                    'Build the pages and hierarchy.',
                    'Simplify, align, and polish.',
                    'Hand off with clear rules.',
                ],
            },
            {
                title: 'Tools and collaboration',
                items: [
                    'PowerPoint, Excel, Affinity, Figma.',
                    'Worked closely with consultants on tight timelines.',
                ],
            },
            {
                title: 'NDA note',
                items: [
                    'I can’t share client materials. I can share my process and the outcomes.',
                ],
            },
        ],
        placeholderBox: {
            label: 'Confidential work placeholder area',
            items: [
                'Confidential client deck',
                'Internal strategy narrative',
                'Data visualization system',
                'Workshop materials',
                'Template library',
            ],
        },
    },
    curvix: {
        id: 'curvix',
        title: 'Curvix',
        role: 'Founder. Designer. Builder.', // Combined role line based on "My role" field
        timeline: 'Current', // Inferred or just omit if not strictly requested in header, but user prompt had "Page 2: Curvix" then "My role: Founder..." 
        // Wait, let's look at the mapping carefully.
        // "Page 2: Curvix"
        // "What it is": "My studio for design and build work."
        // "My role": "Founder. Designer. Builder." -> aligns with role.
        // "What I built": ...
        // "Scope": ...
        // "How I work": ...
        // "What makes it different": ...
        sections: [
            {
                title: 'What it is',
                items: ['My studio for design and build work.'],
            },
            {
                title: 'My role',
                items: ['Founder. Designer. Builder.'],
            },
            {
                title: 'What I built',
                items: [
                    'Websites and landing pages.',
                    'Brand identity systems.',
                    'Product UX and UI.',
                    'Presentation design.',
                    'Social visuals and content kits.',
                    'Small internal tools when needed.',
                ],
            },
            {
                title: 'Scope',
                items: ['Web, brand, product, presentations.'],
            },
            {
                title: 'How I work',
                items: [
                    'Understand the goal.',
                    'Define structure and content.',
                    'Design the system.',
                    'Build and refine.',
                    'Ship and support.',
                ],
            },
            {
                title: 'What makes it different',
                items: [
                    'Clear systems over decoration.',
                    'Fast iteration with high standards.',
                ],
            },
        ],
    },
    'gala-network': {
        id: 'gala-network',
        title: 'GalaNetwork',
        role: 'Co founder. Content and design lead.',
        timeline: 'Current', // Not explicitly in the prompt content section for Gala, but typical for header. I'll omit if not present.
        // Actually prompt says "Page 3: GalaNetwork... My role: Co founder..."
        // I will stick to the sections provided.
        sections: [
            {
                title: 'What it is',
                items: ['A global home for Galatasaray storytelling.'],
            },
            {
                title: 'Why it exists',
                items: [
                    'To grow the fan network outside Turkey with design led content.',
                ],
            },
            {
                title: 'My role',
                items: ['Co founder. Content and design lead.'],
            },
            {
                title: 'What I produce',
                items: [
                    'Match posters and quote visuals.',
                    'Short posts and threads.',
                    'Simple stats graphics when useful.',
                    'A consistent visual system for the brand.',
                ],
            },
            {
                title: 'How it runs',
                items: [
                    'Track matches and news.',
                    'Verify and pick the angle.',
                    'Write the post.',
                    'Design the visual.',
                    'Publish and engage.',
                ],
            },
            {
                title: 'Community angle',
                items: [
                    'Not just posts. A network.',
                    'People connect, share work, and support each other.',
                ],
            },
        ],
    },
};
