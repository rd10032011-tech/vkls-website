import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Award, ChevronRight } from "lucide-react";
import { Reveal } from "@/lib/animations";
import { ClientLogo } from "@/components/ClientLogo";

// 17 Clients for the marquee
const clients = [
  { name: "ALLIED PLASTICS", logo: "/images/clients/Allied-plastics.webp" },
  { name: "APEX TECHNO POLYMERS", logo: "/images/clients/apex logo.webp" },
  { name: "ARCHEM", logo: "/images/clients/archem logo.webp" },
  { name: "BLOWPACK", logo: "/images/clients/blowpack logo.webp" },
  { name: "Ceyenar Chemicals", logo: "/images/clients/ceyenar_logo.webp" },
  { name: "DSM AGENCIES", logo: "/images/clients/dsmlogo.webp" },
  { name: "GLOBUS RUBCHEM", logo: "/images/clients/Globus logo.webp" },
  { name: "HMEL", logo: "/images/clients/HMEL logo.webp" },
  { name: "ITC LIMITED", logo: "/images/clients/itc-limited-logo-png-transparent.webp" },
  { name: "RAVAGO INDIA", logo: "/images/clients/ravago_india_logo.webp" },
  { name: "RELIANCE POLYMER", logo: "/images/clients/reliance polymer logo.webp" },
  { name: "ROCA BATHROOMS", logo: "/images/clients/Roca-Large-Square logo.webp" },
  { name: "STAR PVC", logo: "/images/clients/Star_Logo-01-scaled.webp" },
  { name: "TEGRAL INDIA", logo: "/images/clients/tegral_india_pvt_ltd_logo.webp" },
  { name: "UPHEALTHY MEDICAL DEVICES", logo: "/images/clients/Uphealthy logo.webp" },
  { name: "ZIRA LIFESTYLES", logo: "/images/clients/zira-logo.webp" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Luxury Client Marquee with Logos */}
      <section className="bg-white py-16 md:py-24 overflow-hidden border-b border-slate-50">
        <div className="container mx-auto px-6 mb-12">
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <p className="text-center text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-slate-500">
                Institutional Partners
              </p>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </Reveal>
        </div>
        
        <div className="relative flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee gap-8 md:gap-16 items-center">
            {[...clients, ...clients].map((client, i) => (
              <ClientLogo key={i} name={client.name} src={client.logo} />
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* Experience / Value Prop - Premium Contrast */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-12 md:gap-20 lg:flex-row">
            <div className="w-full lg:w-1/2">
               <Reveal>
                 <div className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                    Engineering Excellence
                 </div>
                 <h2 className="mb-8 text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95]">
                   The Standard <br className="hidden md:block" />
                   of Industrial <br className="hidden md:block" />
                   <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Integrity.</span>
                 </h2>
                 <p className="mb-12 text-lg md:text-xl font-medium text-slate-700 leading-relaxed max-w-xl">
                   For two decades, VKLS has managed the critical supply chains of Fortune 500 giants with surgical precision and zero compromise.
                 </p>
               </Reveal>
               
               <div className="grid gap-8 md:gap-10">
                  {[
                    { icon: <ShieldCheck className="text-blue-600" />, title: "Hazardous Materials", desc: "India's highest safety rating for chemical handling." },
                    { icon: <TrendingUp className="text-blue-600" />, title: "Smart Operations", desc: "AI-driven inventory forecasting and real-time transit." },
                    { icon: <Award className="text-blue-600" />, title: "Tier-1 Compliance", desc: "Exceeding ISO & OHSAS global industrial standards." }
                  ].map((item, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="flex gap-6 group">
                         <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-blue-200">
                            {item.icon}
                         </div>
                         <div className="flex flex-col justify-center">
                            <h4 className="text-lg md:text-xl font-black text-slate-900 mb-1">{item.title}</h4>
                            <p className="text-slate-600 font-medium">{item.desc}</p>
                         </div>
                      </div>
                    </Reveal>
                  ))}
               </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <Reveal delay={0.3}>
                 <div className="relative aspect-[4/5] rounded-[3rem] md:rounded-[4.5rem] bg-slate-100 overflow-hidden shadow-2xl group">
                    <img 
                      src="/images/engineering-excellence.webp" 
                      alt="Engineering Excellence" 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                    <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-20">
                       <div className="dark-glass rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl">
                          <div className="text-4xl md:text-6xl font-black text-blue-500 mb-2">3L+</div>
                          <p className="text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs opacity-90">Sq Ft of High-Security Industrial Hub</p>
                       </div>
                    </div>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury CTA - High Contrast */}
      <section className="pb-20 md:pb-32 px-6">
        <div className="container mx-auto">
          <Reveal>
            <div className="relative rounded-[2.5rem] md:rounded-[4.5rem] bg-slate-900 p-10 md:p-24 text-center overflow-hidden shadow-2xl shadow-blue-900/20">
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#2563eb15,transparent)]" />
               <div className="relative z-10">
                 <h2 className="mb-6 text-3xl md:text-7xl text-white tracking-tighter leading-tight font-black">
                   Ready to Command <br className="hidden md:block" />
                   Your Supply Chain?
                 </h2>
                 <p className="mx-auto mb-10 md:mb-12 max-w-2xl text-lg md:text-2xl font-medium text-slate-400">
                   Join the elite circle of industry leaders who trust VKLS for their most critical logistics missions.
                 </p>
                 <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 md:px-12 md:py-6 text-lg md:text-xl font-black text-white transition-all hover:bg-white hover:text-blue-600 active:scale-95 shadow-2xl shadow-blue-500/30"
                 >
                   Request Executive Audit
                   <ChevronRight size={24} />
                 </Link>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
