import React from 'react';
import { PawPrint, Briefcase, Monitor, Layers, PenTool, Globe } from 'lucide-react';

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

    // Experience Detail (Optional - for non-case-study pages)
    experienceDetails?: {
        type: 'experience';
        role: string;
        location?: string;
        timeline: string;
        intro?: {
            label: string;
            text: string;
        };
        sections: {
            title: string;
            items: string[];
        }[];
        placeholderBox?: {
            label: string;
            items: string[];
        };
    };
}

export const caseStudies: CaseStudyData[] = [
    // --- Original Client Projects ---
    {
        id: "dog-and-ride",
        title: "Dog & Ride",
        role: "Product / Graphic Designer",
        timeline: "May 2025 to June 2025",
        tools: ["Figma", "Framer", "PowerPoint", "Adobe Creative Suite", "Notion"],
        oneLineSummary: "A new brand and digital experience that lets scooter riders travel with their dogs safely, spend more time together, and buy with confidence.",
        icon: <PawPrint size={32} />,
        problem: "Dog and Ride already had a strong product.\nThe business setup was the blocker.\n\nThe brand was not defined yet.\nThere was no website to explain the product clearly.\nPeople had too many questions before buying.\nSales depended on manual chats, so conversions stayed low.",
        solution: "One cohesive system was delivered across brand, web, and social.",
        impact: {
            user: "The biggest change was clarity.\n\nDog and Ride went from a good product with an unclear story to a brand people trust.",
            business: "The website and social system created one place for discovery, questions, and purchase intent.\nThe pitch deck made partnership conversations easier to start and easier to lead."
        },
        context: "Core problem statement\nPeople liked the idea, but they did not have enough clarity and trust to purchase.",
        goals: [
            "Answer questions fast",
            "Build trust",
            "Make it easy to buy or reach out"
        ],
        usersScenario: "Dog owners who ride scooters had one big issue.\nTraveling with a dog did not feel safe or comfortable.",
        approach: "Started with people who already bought.\n\nA short survey and interviews with 5 existing customers.\nFocus stayed on three things.\n\n• What made them buy.\n• What confused them before buying.\n• What they would change about the experience.\n\nThe most common questions from sales chats were collected.\nThose questions shaped the website structure and content.",
        keyDecisions: [
            "Brand foundation — A clear visual direction, colors, and tone of voice. A premium feel that still stays warm and human.",
            "Website experience — A simple flow that explains what it is, how it works, and who it fits. Clear safety story. Clear how to buy path. Fast contact for high intent buyers.",
            "Instagram presence — A consistent look and message. Posts and short videos that show real use and build trust.",
            "Vespa pitch deck — A story that frames Dog and Ride as a lifestyle fit for Vespa riders. A clean narrative focused on safety, aesthetics, and emotional connection."
        ],
        iterations: [],
        finalProduct: [
            {
                title: "Brand",
                description: "A new identity system that did not exist before. Clear direction that makes the product feel credible and premium."
            },
            {
                title: "Website",
                description: "A Framer website designed to do three jobs. Explain the product fast. Remove doubts with clear answers. Turn interest into purchase or direct contact."
            },
            {
                title: "Social",
                description: "A repeatable Instagram content system. Designed to make the product feel real, not theoretical."
            },
            {
                title: "Partnership deck",
                description: "A PowerPoint deck to support the Vespa integration conversation. Built to be easy to present and easy to skim."
            }
        ],
        learnings: "Premium products do not sell on visuals alone.\nThey sell when questions get answered early.\n\nNext steps\n• Add a quick fit check guide for different dog sizes and scooter setups.\n• Add more real rider photos and short clips on product pages.\n• Add a tighter FAQ based on the top questions from DMs.\n• Track drop off points and refine the buy flow."
    },
    {
        id: "bunect",
        title: "Bunect",
        role: "Lead designer",
        timeline: "Jan 2025 to Present (ongoing)",
        tools: ["Framer", "Notion", "Adobe Creative Suite", "Canva", "PowerPoint"],
        oneLineSummary: "A word of mouth service business turned into a clear digital system with a website, sales deck, and improved branding that converts traffic into inquiries.",
        icon: <Briefcase size={32} />,
        problem: "Bunect was growing mainly through word of mouth.\nThere was no website to explain services clearly.\nThere was no deck to present the offer in meetings.",
        solution: "The goal was simple.\nLet people understand the offer in seconds and reach the team instantly.",
        impact: {
            user: "Client volume grew strongly after the website and deck went live.\nGrowth reached roughly 2 to 3 times, depending on the period measured.",
            business: "Clicks and inquiries increased.\nMore people contacted via WhatsApp or called directly."
        },
        context: "Core problem statement\nThe service was real, but there was no clear digital path to educate and convert new clients.",
        goals: [
            "Make services easy to understand",
            "Make contact one tap away"
        ],
        usersScenario: "People had to ask everything in chat.\nThat slowed down decisions and cost leads.",
        approach: "Services were grouped into clear categories.\nContent was written from real client questions.\nA landing flow was built to push high intent users to action fast.",
        keyDecisions: [
            "Landing page website — Clear service categories. Short explanations for each service. Contact form for warm leads.",
            "One click conversion path — A direct button that opens WhatsApp in one tap. Built for fast mobile decisions.",
            "Sales presentation deck — A deck for meetings and outreach. Clear structure. Easy to skim.",
            "Brand refinement — A base identity existed. The system was improved and made more consistent across touchpoints."
        ],
        iterations: [],
        finalProduct: [
            {
                title: "Website",
                description: "A single landing page that explains services and converts traffic into inquiries. Built to work with social and Google Ads."
            },
            {
                title: "Presentation deck",
                description: "A reusable deck for client meetings and outreach."
            },
            {
                title: "Brand system",
                description: "Cleaner visuals and more consistent use of type and color."
            }
        ],
        learnings: "Small businesses do not need complex funnels.\nThey need clear offers and fast contact paths.\n\nNext steps\n• Add a simple service picker.\n• Add FAQs based on the top WhatsApp questions.\n• Track which services get the most clicks and refine the landing order."
    },
    {
        id: "adclusive",
        title: "Adclusive",
        role: "Product designer",
        timeline: "2021 to Present (on pause)",
        tools: ["Figma", "Notion", "VSCode", "Angular"],
        oneLineSummary: "A multi role ad platform that connects advertisers with publishers and influencers, with dashboards, campaign setup, and tracking built into one system.",
        icon: <Monitor size={32} />,
        problem: "Two sides needed to work in one product.\nAdvertisers. Publishers and influencers.\n\nThe platform required clarity across complex areas.\nCampaign creation. Asset management. Tracking links. Performance and finance. Payout readiness.",
        solution: "The goal was simple.\nBring both sides into one platform with clear flows.",
        impact: {
            user: "Early traction was reached with real supply and demand on the platform.\nThe product proved a small team can ship and maintain a complex web app with a clear system.",
            business: "A working platform with active users.\nAround 20 advertisers and close to 50 influencers.\n\nThe product supports campaign setup, tracking, creatives, performance, and finance in one place.\nThe business model takes a commission on deals."
        },
        context: "Core problem statement\nA complex ad product needed simple, repeatable UX so users can launch campaigns, track performance, and manage payments without confusion.",
        goals: [
            "Create and manage campaigns",
            "Browse and search advertisers",
            "Track performance and revenue",
            "Understand approvals, invoices, and payout status"
        ],
        usersScenario: "Without a clear system, users get lost.\nCampaign setup slows down.\nTrust in numbers and payouts drops.",
        approach: "Screens were designed around repeatable patterns.\nConsistent layout. Predictable navigation. Clear data hierarchy.\n\nWork happened with an 8 person team.\nBackend, marketing, and stakeholders.",
        keyDecisions: [
            "Role based portal structure — Separate areas for advertiser work and publisher work. Consistent sidebar navigation across screens.",
            "Publisher dashboard and finance clarity — Revenue overview. Account balance. Status buckets like awaiting approval, approved...",
            "Advertiser campaign setup — A structured create campaign flow with sections for general info, collaboration rules...",
            "Tracking and assets — Link management with multiple tracking options. Creative uploads for images and banners..."
        ],
        iterations: [],
        finalProduct: [
            {
                title: "Platform",
                description: "A working platform with active users. Around 20 advertisers and close to 50 influencers. The product supports campaign setup, tracking, creatives, performance, and finance in one place. The business model takes a commission on deals."
            }
        ],
        learnings: "Teamwork matters more in web apps than in simple sites.\nAlignment saves weeks.\n\nKey learnings covered dashboards, payment logic, tracking systems, and APIs.\nCross functional work improved speed and decision making.\n\nNext steps\n• Improve onboarding for both roles.\n• Add clearer empty states for new accounts.\n• Track where users get stuck and simplify those steps first."
    },

    // --- New Employment & Ventures ---
    // --- Experience / Employment ---
    {
        id: "mckinsey",
        title: "McKinsey & Co.",
        role: "Visual Communication Specialist",
        timeline: "Sep 2021 to Aug 2024",
        tools: ["PowerPoint", "Excel", "Affinity", "Figma"],
        oneLineSummary: "High-stakes presentation design and visual strategy for global consulting projects.",
        icon: <Briefcase size={32} />,
        // Standard Case Study Fields (Required by TS but unused in new view)
        problem: "", solution: "", impact: { user: "", business: "" }, context: "", goals: [], usersScenario: "", approach: "", keyDecisions: [], iterations: [], finalProduct: [], learnings: "",

        // New Experience Data
        experienceDetails: {
            type: 'experience',
            role: "Visual Communication Specialist",
            location: "Poznan, Poland",
            timeline: "Sep 2021 to Aug 2024",
            sections: [
                {
                    title: "What I did",
                    items: [
                        "Turned complex thinking into clean storylines.",
                        "Made decks easier to read fast.",
                        "Refined charts and data visuals for clarity.",
                        "Built reusable slide layouts and systems.",
                        "Kept large presentations consistent.",
                        "Helped teams move faster without losing quality."
                    ]
                },
                {
                    title: "How I worked",
                    items: [
                        "Clarify the goal and audience.",
                        "Map the story and logic.",
                        "Build the pages and hierarchy.",
                        "Simplify, align, and polish.",
                        "Hand off with clear rules."
                    ]
                },
                {
                    title: "Tools and collaboration",
                    items: [
                        "PowerPoint, Excel, Affinity, Figma.",
                        "Worked closely with consultants on tight timelines."
                    ]
                },
                {
                    title: "NDA note",
                    items: [
                        "I can't share client materials. I can share my process and the outcomes."
                    ]
                }
            ],
            placeholderBox: {
                label: "Confidential work placeholder area",
                items: [
                    "Confidential client deck",
                    "Internal strategy narrative",
                    "Data visualization system",
                    "Workshop materials",
                    "Template library"
                ]
            }
        }
    },
    // --- Ventures ---
    {
        id: "curvix",
        title: "Curvix",
        role: "Founder",
        timeline: "Current",
        tools: ["Figma", "Framer", "React", "Adobe Suite"],
        oneLineSummary: "Curvix is my studio. I design and build websites and systems that are clear, fast, and easy to use.",
        icon: <Monitor size={32} />,
        context: "Marketing support is handled with my partner when the project needs it. Photography is Warsaw only.",

        problem: "• Website design and build\n• Brand identity and visual systems\n• Product UX and UI\n• Presentation design\n• Social visuals and content assets\n• Remote marketing support (with my partner)\n• Photography in Warsaw (when needed)",

        goals: [
            "Clear, fast websites",
            "Brand identity systems",
            "Product UX/UI",
            "Presentation design"
        ],

        approach: "• I start with discovery and goals in Notion.\n• I send a clear offer and scope.\n• I take 50% upfront.\n• I collect assets or build the brand foundation if it’s missing.\n• I create a moodboard and direction.\n• I design wireframes, then the final UI.\n• I build the site and polish details.\n• I deliver with a clean handoff.\n• I collect the remaining payment.",

        usersScenario: "Clients need a reliable partner who delivers quality without the bloat of a large agency.",

        solution: "My process is designed for clarity and speed. From discovery to handoff, every step is transparent.",

        finalProduct: [
            { title: "Bunect", description: "Digital system and website." },
            { title: "Dog & Ride", description: "Brand and digital experience." },
            { title: "Adclusive", description: "Product design and system." }
        ],

        impact: {
            user: "Clients get a direct line of communication and work that ships fast.",
            business: "A streamlined studio model allows for high-quality output with lower overhead."
        },

        keyDecisions: [],
        iterations: [],
        learnings: "Clear process and upfront agreements prevent scope creep and ensure happy clients."
    },
    {
        id: "gala-network",
        title: "GalaNetwork",
        role: "Co-founder",
        timeline: "Dec 2024",
        tools: ["Social Media", "Writing", "Visual Design"],
        oneLineSummary: "GalaNetwork is an English-first space for Galatasaray fans. It’s news, storytelling, and community.",
        icon: <PawPrint size={32} />,
        context: "I write posts and design visuals that feel sharp and consistent.",

        problem: "• Grow the fan base outside Turkey.\n• Make it easier for fans to connect with each other.\n• Turn good conversations into public posts people can build on.",

        goals: [
            "Grow fan base globally",
            "Connect fans",
            "Elevate conversations"
        ],

        approach: "• Track matches and news.\n• Pick the story worth telling.\n• Write the post in a simple voice.\n• Design a visual when it helps the point.\n• Publish and follow up with replies.\n• Iterate the format based on what people react to.\n• Coordinate with my friend to keep cadence.",

        usersScenario: "International fans often feel disconnected or lack high-quality English content.",

        solution: "It’s not only about tweets. It’s about building a real network between fans. Jobs, projects, and support can come out of it.",

        impact: {
            user: "Fans get a reliable source of news and a place to belong.",
            business: "Building a dedicated audience that values quality over clickbait."
        },

        finalProduct: [
            { title: "Daily posting and writing", description: "Consistent coverage and storytelling." },
            { title: "Matchday visuals", description: "Posters and game graphics." },
            { title: "Quote posters", description: "Simple story slides and formatting." },
            { title: "Clean layouts", description: "Visuals designed to work on X." },
            { title: "Community building", description: "Replying and engaging with fans." }
        ],

        keyDecisions: [],
        iterations: [],
        learnings: "Consistency and voice matter more than volume. Authentic engagement builds real community."
    }
];
