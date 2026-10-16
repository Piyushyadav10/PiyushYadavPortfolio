'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiOutlineFunnel, 
  HiOutlineMagnifyingGlass, 
  HiXMark, 
  HiCheck, 
  HiChevronDown 
} from 'react-icons/hi2';

interface TechnologyFilterProps {
  availableTechnologies: { name: string; count: number }[];
  selectedTechnologies: string[];
  onToggleTechnology: (tech: string) => void;
  onClearTechnologies: () => void;
}

export default function TechnologyFilter({
  availableTechnologies,
  selectedTechnologies,
  onToggleTechnology,
  onClearTechnologies,
}: TechnologyFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Filter available technologies by user query
  const filteredTechs = useMemo(() => {
    if (!searchQuery.trim()) return availableTechnologies;
    const q = searchQuery.toLowerCase().trim();
    return availableTechnologies.filter(t => t.name.toLowerCase().includes(q));
  }, [availableTechnologies, searchQuery]);

  return (
    <div className="relative inline-block text-left" ref={panelRef}>
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
          selectedTechnologies.length > 0
            ? 'bg-neutral-950 text-white border-neutral-950 shadow-xs'
            : isOpen
            ? 'bg-neutral-100 border-neutral-300 text-neutral-950'
            : 'bg-white border-neutral-200 text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50'
        }`}
      >
        <HiOutlineFunnel className="w-3.5 h-3.5 text-blue-600" />
        <span>Filter by Tech</span>
        {selectedTechnologies.length > 0 && (
          <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-600 text-white">
            {selectedTechnologies.length}
          </span>
        )}
        <HiChevronDown 
          className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`} 
        />
      </button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-72 sm:w-80 max-w-[calc(100vw-2.5rem)] rounded-2xl bg-white border border-neutral-200 shadow-xl z-40 overflow-hidden"
          >
            {/* Search Input Header */}
            <div className="p-3 border-b border-neutral-100 bg-[#fafafa]">
              <div className="relative">
                <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search technology..."
                  className="w-full pl-9 pr-8 py-2 text-xs bg-white text-neutral-900 placeholder-neutral-500 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900"
                    aria-label="Clear search"
                  >
                    <HiXMark className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* List of Technologies */}
            <div className="max-h-60 overflow-y-auto p-2 divide-y divide-neutral-50">
              {filteredTechs.length === 0 ? (
                <div className="p-4 text-center text-xs text-neutral-600">
                  No technologies matching &ldquo;{searchQuery}&rdquo;
                </div>
              ) : (
                filteredTechs.map((tech) => {
                  const isChecked = selectedTechnologies.includes(tech.name);
                  return (
                    <button
                      key={tech.name}
                      type="button"
                      onClick={() => onToggleTechnology(tech.name)}
                      className="w-full px-3 py-2 text-xs flex items-center justify-between rounded-lg hover:bg-neutral-50 text-neutral-800 transition-colors text-left"
                    >
                      <span className="font-medium text-neutral-900">{tech.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">
                          {tech.count}
                        </span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                            isChecked
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'border-neutral-300 bg-white'
                          }`}
                        >
                          {isChecked && <HiCheck className="w-3 h-3 stroke-2" />}
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer with Clear All */}
            {selectedTechnologies.length > 0 && (
              <div className="p-3 border-t border-neutral-100 bg-[#fafafa] flex items-center justify-between text-xs">
                <span className="text-neutral-700 font-medium">
                  {selectedTechnologies.length} selected
                </span>
                <button
                  type="button"
                  onClick={onClearTechnologies}
                  className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
