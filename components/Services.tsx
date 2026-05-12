"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { Reveal } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl text-left">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                Specialized Catalog
              </div>
              <h2 className="mb-4 text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                Industry <span className="text-blue-600">Solutions.</span>
              </h2>
              <p className="text-lg md:text-xl font-medium text-slate-500 leading-relaxed">
                End-to-end supply chain infrastructure engineered for the global industrial manufacturing sector.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link 
              href="/services" 
              className="group flex items-center gap-3 font-black text-slate-900 uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-slate-900 pb-2 transition-all hover:text-blue-600 hover:border-blue-600"
            >
              All Services
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className={`group relative flex flex-col h-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 md:p-10 transition-all duration-500 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-100/50 ${service.slug === 'freight-forwarding' ? 'opacity-70 hover:opacity-100' : ''}`}
              >
                {service.slug === 'freight-forwarding' && (
                  <div className="absolute top-8 right-8 z-20 rounded-full bg-blue-600 px-4 py-1 text-[10px] font-black text-white uppercase tracking-widest">
                    Coming Soon
                  </div>
                )}
                <div className="mb-6 h-48 w-full overflow-hidden rounded-[1.5rem] shadow-inner">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-slate-50 text-blue-600 shadow-sm transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-200">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-black text-slate-900 tracking-tight">{service.title}</h3>
                <p className="mb-8 text-slate-600 font-medium leading-relaxed flex-grow">
                  {service.shortDesc}
                </p>
                <div className="flex items-center gap-2 font-black text-blue-600 text-xs uppercase tracking-widest">
                  Explore Capacity
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-blue-50/50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
