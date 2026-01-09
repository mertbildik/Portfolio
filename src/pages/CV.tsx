import React from 'react';
import { FileText, Printer } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-text-primary font-sans antialiased p-8 md:p-16 lg:p-24 print:bg-white print:text-black print:p-0 print:max-w-none">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 print:mb-8 border-b border-border-subtle print:border-gray-200 pb-8">
          <div>
            <h1 className="text-5xl font-medium text-text-primary print:text-black mb-2 tracking-tight">Mert <br /> Bildik</h1>
          </div>
          <div className="text-sm space-y-1 text-text-muted print:text-gray-700">
            <h2 className="text-text-primary print:text-black font-medium mb-2 uppercase tracking-wider text-xs">Contact Details</h2>
            <p>E-mail: <a href="mailto:mertbildik.work@gmail.com" className="hover:text-text-primary print:text-black">mertbildik.work@gmail.com</a></p>
            <p>Phone: +48 793 373 127</p>
            <p>Address: Mokotowska 71/17 00-530 Warszawa</p>
            <p className="text-text-muted print:text-black font-medium mt-2">I have a work permit only in Poland</p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Labels */}
          <div className="md:col-span-3 space-y-12">
            <h3 className="text-lg font-medium text-text-primary print:text-black">About me</h3>
          </div>

          {/* Right Column: Content */}
          <div className="md:col-span-9 mb-12">
            <p className="text-text-muted print:text-gray-800 leading-relaxed max-w-2xl">
              I design products and content that help people spend less time clicking and more time living, give businesses tools that actually work. It all comes from the same passion I’ve had for football and the NBA since I was a kid.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 border-t border-border-subtle print:border-gray-200 pt-12">
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium text-text-primary print:text-black">Experience</h3>
          </div>

          <div className="md:col-span-9 space-y-12">
            {/* Job 1 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                <h4 className="text-xl font-medium text-text-primary print:text-black">GalaNetwork (X)</h4>
                <span className="text-xs text-text-muted print:text-gray-600 font-mono">Warsaw, Poland | Dec 2024 - present</span>
              </div>
              <p className="text-sm font-medium text-text-muted print:text-black mb-4">Co founder and Content / Design lead</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-text-muted print:text-gray-800 text-sm leading-relaxed">
                <li>Run an English speaking Galatasaray page that connects fans from many countries</li>
                <li>Write match and player analysis and design matchday and stats posters for key moments</li>
                <li>Plan daily content, reply to fans, and keep the community active and healthy</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                <h4 className="text-xl font-medium text-text-primary print:text-black">Curvix</h4>
                <span className="text-xs text-text-muted print:text-gray-600 font-mono">Warsaw, Poland | Nov 2024 - present</span>
              </div>
              <p className="text-sm font-medium text-text-muted print:text-black mb-4">Founder and Sole designer</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-text-muted print:text-gray-800 text-sm leading-relaxed">
                <li>Help clients build clear brands that people recognize and trust</li>
                <li>Design modern websites and digital products that feel simple and easy to use</li>
                <li>Create visuals and story led presentations that explain ideas and build trust</li>
              </ul>
            </div>

            {/* Job 3 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                <h4 className="text-xl font-medium text-text-primary print:text-black">Adclusive (part time)</h4>
                <span className="text-xs text-text-muted print:text-gray-600 font-mono">Gothenburg, Sweden | Sep 2021 – present (on hold)</span>
              </div>
              <p className="text-sm font-medium text-text-muted print:text-black mb-4">Shareholder and UX / UI designer</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-text-muted print:text-gray-800 text-sm leading-relaxed">
                <li>Lead the design of the main web app, from first ideas to ready screens</li>
                <li>Turn ideas into clear mockups and user flows so the product is easy to use and looks consistent</li>
                <li>Work with product managers and developers so designs match the roadmap and are smooth to build</li>
              </ul>
            </div>

            {/* Job 4 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                <h4 className="text-xl font-medium text-text-primary print:text-black">McKinsey & Company</h4>
                <span className="text-xs text-text-muted print:text-gray-600 font-mono">Poznan, Poland | Sep 2021 - Aug 2024</span>
              </div>
              <p className="text-sm font-medium text-text-muted print:text-black mb-4">Visual communication specialist</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-text-muted print:text-gray-800 text-sm leading-relaxed">
                <li>Turn complex ideas and data into clear, sharp client presentations</li>
                <li>Design and polish pitch decks and key documents for international teams</li>
                <li>Test new internal tools and visuals, give feedback, and keep layouts simple and easy to understand</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 border-t border-border-subtle print:border-gray-200 pt-12">
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium text-text-primary print:text-black">Education</h3>
          </div>

          <div className="md:col-span-9 space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                <h4 className="text-lg font-medium text-text-primary print:text-black">University of Warsaw, Poland</h4>
                <span className="text-xs text-text-muted print:text-gray-600 font-mono">Sep 2017-2021</span>
              </div>
              <p className="text-sm text-text-muted print:text-gray-800">B.A International relations</p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                <h4 className="text-lg font-medium text-text-primary print:text-black">Warsaw University of Technology</h4>
                <span className="text-xs text-text-muted print:text-gray-600 font-mono">2016-2017</span>
              </div>
              <p className="text-sm text-text-muted print:text-gray-800">B.Sc. Computer Science</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 border-t border-border-subtle print:border-gray-200 pt-12 pb-12">
          <div className="md:col-span-3">
            <h3 className="text-lg font-medium text-text-primary print:text-black">Skills</h3>
          </div>

          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Technical</h4>
              <div className="flex flex-wrap gap-3">
                {["Microsoft Office", "Affinity", "ChatGPT", "Notion", "Framer", "Canva", "Claude", "HTML, CSS", "Figma", "Adobe CC", "Perplexity", "Angular"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-white/10 text-text-muted text-xs print:bg-gray-100 print:text-black border border-transparent print:border-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-4">Languages</h4>
              <ul className="space-y-2 text-sm text-text-muted print:text-gray-800">
                <li><span className="text-text-primary print:text-black font-medium">Turkish</span> - Native</li>
                <li><span className="text-text-primary print:text-black font-medium">English</span> - Advanced</li>
                <li><span className="text-text-primary print:text-black font-medium">Polish</span> - Beginner</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Print CTA */}
        <div className="fixed bottom-8 right-8 print:hidden">
          <button
            onClick={() => window.print()}
            className="bg-text-primary text-text-inverse px-6 py-3 rounded-md font-medium shadow-xl hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer z-50"
          >
            <Printer size={20} />
            Print / Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default CV;
