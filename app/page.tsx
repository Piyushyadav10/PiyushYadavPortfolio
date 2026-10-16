'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RoleLensSection, { RoleType } from '@/components/RoleLensSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationCertificationsSection from '@/components/EducationCertificationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResumeSection from '@/components/ResumeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<RoleType>('All');

  return (
    <div className="relative min-h-screen flex flex-col text-neutral-900 font-sans">
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
        {/* Subtle white overlay (80% opacity) creating a pale, airy background with soft cyan lines and blue nodes */}
        <div className="absolute inset-0 w-full h-full bg-white/[0.80]" />
      </div>

      {/* Interactive Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Navigation (Max 5 Links) */}
        <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Real Photo, Big Headlines, 1 Button) */}
        <HeroSection />

        {/* 2. About Section (Real Headshot, Cut Copy, 1 Button) */}
        <AboutSection />

        {/* 3. Projects Timeline (Clean Editorial, 2 Colors, Modal, 1 Main Button) */}
        <ProjectsSection
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
        />

        {/* 4. Applied Skills (Strict 3-Col Grid, 2 Colors, 1 Button) */}
        <SkillsSection />

        {/* 5. Role Lens Recruiter Switcher (2 Colors, 1 Button) */}
        <RoleLensSection
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
        />

        {/* 6. Education, Certifications & Honors (DTU Degree, 1 Button) */}
        <EducationCertificationsSection />

        {/* 7. Real Testimonials with Names (3-Col Grid, Verified Mentors) */}
        <TestimonialsSection />

        {/* 8. Tailored Resume Hub (1 Download Action Button) */}
        <ResumeSection />

        {/* 9. Contact Channels & Direct Form (1 Transmit Button) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-To-Top Button */}
      <BackToTop />
    </div>
  </div>
  );
}
