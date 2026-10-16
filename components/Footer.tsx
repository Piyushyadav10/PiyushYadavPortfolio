'use client';

import Link from 'next/link';
import { HiOutlineArrowUp } from 'react-icons/hi2';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        
        {/* Top Section: Brand + Direct Channels + Back to Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-neutral-900 gap-8">
          {/* Brand Info & Tagline */}
          <div className="space-y-2">
            <Link
              href="/#home"
              onClick={(e) => {
                if (typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '')) {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className="group inline-flex items-center gap-3 text-white font-bold text-base cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
              aria-label="Piyush Yadav - Scroll to top"
            >
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs tracking-wider group-hover:bg-blue-500 transition-colors">
                PY
              </span>
              <span className="group-hover:text-blue-400 transition-colors">Piyush Yadav</span>
            </Link>
            <p className="text-neutral-400 text-xs max-w-lg leading-relaxed font-normal">
              Turning raw data into verified predictive models, robust SQL architectures, and executive dashboards.
            </p>
          </div>

          {/* Direct Channels (External + Telephone + Email) & Action */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="https://github.com/Piyushyadav10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors font-medium text-xs"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/piyushyadav10/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white transition-colors font-medium text-xs"
            >
              LinkedIn
            </a>
            <a
              href="mailto:yadavpiyush1010@gmail.com"
              className="text-neutral-300 hover:text-white transition-colors font-medium text-xs"
            >
              Email
            </a>
            <a
              href="tel:+918595955136"
              className="text-neutral-300 hover:text-white transition-colors font-medium text-xs"
            >
              +91 85959 55136
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-neutral-900 hover:bg-blue-600 transition-colors border border-neutral-800 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <HiOutlineArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Section: Quick Internal Directory */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-neutral-900/60">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
            Portfolio Navigation:
          </span>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Faculty Review</a>
            <a href="#resume" className="hover:text-white transition-colors">Resumes</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>

        {/* Bottom Section: Dynamic Year & Integrity Claims */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Piyush Yadav. Designed with editorial precision.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-400">
            <span className="text-blue-500 font-mono">● Verified Credentials</span>
            <span>Zero Fabricated Metrics</span>
            <span>Delhi Technological University</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
