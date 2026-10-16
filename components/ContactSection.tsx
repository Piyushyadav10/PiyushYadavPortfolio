'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  HiOutlineEnvelope, 
  HiOutlinePhone, 
  HiOutlineMapPin, 
  HiOutlineClipboardDocument, 
  HiOutlineArrowTopRightOnSquare,
  HiCheck,
  HiPaperAirplane
} from 'react-icons/hi2';
import { 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp 
} from 'react-icons/fa6';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    role: 'Data Analyst',
    message: ''
  });

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('yadavpiyush1010@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard API is not available
      const el = document.createElement('textarea');
      el.value = 'yadavpiyush1010@gmail.com';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('+918595955136');
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      const el = document.createElement('textarea');
      el.value = '+918595955136';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const trimmedName = formData.name.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage('Please provide your name (at least 2 characters).');
      setFormStatus('error');
      return;
    }

    if (!trimmedSubject || trimmedSubject.length < 3) {
      setErrorMessage('Please provide a meaningful subject line.');
      setFormStatus('error');
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters.');
      setFormStatus('error');
      return;
    }

    setErrorMessage('');
    setFormStatus('submitting');

    const mailtoSubject = encodeURIComponent(
      trimmedSubject || `Inquiry regarding ${formData.role} role - from ${trimmedName}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Piyush,\n\nName: ${trimmedName}\nRole / Focus: ${formData.role}\n\nMessage:\n${trimmedMessage}\n`
    );

    // Dispatch via mailto client
    window.location.href = `mailto:yadavpiyush1010@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-transparent border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
            Let&apos;s Discuss Data &amp; Engineering Roles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            Actively interviewing for full-time Data Science, Data Analytics, and Product Analytics positions.
          </p>
        </motion.div>

        {/* 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-5">
              <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                Direct Channels
              </h3>

              {/* 1. Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                    <HiOutlineEnvelope className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block">
                      Email
                    </span>
                    <a
                      href="mailto:yadavpiyush1010@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-neutral-950 hover:text-blue-600 transition-colors truncate block"
                    >
                      yadavpiyush1010@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <HiCheck className="w-4 h-4 text-blue-600" /> : <HiOutlineClipboardDocument className="w-4 h-4" />}
                </button>
              </div>

              {/* 2. Phone & WhatsApp */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                    <HiOutlinePhone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href="tel:+918595955136"
                      className="text-xs sm:text-sm font-semibold text-neutral-950 hover:text-blue-600 transition-colors truncate block"
                    >
                      +91 8595955136
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <a
                    href="https://wa.me/918595955136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-neutral-500 hover:text-green-600 hover:bg-neutral-100 transition-colors cursor-pointer"
                    title="Chat on WhatsApp"
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
                    title="Copy phone number to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <HiCheck className="w-4 h-4 text-blue-600" /> : <HiOutlineClipboardDocument className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* 3. LinkedIn */}
              <div
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a')) return;
                  window.open('https://www.linkedin.com/in/piyushyadav10/', '_blank', 'noopener,noreferrer');
                }}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 hover:border-neutral-300 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block">
                      LINKEDIN
                    </span>
                    <a
                      href="https://www.linkedin.com/in/piyushyadav10/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-neutral-950 hover:text-blue-600 transition-colors truncate block"
                    >
                      Piyush Yadav
                    </a>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/piyushyadav10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors flex-shrink-0"
                  title="Open LinkedIn Profile"
                  aria-label="Open LinkedIn Profile"
                >
                  <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                </a>
              </div>

              {/* 4. GitHub */}
              <div
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest('a')) return;
                  window.open('https://github.com/Piyushyadav10', '_blank', 'noopener,noreferrer');
                }}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#fafafa] border border-neutral-200 hover:border-neutral-300 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaGithub className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block">
                      GITHUB
                    </span>
                    <a
                      href="https://github.com/Piyushyadav10"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-neutral-950 hover:text-blue-600 transition-colors truncate block"
                    >
                      Piyushyadav10
                    </a>
                  </div>
                </div>

                <a
                  href="https://github.com/Piyushyadav10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 transition-colors flex-shrink-0"
                  title="Open GitHub Profile"
                  aria-label="Open GitHub Profile"
                >
                  <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
                </a>
              </div>

              {/* 5. Base Location */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#fafafa] border border-neutral-200">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                  <HiOutlineMapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-700 block">
                    Base Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-950 block">
                    New Delhi, India (Open to Relocation &amp; Remote)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Contact Form with Single Submit Button */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-5"
            >
              <h3 className="text-xl font-bold text-neutral-950 tracking-tight mb-2">
                Send Direct Message
              </h3>

              {formStatus === 'error' && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formStatus === 'success' && (
                <div
                  role="status"
                  className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs font-medium space-y-2"
                >
                  <p className="font-bold flex items-center gap-2 text-blue-700">
                    <HiCheck className="w-4 h-4" /> Message prepared in your email client!
                  </p>
                  <p className="text-neutral-700">
                    If your default email client did not launch automatically, you can copy my email address directly:
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="font-mono font-bold text-neutral-950 bg-white px-2.5 py-1 rounded-lg border border-neutral-200 text-xs select-all">
                      yadavpiyush1010@gmail.com
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-3 py-1 rounded-lg bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                      {copiedEmail ? 'Copied!' : 'Copy Email'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="text-xs text-neutral-600 hover:text-neutral-950 underline font-medium cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formStatus === 'error') setFormStatus('idle');
                    }}
                    placeholder="e.g. Albert Einstein"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#fafafa] text-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5">
                    Hiring Focus
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#fafafa] text-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium cursor-pointer"
                  >
                    <option value="Data Analyst">Data Analyst Role</option>
                    <option value="Data Scientist">Data Scientist Role</option>
                    <option value="Data Engineer">Data Engineer Role</option>
                    <option value="Business Analyst">Business Analyst Role</option>
                    <option value="Product Analyst">Product Analyst Role</option>
                    <option value="Consulting / Project">Consulting / Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (formStatus === 'error') setFormStatus('idle');
                  }}
                  placeholder="e.g. Opportunities at ABCD Corporation"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#fafafa] text-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-1.5">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (formStatus === 'error') setFormStatus('idle');
                  }}
                  placeholder="Share role responsibilities, team context, or interview availability..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-[#fafafa] text-neutral-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium resize-none"
                />
              </div>

              {/* Exactly ONE Button in this Section with Uniform Style */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Transmit Direct Message</span>
                  <HiPaperAirplane className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
