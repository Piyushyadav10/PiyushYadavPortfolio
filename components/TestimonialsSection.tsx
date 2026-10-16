'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  role: string;
  organization: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mrs. Ruchika Malhotra',
    designation: 'Head of Department, Software Engineering, Delhi Technological University (DTU)',
    role: 'Head of Department, Software Engineering',
    organization: 'Delhi Technological University (DTU)',
    quote:
      'Piyush brings a responsible and thoughtful approach to his academic work and team responsibilities. His willingness to listen, accept feedback, and work constructively with others reflects maturity and a positive attitude toward learning. His interest in taking initiative and supporting his peers provides a strong foundation for developing into a capable professional and leader.',
  },
  {
    id: '2',
    name: 'Mr. Sanjay Patidar',
    designation: 'Assistant Professor, Department of Software Engineering, DTU',
    role: 'Assistant Professor, Department of Software Engineering',
    organization: 'Delhi Technological University (DTU)',
    quote:
      'Piyush completed his final-year project under my supervision. During the project, he worked on understanding the problem, developing the solution, and refining his approach through feedback. His project work provided an opportunity to apply his software engineering knowledge and strengthen his technical problem-solving skills. He showed an interest in learning from the development process and communicating his work clearly.',
  },
  {
    id: '3',
    name: 'Mrs. Priya Singh',
    designation: 'Professor, Department of Software Engineering, DTU',
    role: 'Professor, Department of Software Engineering',
    organization: 'Delhi Technological University (DTU)',
    quote:
      'Piyush demonstrates a courteous and collaborative approach to his academic work. He is open to learning, receptive to constructive feedback, and interested in developing his technical and analytical abilities. His willingness to improve and approach challenges with patience are positive qualities that can support his continued professional growth.',
  },
];

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-transparent border-b border-neutral-200">
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
            Faculty Recommendations
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950">
            Academic Mentorship &amp; Faculty Review
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
            Direct academic feedback from faculty mentors at Delhi Technological University.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: shouldReduceMotion ? 0 : idx * 0.1 }}
              className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-blue-600 mb-6" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-neutral-900 text-sm sm:text-base font-normal leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Faculty Author Identity */}
              <div className="pt-6 border-t border-neutral-100">
                <h3 className="text-base font-bold text-neutral-950 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mt-1">
                  {item.role}
                </p>
                <p className="text-xs text-neutral-700 mt-0.5">
                  {item.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
