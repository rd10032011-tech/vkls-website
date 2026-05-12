"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

import Logistics3D from "./Logistics3D";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white pt-20">
      <Logistics3D />

      <div className="container relative z-10 mx-auto px-6 py-12 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center text-center"
        >
          <div className="w-full max-w-5xl">
            
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 backdrop-blur-sm px-6 py-2 text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-[0.3em]"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              VK LOGISTICS SOLUTIONS - Industrial Logistics Experts
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="mb-8 text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] text-slate-900 tracking-tighter"
            >
              PRECISION <br />
              <span className="text-blue-600">LOGISTICS.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-12 max-w-3xl text-xl md:text-3xl font-medium text-slate-600 leading-relaxed italic"
            >
              &quot;Expert supply chain management for Polymers, Tyres,
              Petrochemicals &amp; Home Appliances.&quot;
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-6 sm:flex-row sm:justify-center"
            >
              {/* Button 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                <Link
                  href="/services"
                  className="group flex items-center justify-center gap-3 rounded-full bg-slate-900 px-10 py-5 text-xl font-black text-white transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200"
                >
                  Our Capabilities
                  <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Button 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-3 rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-md px-10 py-5 text-xl font-black text-slate-900 transition-all hover:bg-white hover:border-blue-600"
                >
                  Request Audit
                </Link>
              </motion.div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={fadeInUp}
              className="mt-20 flex flex-wrap items-center justify-center gap-10"
            >
              {[
                { label: "ISO 9001:2015", sub: "Quality Management" },
                { label: "OHSAS 18001", sub: "Safety Standards" },
                { label: "PESO CERTIFIED", sub: "Hazardous Materials" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    {item.label}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {item.sub}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}