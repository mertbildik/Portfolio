export interface EmploymentData {
    id: string;
    companyName: string;
    companySuffix?: string; // e.g. "& Company"
    role: string;
    description: string;
    ndaStatus: string;
    ndaDescription: string;
    stats: {
        value: string;
        label: string;
        desc: string;
    }[];
    capabilities: {
        title: string;
        items: string[];
    }[];
    sharableOnCall: string[];
}

export const EMPLOYMENT_CONTENT: Record<string, EmploymentData> = {
    'mckinsey': {
        id: 'mckinsey',
        companyName: 'McKinsey',
        companySuffix: '& Company',
        role: 'Visual communication specialist',
        description: 'Translating complex financial models into intuitive narratives.',
        ndaStatus: 'Confidential',
        ndaDescription: 'Work is under strict NDA. \nProcess and outcomes can be shared on a call.',
        stats: [
            { value: "10K+", label: "Assets", desc: "Slides. Charts. Templates. Systems." },
            { value: "50+", label: "Pitch decks", desc: "Partner and C suite ready." },
            { value: "5", label: "Pitch wins", desc: "Key pages that helped close." },
            { value: "137", label: "Kudos", desc: "From consultants I worked with." },
            { value: "10", label: "Critical notes", desc: "Took it. Fixed it fast." },
            { value: "3", label: "Major initiatives", desc: "Big work beyond the lane." },
            { value: "1K+", label: "ThinkCell builds", desc: "Hard data. Clean charts." },
            { value: "2", label: "Native app tests", desc: "UI and UX feedback teams shipped." },
        ],
        capabilities: [
            {
                title: "01 / Data viz",
                items: [
                    "Turned messy models into charts people got fast.",
                    "Built ThinkCell visuals with clean labels, scale, and logic.",
                    "One slide. One takeaway. No extra lines."
                ]
            },
            {
                title: "02 / Executive comms",
                items: [
                    "Made slides skimmable in seconds.",
                    "Wrote titles that state the decision point.",
                    "Kept page order tight so the story didn’t break in reviews."
                ]
            },
            {
                title: "03 / Pitch decks",
                items: [
                    "Built high stakes pages for partner and client rooms.",
                    "Shaped the flow so the “ask” was impossible to miss.",
                    "Delivered key pages fast without letting quality slip."
                ]
            },
            {
                title: "04 / Collaboration",
                items: [
                    "Joined 1 on 1 working sessions with consultants.",
                    "Ran group reviews and made decisions live.",
                    "Set handoff rules so decks stayed clean after I left."
                ]
            },
            {
                title: "05 / Visual polish",
                items: [
                    "Owned the visual improvement lane week to week.",
                    "Used Affinity and Photoshop for advanced fixes and rebuilds.",
                    "Cleaned layout, spacing, and chart styling to a high bar."
                ]
            },
            {
                title: "06 / App UI and UX",
                items: [
                    "Joined native app UI and UX user tests.",
                    "Wrote clear feedback teams could ship.",
                    "Flagged issues in flows, screens, and copy before release."
                ]
            }
        ],
        sharableOnCall: [
            "My process (how I work)",
            "The decisions behind the pages",
            "How I handle charts, story flow, and review cycles",
            "The outcomes at a high level"
        ]
    }
};
