"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Mail, Quote, ExternalLink } from "lucide-react";
import { Reveal } from "@/lib/animations";

const founders = [
  {
    name: "V KUMARAVEL",
    role: "Co-Founder & CEO",
    bio: "V Kumaravel is a dynamic force in transport operations, industrial logistics, and supply chain execution. With deep expertise in petrochemical logistics and warehousing, he drives precision and performance across South India. He brings sharp insight into movement planning, customer expectations, and operational excellence. His strength lies in seamlessly integrating transport, warehousing, and business growth. Known for his execution-driven mindset, he delivers practical and high-impact logistics solutions. He has a proven ability to identify opportunities and build strong, lasting client partnerships. With keen market awareness, he ensures adaptability, reliability, and consistent performance. His focus on efficiency and scalability fuels sustainable expansion. Under his leadership, VKLS continues to rise as a powerful and trusted name in industrial logistics.",
    image: "/images/founders/founder_kumaravel.jpg", 
    linkedin: "#",
    email: "kumaravel@vkls.in"
  },
  {
    name: "R MANIKANDAN",
    role: "Co-Founder & COO",
    bio: "R Manikandan is a seasoned leader with over 25+ years of experience across logistics, finance, administration, and operations. An MBA graduate, he brings a powerful blend of strategic insight and operational discipline. He is known for driving financial clarity, structured systems, and organizational excellence. His expertise in finance and administrative control ensures precision, accountability, and efficiency at every level. From cost optimization to execution oversight, he strengthens the company’s operational backbone. His leadership fosters stability, process clarity, and consistent performance. With deep knowledge of financial systems, warehousing, and supply chain management, he plays a critical role in building a resilient and future-ready organization. Under his guidance, VKLS continues to stand strong with efficiency, stability, and sustainable growth.",
    image: "/images/founders/founder_manikandan (1).jpg",
    linkedin: "#",
    email: "mani@vkls.in"
  }
];

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Header */}
        <section className="bg-slate-50 py-32 overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-[0.05]" 
               style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="container mx-auto px-6 text-center relative z-10">
            <Reveal>
              <h1 className="mb-6 text-5xl font-black text-slate-900 md:text-8xl tracking-tight">
                Our <span className="text-blue-600">Leadership</span>
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-slate-600 font-medium leading-relaxed">
                The visionary minds behind India&apos;s most trusted industrial logistics infrastructure.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Founders List */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid gap-32">
              {founders.map((founder, i) => (
                <div key={i} className={`flex flex-col gap-16 lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center`}>
                  <div className="w-full lg:w-2/5">
                    <Reveal delay={0.2}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-slate-100 shadow-2xl shadow-blue-100 ring-8 ring-white group">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="absolute bottom-8 left-8 right-8 z-20 translate-y-4 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                           <div className="rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-2xl flex items-center justify-between">
                              <span className="font-black text-slate-900">{founder.name}</span>
                              <ExternalLink size={18} className="text-blue-600" />
                           </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                  <div className="w-full lg:w-3/5">
                    <Reveal delay={0.4}>
                      <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-xs font-black text-blue-600 mb-8 uppercase tracking-[0.2em]">
                         Founder & Executive Board
                      </div>
                      <h2 className="mb-2 text-5xl font-black text-slate-900 tracking-tight">{founder.name}</h2>
                      <div className="flex items-center gap-4 mb-6">
                        <p className="text-xl font-bold text-blue-600">{founder.role}</p>
                        <span className="h-1 w-8 bg-slate-200 rounded-full" />
                        <span className="text-sm font-black uppercase tracking-widest text-slate-400">
                          {i === 0 ? "Head of Business Development" : "Head of Administration & Operations"}
                        </span>
                      </div>
                      <div className="relative mb-12">
                        <Quote className="absolute -left-8 -top-8 h-16 w-16 text-slate-100 -z-10" />
                        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-6">
                          {founder.bio}
                        </p>
                        {i === 0 && (
                          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-lg font-bold text-slate-800">
                            “Growth becomes meaningful only when it is built on trust, consistency, and long-term relationships.”
                          </blockquote>
                        )}
                        {i === 1 && (
                          <blockquote className="border-l-4 border-blue-600 pl-6 italic text-lg font-bold text-slate-800">
                            “Strong operations are not created by chance — they are built through discipline, structure, and financial clarity.”
                          </blockquote>
                        )}
                      </div>
                      <div className="flex gap-6">
                         <a href={founder.linkedin} className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 active:scale-90 group">
                            <Linkedin size={24} className="transition-transform group-hover:scale-110" />
                         </a>
                         <a href={`mailto:${founder.email}`} className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-slate-100 bg-white text-slate-900 transition-all hover:border-blue-600 hover:text-blue-600 active:scale-90 group">
                            <Mail size={24} className="transition-transform group-hover:scale-110" />
                         </a>
                      </div>
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Message */}
        <section className="bg-slate-950 py-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <Reveal>
              <Quote className="mx-auto mb-10 h-16 w-16 text-blue-500 opacity-50" />
              <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight md:text-6xl tracking-tight text-slate-400">
                &quot;We don&apos;t just move cargo; we move the industry forward with integrity and safety as our foundation.&quot;
              </h2>
              <div className="mt-12 flex flex-col items-center gap-4">
                <div className="h-1 w-20 bg-blue-600 rounded-full" />
                <div className="font-black uppercase tracking-[0.4em] text-blue-500 text-sm">
                   A Message from the Board
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
