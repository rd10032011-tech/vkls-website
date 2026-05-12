"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function LeadGen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-72 md:w-80 overflow-hidden rounded-[2rem] bg-slate-900 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Fast Response</span>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <h3 className="mb-2 text-xl font-black text-white">Need a Quote?</h3>
            <p className="mb-6 text-sm font-medium text-slate-400">
              Get a customized industrial logistics audit for your business within 24 hours.
            </p>
            <Link
              href="/quote"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-sm font-black text-white transition-all hover:bg-white hover:text-blue-600 active:scale-95"
            >
              Get Started
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-500/40"
      >
        <MessageSquare size={28} />
      </motion.button>
    </div>
  );
}
