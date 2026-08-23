import React from 'react';
import { motion } from 'motion/react';
import { getProjectImages } from '../../assets/projectImages';
import type { CustomProject } from '../../content/projects';
import BackLink from '../BackLink';
import { containerVariants, itemVariants, sectionVariants, VIEWPORT_ONCE } from '../../../shared/motion';

const CurvixCaseStudy: React.FC<{ project: CustomProject }> = ({ project }) => {
    const projectImages = getProjectImages(project.id);

    return (
        <div className="w-full space-y-24 md:space-y-32">

            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full"
            >
                <motion.div variants={itemVariants} className="mb-16 md:mb-24">
                    <BackLink to="/#portfolio" ariaLabel="Back to portfolio">Go back</BackLink>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-display-lg text-ink-high mb-8">
                    {project.title}
                </motion.h1>

                <motion.p variants={itemVariants} className="text-body text-ink-body mb-12 max-w-xl">
                    A small studio identity I’m building to ship calm, precise design systems.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-x-12 gap-y-4 pt-8">
                    <div>
                        <span className="block text-eyebrow text-ink-low mb-1">Role</span>
                        <span className="text-caption text-ink-low">Founder</span>
                    </div>
                    <div>
                        <span className="block text-eyebrow text-ink-low mb-1">Status</span>
                        <span className="text-caption text-ink-low">In progress</span>
                    </div>
                    <div>
                        <span className="block text-eyebrow text-ink-low mb-1">Team</span>
                        <span className="text-caption text-ink-low">Solo lead. Specialists as needed</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Main Content Stack */}
            {/* Main Content Stack - Grid Layout to match DogRide */}
            {/* Text Sections Grid Group 1 */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

                {/* Section 1: Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow text-ink-low mb-8">Overview</span>
                    <h2 className="text-display-md text-ink-high mb-6">What Curvix is</h2>
                    <p className="text-body text-ink-body">
                        Curvix is my studio brand. It is a container for how I think, how I build, and what I deliver. The goal is simple work that holds up over time.
                    </p>
                </motion.section>

                {/* Section 2: Intent */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow text-ink-low mb-8">Intent</span>
                    <h2 className="text-display-md text-ink-high mb-6">Why I built it</h2>
                    <p className="text-body text-ink-body">
                        I wanted one clear standard across web, product, and visuals. I wanted fewer decisions, better structure, and a calmer result. I wanted the work to feel consistent even when the project changes.
                    </p>
                </motion.section>

                {/* Section 3: Output */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow text-ink-low mb-8">Output</span>
                    <h2 className="text-display-md text-ink-high mb-12">What Curvix ships</h2>

                    <div className="space-y-12">
                        <div>
                            <h3 className="text-card-title text-ink-high mb-2">Design systems</h3>
                            <p className="text-body-sm text-ink-body">Typography, spacing rules, layout logic, and components that scale.</p>
                        </div>
                        <div>
                            <h3 className="text-card-title text-ink-high mb-2">Product and web</h3>
                            <p className="text-body-sm text-ink-body">Flows, screens, interaction rules, and build ready handoff.</p>
                        </div>
                        <div>
                            <h3 className="text-card-title text-ink-high mb-2">Specialists when needed</h3>
                            <p className="text-body-sm text-ink-body">Marketing and photography are added only when the project requires it.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Section 4: Method */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow text-ink-low mb-8">Method</span>
                    <h2 className="text-display-md text-ink-high mb-12">How I work</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        <div>
                            <span className="block text-caption font-mono text-ink-low mb-3">01</span>
                            <h3 className="text-card-title text-ink-high mb-2">Define</h3>
                            <p className="text-body-sm text-ink-body">Goal, constraints, audience, success checks.</p>
                        </div>
                        <div>
                            <span className="block text-caption font-mono text-ink-low mb-3">02</span>
                            <h3 className="text-card-title text-ink-high mb-2">Structure</h3>
                            <p className="text-body-sm text-ink-body">Content order, grid, wireframes.</p>
                        </div>
                        <div>
                            <span className="block text-caption font-mono text-ink-low mb-3">03</span>
                            <h3 className="text-card-title text-ink-high mb-2">Build</h3>
                            <p className="text-body-sm text-ink-body">Components, screens, motion rules, final assets.</p>
                        </div>
                        <div>
                            <span className="block text-caption font-mono text-ink-low mb-3">04</span>
                            <h3 className="text-card-title text-ink-high mb-2">Tune</h3>
                            <p className="text-body-sm text-ink-body">Polish, QA, launch support, small improvements.</p>
                        </div>
                    </div>
                </motion.section>

            </div>

            {/* Gallery Section - Full Width */}

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_ONCE}
                variants={sectionVariants}
            >
                <span className="block text-eyebrow text-ink-low mb-8">Gallery</span>
                <h2 className="text-display-md text-ink-high mb-6">Selected screens</h2>
                <p className="text-body text-ink-body mb-12">
                    A few screens from the Curvix site direction. Built to show the system in use.
                </p>

                <div className="space-y-8">
                    {projectImages.slice(0, 1).map((img) => (
                        <div key={img.name} className="w-full bg-canvas border border-line rounded-md overflow-hidden">
                            <img
                                src={img.src}
                                alt={`Curvix ${img.name}`}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectImages.slice(1).map((img) => (
                            <div key={img.name} className="w-full bg-canvas border border-line rounded-md overflow-hidden">
                                <img
                                    src={img.src}
                                    alt={`Curvix ${img.name}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Section 6: Operating Model */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow text-ink-low mb-8">Operating model</span>
                    <h2 className="text-display-md text-ink-high mb-6">How projects run</h2>
                    <p className="text-body text-ink-body">
                        I lead the design end to end. When a project needs marketing or photography, I bring in freelancers I trust. The client experience stays single threaded. One owner. One system.
                    </p>
                </motion.section>

                {/* Section 7: Now */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT_ONCE}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow text-ink-low mb-8">Now</span>
                    <h2 className="text-display-md text-ink-high mb-6">Current focus</h2>
                    <p className="text-body text-ink-body">
                        I’m building Curvix as a long term studio identity. I take selective work that needs system level thinking and a high finish.
                    </p>
                </motion.section>

            </div>


        </div>
    );
};

export default CurvixCaseStudy;
