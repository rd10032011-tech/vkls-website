"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/lib/animations";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd use a form service or API route
    window.location.href = "mailto:mani@vkls.in?subject=New Quote Inquiry from VKLS Website";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Header - Luxury Style */}
        <section className="bg-slate-50 py-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="container mx-auto px-6 text-center relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                Executive Concierge
              </div>
              <h1 className="mb-6 text-5xl font-black text-slate-900 md:text-8xl tracking-tighter">
                Request a <span className="text-blue-600">Solution</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600 font-medium leading-relaxed">
                Connect with our strategic planning team to architect a high-performance logistics roadmap for your enterprise.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Form & Info */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid gap-20 lg:grid-cols-2">
              {/* Form */}
              <Reveal>
                <div className="rounded-[3rem] bg-white border border-slate-100 p-8 lg:p-16 shadow-2xl shadow-blue-100/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full" />
                  
                  <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Direct Inquiry</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                        <input required type="text" placeholder="Full Name" className="w-full border-b-2 border-slate-100 bg-transparent py-4 font-bold text-slate-900 outline-none transition-colors focus:border-blue-600" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Official Email</label>
                        <input required type="email" placeholder="Email Address" className="w-full border-b-2 border-slate-100 bg-transparent py-4 font-bold text-slate-900 outline-none transition-colors focus:border-blue-600" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Enterprise Name</label>
                      <input required type="text" placeholder="Company Name" className="w-full border-b-2 border-slate-100 bg-transparent py-4 font-bold text-slate-900 outline-none transition-colors focus:border-blue-600" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Service Category</label>
                      <select className="w-full border-b-2 border-slate-100 bg-transparent py-4 font-bold text-slate-900 outline-none transition-colors focus:border-blue-600 appearance-none">
                         <option>Strategic Warehousing</option>
                         <option>Industrial Transportation</option>
                         <option>End-to-End Fulfillment</option>
                         <option>Supply Chain Optimization</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Executive Summary</label>
                      <textarea rows={3} placeholder="Tell us about your requirements..." className="w-full border-b-2 border-slate-100 bg-transparent py-4 font-bold text-slate-900 outline-none transition-colors focus:border-blue-600 resize-none"></textarea>
                    </div>
                    
                    <button type="submit" className="flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 py-6 text-xl font-black text-white shadow-2xl shadow-blue-500/20 transition-all hover:bg-slate-900 active:scale-95">
                      Send to mani@vkls.in
                      <Send size={20} />
                    </button>

                    <div className="flex items-center gap-2 justify-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       <ShieldCheck size={14} className="text-blue-600" />
                       Encrypted & Secure Communication
                    </div>
                  </form>
                </div>
              </Reveal>

              {/* Contact Information */}
              <div className="flex flex-col justify-center gap-16">
                <div>
                   <Reveal>
                     <h2 className="mb-12 text-3xl font-black text-slate-900 uppercase tracking-tighter">Global Hubs</h2>
                   </Reveal>
                   <div className="space-y-12">
                      {[
                        { icon: <MapPin size={28} />, label: "Strategic Headquarters", value: "F3, Shree Diya Residency, Bhuvaneshwari nagar, 2nd street, Puzhal, Chennai-600066" },
                        { icon: <Phone size={28} />, label: "Direct Line", value: "+91 44 2345 6789" },
                        { icon: <Mail size={28} />, label: "Strategic Inquiries", value: "mani@vkls.in" }
                      ].map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                          <div className="flex gap-8 group">
                             <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                {item.icon}
                             </div>
                             <div>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">{item.label}</div>
                                <div className="text-xl text-slate-900 font-black tracking-tight">{item.value}</div>
                             </div>
                          </div>
                        </Reveal>
                      ))}
                   </div>
                </div>

                <Reveal delay={0.4}>
                  <div className="rounded-[3rem] bg-slate-950 p-12 text-white shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#2563eb20,transparent)]" />
                     <div className="relative z-10">
                       <h3 className="mb-8 text-2xl font-black tracking-tight">Enterprise Support</h3>
                       <div className="space-y-6 font-bold text-slate-400">
                          <div className="flex items-center justify-between">
                             <span>Operational Hours</span>
                             <span className="text-white">24/7 Monitoring</span>
                          </div>
                          <div className="flex items-center justify-between">
                             <span>Global Response</span>
                             <span className="text-white">&lt; 2 Hours</span>
                          </div>
                       </div>
                       <div className="mt-10 pt-10 border-t border-white/10">
                          <div className="flex items-center gap-3 text-blue-500 font-black tracking-tight">
                             <CheckCircle2 size={24} />
                             Real-time Disaster Recovery Ready
                          </div>
                       </div>
                     </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
