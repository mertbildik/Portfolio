import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import SectionIntro from '../shared/SectionIntro';
import { homepageItemVariants, VIEWPORT_ONCE } from '../shared/motion';
import adclusiveCover from './assets/adclusive/dashboard.webp';
import dogAndRideCover from './assets/dog-and-ride/home.webp';
import ofkCover from './assets/ofk/output-home.webp';
import { PROJECTS, type Project } from './content/projects';

interface WorkCardData {
    project: Project;
    relationship: string;
    outcome: string;
    image?: {
        src: string;
        alt: string;
        treatment?: 'contain';
    };
}

const project = (id: string) => PROJECTS.find((entry) => entry.id === id)!;

const GROUPS: { title: string; projects: WorkCardData[] }[] = [
    {
        title: 'Client work',
        projects: [
            {
                project: project('ofk'),
                relationship: 'Client project · Product designer',
                outcome: 'A bilingual brand and website that makes an established construction record verifiable in one visit.',
                image: { src: ofkCover, alt: 'OFK Construction homepage' },
            },
            {
                project: project('dog-and-ride'),
                relationship: 'Client project · Multidisciplinary designer',
                outcome: 'One connected brand, website, and sales story for a new way to travel with dogs.',
                image: { src: dogAndRideCover, alt: 'Dog & Ride homepage' },
            },
        ],
    },
    {
        title: 'Experience',
        projects: [
            {
                project: project('adclusive'),
                relationship: 'Long-term engagement · Product designer',
                outcome: 'A multi-role platform bringing campaigns, tracking, performance, and finance into one system.',
                image: { src: adclusiveCover, alt: 'Adclusive publisher dashboard', treatment: 'contain' },
            },
            {
                project: project('mckinsey'),
                relationship: 'Employment · Visual communication specialist',
                outcome: 'High-stakes visual communication shaped from complex models, under strict NDA.',
            },
        ],
    },
];

const WorkVisual: React.FC<{ card: WorkCardData }> = ({ card }) => {
    if (card.image) {
        return (
            <div className="work-card-media overflow-hidden rounded-md border border-line bg-transparent transition-colors duration-200 ease-entrance group-focus-visible:border-ink-low">
                <img
                    src={card.image.src}
                    alt={card.image.alt}
                    loading="lazy"
                    className={`work-card-image h-full w-full ${
                        card.image.treatment === 'contain'
                            ? 'object-contain p-8 md:p-12'
                            : 'object-cover object-center'
                    }`}
                />
            </div>
        );
    }

    return (
        <div
            className="work-card-media flex flex-col justify-between overflow-hidden rounded-md border border-line p-6 transition-colors duration-200 ease-entrance group-focus-visible:border-ink-low md:p-10"
            aria-label="McKinsey confidential work summary"
            role="img"
        >
            <div className="flex items-center justify-between text-caption text-ink-low">
                <span>Confidential work</span>
                <span className="font-mono">2021–2024</span>
            </div>

            <div>
                <span className="block font-mono text-display-lg text-ink-max">10K+</span>
                <span className="mt-2 block text-body-sm text-ink-body">Assets shaped from complex financial models</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    ['50+', 'Pitch decks'],
                    ['137', 'Kudos'],
                    ['5', 'Pitch wins'],
                ].map(([value, label]) => (
                    <div key={label}>
                        <span className="block font-mono text-body-sm text-ink-high">{value}</span>
                        <span className="mt-1 block text-caption text-ink-low">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const WorkCard: React.FC<{ card: WorkCardData }> = ({ card }) => (
    <motion.article
        variants={homepageItemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
    >
        <Link
            to={`/portfolio/${card.project.id}`}
            className="work-card group block cursor-pointer rounded-md focus-visible:outline-none"
        >
            <WorkVisual card={card} />

            <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-6 md:mt-6">
                <div className="min-w-0">
                    <h4 className="text-card-title text-ink-high transition-colors duration-200 ease-entrance group-hover:text-ink-max group-focus-visible:text-ink-max">
                        {card.project.title}
                    </h4>
                    <div className="work-card-copy mt-2 text-body-sm">
                        <p className="work-card-rest text-ink-low">{card.relationship}</p>
                        <p className="work-card-reveal max-w-lg text-ink-body">{card.outcome}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 pt-1">
                    <span className="font-mono text-caption text-ink-low transition-colors duration-200 ease-entrance group-hover:text-ink-body group-focus-visible:text-ink-body">
                        {card.project.yearOrStatus}
                    </span>
                    <ArrowUpRight size={16} className="work-card-arrow shrink-0 text-ink-max" />
                </div>
            </div>
        </Link>
    </motion.article>
);

const PortfolioSection: React.FC = () => (
    <div className="flex flex-col gap-20 md:gap-24">
        <motion.div
            variants={homepageItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
        >
            <SectionIntro
                title="Selected work."
                description="A focused selection of client projects and long-term work across products, websites, and visual communication."
            />
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-28">
            {GROUPS.map((group) => (
                <section key={group.title} aria-labelledby={`work-${group.title.toLowerCase().replace(' ', '-')}`}>
                    <motion.h3
                        id={`work-${group.title.toLowerCase().replace(' ', '-')}`}
                        variants={homepageItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT_ONCE}
                        className="mb-8 text-headline text-ink-high md:mb-10"
                    >
                        {group.title}
                    </motion.h3>
                    <div className="flex flex-col gap-16 md:gap-20">
                        {group.projects.map((card) => (
                            <WorkCard key={card.project.id} card={card} />
                        ))}
                    </div>
                </section>
            ))}
        </div>
    </div>
);

export default PortfolioSection;
