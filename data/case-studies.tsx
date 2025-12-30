import React from 'react';
import { PawPrint, Briefcase, Monitor } from 'lucide-react';

export interface CaseStudyData {
    id: string;
    title: string;
    role: string;
    timeline: string;
    tools: string[];
    oneLineSummary: string;
    icon: React.ReactNode;

    // Core Sections
    problem: string;
    solution: string;
    impact: {
        user: string;
        business: string;
    };

    // Story
    context: string;
    goals: string[];
    usersScenario: string;
    approach: string;

    // Details
    keyDecisions: string[];
    iterations: {
        title: string;
        description: string;
        image?: string;
    }[];
    finalProduct: {
        title: string;
        description: string;
        image?: string;
    }[];
    learnings: string;
}

export const caseStudies: CaseStudyData[] = [
    {
        id: "dog-and-ride",
        title: "Dog & Ride",
        role: "Lead Product Designer",
        timeline: "Oct 2024 - Jan 2025",
        tools: ["Figma", "Webflow", "Adobe CC"],
        oneLineSummary: "Scaling a premium lifestyle brand for urban riders and their dogs.",
        icon: <PawPrint size={32} />,
        problem: "Dog & Ride had a passionate community but a disjointed digital presence. The website didn't reflect the 'luxury but rugged' feel of the physical products, and customers struggled to understand the modularity of the gear.",
        solution: "I redesigned the digital ecosystem from the ground up, focusing on high-end visual storytelling and an interactive 'Gear Builder' that allows users to visualize how different accessories fit together.",
        impact: {
            user: "Users reported a 40% increase in confidence when choosing sizes and modular components due to the interactive builder.",
            business: "Conversion rates increased by 22% within the first two months of the new site launch, with average order value (AOV) rising by 15%."
        },
        context: "The brand needed to transition from a 'boutique' hobby shop to a scalable D2C brand capable of international shipping and wholesale partnerships.",
        goals: [
            "Create a premium, luxury-tech aesthetic.",
            "Educate users on modular product features.",
            "Streamline the checkout flow for mobile users."
        ],
        usersScenario: "Urban dog owners who commute by bike or foot and need gear that is as stylish as it is functional. They are busy, tech-savvy, and care deeply about product quality.",
        approach: "I spent the first week interviewing 10 core customers to understand their 'ride flow'. I realized the biggest friction point wasn't the price, but the fear of gear not fitting their specific dog breed or bike setup.",
        keyDecisions: [
            "Prioritized breed-specific sizing guides on product pages.",
            "Used a 'dark luxury' color palette to differentiate from generic pet stores.",
            "Implemented an infinite-scroll 'Community Feed' to show real-world usage."
        ],
        iterations: [
            {
                title: "Sketching the Gear Builder",
                description: "Initial sketches focused on a drag-and-drop interface, which we later simplified to a click-to-add system for better mobile performance."
            },
            {
                title: "Wireframing the Hybrid Feed",
                description: "We learned that users wanted to see product details directly inside social proof images, leading us to add 'Shop the Look' tags to community photos."
            }
        ],
        finalProduct: [
            {
                title: "Interactive Gear Preview",
                description: "A high-fidelity visualization tool where users can toggle accessories on a virtual rider."
            },
            {
                title: "Simplified Mobile Checkout",
                description: "A one-page checkout process that reduced abandonment by 12%."
            }
        ],
        learnings: "Minimalism doesn't mean less information; it means better organized information. By hiding complexity behind interactive elements, we kept the premium feel without sacrificing utility."
    },
    {
        id: "bunect",
        title: "Bunect",
        role: "UX/UI Designer & Strategist",
        timeline: "Jun 2024 - Sep 2024",
        tools: ["Figma", "React", "Tailwind CSS"],
        oneLineSummary: "Simplifying company setup and accounting for expats in Poland.",
        icon: <Briefcase size={32} />,
        problem: "Opening a company in a foreign country is a bureaucratic nightmare. Bunect had great services but their online onboarding was confusing, leading to high drop-off rates and excessive support calls.",
        solution: "I designed a 'Step-by-Step Company Launchpad' that breaks down the process into 5 simple stages, with clear progress tracking and automated document generation.",
        impact: {
            user: "Total onboarding time reduced from 8 days to 48 hours for the average user.",
            business: "Customer inquiries regarding 'what do I do next?' dropped by 65%, allowing the team to scale without hiring more support staff."
        },
        context: "The Polish market is growing, but language barriers and complex tax laws make it inaccessible for many international founders.",
        goals: [
            "Humanize the accounting experience.",
            "Provide real-time transparency on application status.",
            "Build trust through a professional, clean interface."
        ],
        usersScenario: "Digital nomads and international founders moving to Poland. They are often stressed about legal compliance and need a 'fixer' they can trust.",
        approach: "I mapped out the entire legal process from 4 different government entities to find the most common failure points. I then translated these legal steps into user-friendly UI actions.",
        keyDecisions: [
            "Used a warm, approachable color palette to reduce user anxiety.",
            "Dedicated a 'Knowledge Hub' to explain tax terms in plain English.",
            "Integrated a live chat that only triggers during high-friction steps."
        ],
        iterations: [
            {
                title: "The Onboarding Maze",
                description: "The first version tried to collect all data at once. We moved to a progressive disclosure model to keep users from feeling overwhelmed."
            },
            {
                title: "Dashboard Refinement",
                description: "Users initially found the dashboard too 'empty'. We added a 'Recent Activity' feed to show that the Bunect team was working on their case."
            }
        ],
        finalProduct: [
            {
                title: "Launchpad Dashboard",
                description: "The central hub for all company formation tasks and document status."
            },
            {
                title: "Document Auto-Generator",
                description: "A tool that fills out government forms based on user profile data."
            }
        ],
        learnings: "Empathy is the most important tool for complex services. Designing for the user's emotional state (anxiety/confusion) was more important than just designing the functional flow."
    },
    {
        id: "adclusive",
        title: "Adclusive",
        role: "Lead UI Designer",
        timeline: "Feb 2024 - May 2024",
        tools: ["Figma", "Prototyping", "Design Systems"],
        oneLineSummary: "A data-heavy management platform made elegant and efficient.",
        icon: <Monitor size={32} />,
        problem: "Ad managers were drowning in data. The existing platform was built by engineers with no design input, resulting in an interface that was cluttered, slow, and hard to navigate for non-technical clients.",
        solution: "I created a custom design system and dashboard architecture that prioritizes 'Management by Exception'—showing users only what needs their attention first.",
        impact: {
            user: "The 'Time-to-Insight' (finding an underperforming ad) dropped from 15 minutes to under 2 minutes.",
            business: "Platform retention increased by 30% as users found the tool 'actually enjoyable' to use compared to previous spreadsheets."
        },
        context: "In the high-stakes world of digital advertising, every minute of inefficiency costs money. Adclusive needed to look as fast as their performance data claimed.",
        goals: [
            "Clean up data density without losing detail.",
            "Speed up common workflows via keyboard shortcuts and bulk actions.",
            "Create a 'white-label' ready UI for agency clients."
        ],
        usersScenario: "Media buyers and ad ops specialists who manage 50+ campaigns simultaneously. They need speed, accuracy, and clear visual indicators of success/failure.",
        approach: "I shadowed three media buyers for a full day each. Watching them constantly switch between tabs and take manual notes in Excel led to the realization that they needed better bulk editing tools.",
        keyDecisions: [
            "Implemented a side-panel for 'Quick Edits' to avoid losing context.",
            "Used color sparingly—only for performance indicators (up/down/alert).",
            "Built a modular widget system for custom dashboard views."
        ],
        iterations: [
            {
                title: "Card vs Table Views",
                description: "We initially used cards for campaigns, but testing showed media buyers preferred high-density tables with customizable columns."
            },
            {
                title: "Filtering Logic",
                description: "We redesigned the filter bar three times to ensure users could save and share complex data segments."
            }
        ],
        finalProduct: [
            {
                title: "The Command Dashboard",
                description: "A high-density information display with clear visual hierarchy and real-time updates."
            },
            {
                title: "Bulk Editor Pro",
                description: "A powerful tool for changing settings across hundreds of ads in seconds."
            }
        ],
        learnings: "Designing for experts is different from designing for general users. Experts want control and density; they aren't afraid of complexity if it makes them faster."
    }
];
