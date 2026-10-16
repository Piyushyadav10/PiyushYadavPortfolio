import Link from 'next/link';
import type { Metadata } from 'next';
import { HiArrowLeft, HiOutlineHome } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The requested analytical case study or portfolio page could not be found.',
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-neutral-900 px-6 py-20 font-sans">
      {/* Global Fixed Stationary Airy Blue Network Mesh Background Layer */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Airy%20Blue%20Network%20Mesh.webp')",
          }}
        />
        <div className="absolute inset-0 w-full h-full bg-white/[0.80]" />
      </div>

      <div className="relative z-10 max-w-xl w-full text-center space-y-8 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        {/* PY Brand Mark Badge */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-neutral-950 text-white font-extrabold text-xl flex items-center justify-center tracking-wider shadow-md border-2 border-cyan-400">
            PY
          </div>
        </div>

        {/* 404 Status & Title */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block">
            Error 404 · Unmatched Destination
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            The page or case study you requested does not exist, has been moved, or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm"
          >
            <HiOutlineHome className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-50 transition-colors duration-200 shadow-xs"
          >
            <HiArrowLeft className="w-4 h-4" />
            <span>Browse Case Studies</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
