"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Bot, Send, Loader2, Sparkles, ClipboardCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { getAIResponse } from "@/lib/ai-agent";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

const PRE_FIXED_QUESTIONS = [
  "Who are the founders?",
  "Tell me about your safety standards.",
  "What services do you offer?",
];

export default function LogisticsAIHub() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'Welcome to VK LOGISTICS SOLUTIONS. I am your intelligent logistics partner. How can I assist you with your industrial supply chain today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setLoading(true);
    const response = await getAIResponse(text, 'chat');
    setMessages((prev) => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="mb-4 w-[90vw] md:w-96 overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-slate-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-xl"><Bot className="text-white" size={20} /></div>
                <h3 className="font-black text-white">Logistics AI Hub</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white"><X size={20} /></button>
            </div>

            {/* Chat Area */}
            <div className="h-80 overflow-y-auto p-6 space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={`p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white ml-auto max-w-[80%]' : 'bg-white border border-slate-100 text-slate-700 mr-auto max-w-[80%]'}`}>
                  <ReactMarkdown components={{
                    a: ({href, children}) => (
                        <Link href={href as string} className="text-blue-600 font-bold underline" onClick={() => setIsOpen(false)}>
                            {children}
                        </Link>
                    )
                  }}>
                    {m.text}
                  </ReactMarkdown>
                </div>
              ))}
              {loading && <div className="p-4 bg-white rounded-2xl mr-auto"><Loader2 className="animate-spin text-blue-500" size={20} /></div>}
            </div>

            {/* Quick Actions */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="grid grid-cols-1 gap-2 mb-4">
                {PRE_FIXED_QUESTIONS.map((q) => (
                  <button key={q} onClick={() => handleSend(q)} className="text-left text-xs font-black text-slate-600 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 p-3 rounded-xl transition-all">
                    {q}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  className="flex-1 bg-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-600 outline-none" 
                  placeholder="Ask anything..."
                />
                <button onClick={() => handleSend(input)} className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors"><Send size={18} /></button>
              </div>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4 flex w-full items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
                <ClipboardCheck size={16} /> Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl shadow-blue-500/40"
      >
        <Sparkles size={28} />
      </motion.button>
    </div>
  );
}
