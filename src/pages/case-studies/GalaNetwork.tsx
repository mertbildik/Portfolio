import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjectImages } from '../../content/images';
import BackButton from '../../components/BackButton';
import { containerVariants, itemVariants, sectionVariants } from '../../components/motion';

const GalaNetwork: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const projectImages = getProjectImages('gala-network');

    return (
        <div className="w-full pb-32">

            {/* Header Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full mb-16 lg:mb-24"
            >
                <motion.div variants={itemVariants} className="mb-16 md:mb-24">
                    <BackButton />
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-display-xl text-white mb-8">
                    GalaNetwork
                </motion.h1>

                <motion.p variants={itemVariants} className="text-body-lg text-neutral-400 mb-12 max-w-xl">
                    An English first Galatasaray community built to connect fans worldwide through storytelling, match analysis, and design.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-x-12 gap-y-4 pt-8 border-t border-white/[0.08]">
                    <div>
                        <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-1">Role</span>
                        <span className="text-caption text-neutral-300">Co founder, Content and Design Lead</span>
                    </div>
                    <div>
                        <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-1">Status</span>
                        <span className="text-caption text-neutral-300">Active</span>
                    </div>
                    <div>
                        <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-1">Focus</span>
                        <span className="text-caption text-neutral-300">Community and network building</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Main Content Stack */}

            {/* Text Sections Grid Group 1: Overview & Origin */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24 md:mb-32">

                {/* Section 1: Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">OVERVIEW</span>
                    <h2 className="text-display-lg text-white mb-6">What it is</h2>
                    <p className="text-body text-neutral-500">
                        GalaNetwork is a fan led network for people who love Galatasaray and want to stay connected beyond borders. The content is the entry point. The long term goal is a real network with shared value, support, and connections.
                    </p>
                </motion.section>

                {/* Section 2: Origin */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">ORIGIN</span>
                    <h2 className="text-display-lg text-white mb-6">Why I started it</h2>
                    <p className="text-body text-neutral-500 mb-6">
                        This began as a lifelong hobby. I wanted to turn that passion into a real identity and a real brand. Most fans are in Turkey. I wanted the story to reach people who think and speak in English.
                    </p>
                    <p className="text-body text-neutral-500">
                        Icardi's line that stayed with me was:
                        <br />
                        <span className="text-white italic">“Galatasaray is already big. We will make it bigger.”</span>
                    </p>
                </motion.section>

            </div>

            {/* Grid Group 2: Mission & Output */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mb-24 md:mb-32">

                {/* Section 3: Mission */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">MISSION</span>
                    <h2 className="text-display-lg text-white mb-6">What we are building</h2>
                    <p className="text-body text-neutral-500">
                        A global home for Galatasaray storytelling. A place where fans can meet, learn, share, and help each other. Content builds attention. The network builds trust.
                    </p>
                </motion.section>

                {/* Section 4: Output */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">OUTPUT</span>
                    <h2 className="text-display-lg text-white mb-12">What we publish</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="pl-6 border-l border-white/[0.08]">
                            <h3 className="text-card-title text-white mb-2">Match storytelling</h3>
                            <p className="text-body-sm text-neutral-500">Short posts that capture the moment and the emotion.</p>
                        </div>
                        <div className="pl-6 border-l border-white/[0.08]">
                            <h3 className="text-card-title text-white mb-2">Analysis</h3>
                            <p className="text-body-sm text-neutral-500">Simple match reads. Clear patterns.</p>
                        </div>
                        <div className="pl-6 border-l border-white/[0.08]">
                            <h3 className="text-card-title text-white mb-2">Design posters</h3>
                            <p className="text-body-sm text-neutral-500">Matchday, Starting XI, stats, and key player moments.</p>
                        </div>
                        <div className="pl-6 border-l border-white/[0.08]">
                            <h3 className="text-card-title text-white mb-2">Community signals</h3>
                            <p className="text-body-sm text-neutral-500">Questions, replies, and threads that keep the circle active.</p>
                        </div>
                    </div>
                </motion.section>

            </div>

            {/* Section 5: Network - Full Width */}
            <div className="w-full mb-24 md:mb-32">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">NETWORK</span>
                    <h2 className="text-display-lg text-white mb-12">How the network works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        <div>
                            <span className="block text-caption font-mono text-neutral-600 mb-3">01</span>
                            <h3 className="text-card-title text-white mb-2">Listen</h3>
                            <p className="text-body-sm text-neutral-500">We collect signals from the community. DMs, replies, and trusted sources.</p>
                        </div>
                        <div>
                            <span className="block text-caption font-mono text-neutral-600 mb-3">02</span>
                            <h3 className="text-card-title text-white mb-2">Filter</h3>
                            <p className="text-body-sm text-neutral-500">We keep what is useful, clear, and respectful.</p>
                        </div>
                        <div>
                            <span className="block text-caption font-mono text-neutral-600 mb-3">03</span>
                            <h3 className="text-card-title text-white mb-2">Publish</h3>
                            <p className="text-body-sm text-neutral-500">We turn it into posts, posters, or short analysis.</p>
                        </div>
                        <div>
                            <span className="block text-caption font-mono text-neutral-600 mb-3">04</span>
                            <h3 className="text-card-title text-white mb-2">Connect</h3>
                            <p className="text-body-sm text-neutral-500">We introduce people, share opportunities, and grow real relationships.</p>
                        </div>
                    </div>
                </motion.section>
            </div>

            {/* Gallery Section - Full Width */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={sectionVariants}
            >
                <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">GALLERY</span>
                <h2 className="text-display-lg text-white mb-6">Selected work</h2>
                <p className="text-body text-neutral-500 mb-12">
                    A few screens and posters from GalaNetwork. Built to stay consistent across matches and formats.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-8">
                    {projectImages.map((img, i) => (
                        <div
                            key={img.name}
                            className={`w-full h-full bg-[#111111] border border-white/[0.08] overflow-hidden relative ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                        >
                            <img
                                src={img.src}
                                alt={`GalaNetwork ${img.name}`}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Section 7: Operating Model & Now - Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 mt-24 md:mt-32">

                {/* Section 7 */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">OPERATING MODEL</span>
                    <h2 className="text-display-lg text-white mb-6">How we run it</h2>
                    <p className="text-body text-neutral-500">
                        I lead content direction and design. I work with a co founder. We stay consistent in tone and visuals. We keep the output frequent and the standard high.
                    </p>
                </motion.section>

                {/* Section 8: Now */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={sectionVariants}
                >
                    <span className="block text-eyebrow font-mono text-neutral-600 uppercase mb-8">NOW</span>
                    <h2 className="text-display-lg text-white mb-6">Current focus</h2>
                    <p className="text-body text-neutral-500">
                        We are growing the English speaking audience. We are improving our poster systems and match analysis format. We are turning followers into a real network.
                    </p>
                </motion.section>

            </div>

        </div>
    );
};

export default GalaNetwork;
