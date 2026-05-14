import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Shield, Target, Eye } from "lucide-react";
import { Reveal } from "@/lib/animations";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Luxury Hero */}
        <section className="bg-slate-50 py-24 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="container mx-auto px-6 text-center relative z-10">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Established 2016
              </div>
              <h1 className="mb-8 text-5xl font-black text-slate-900 md:text-8xl tracking-tighter">
                The Heritage <br />
                of <span className="text-blue-600">VKLS.</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
                Two decades of unyielding commitment to industrial precision and safety excellence.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Vision & Mission - Glass Architecture */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 md:gap-16 lg:grid-cols-2">
              <Reveal>
                <div className="rounded-[3rem] bg-blue-600 p-10 md:p-16 text-white shadow-2xl shadow-blue-200 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-20 -mt-20 transition-all duration-700 group-hover:bg-white/10" />
                  <div className="relative z-10">
                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
                       <Eye size={32} />
                    </div>
                    <h2 className="mb-6 text-4xl font-black tracking-tight">Our Vision: The Logistics Intelligence Frontier</h2>
                    <p className="text-xl font-medium leading-relaxed opacity-90">
                      To engineer a borderless, intelligent, and hyper-resilient logistics ecosystem. We envision a future where VKLS serves as the central nervous system for industrial supply chains—seamlessly synchronizing physical infrastructure with real-time digital intelligence.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="rounded-[3rem] bg-slate-900 p-10 md:p-16 text-white shadow-2xl shadow-slate-200 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full -mr-20 -mt-20 transition-all duration-700 group-hover:bg-blue-600/20" />
                  <div className="relative z-10">
                    <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                       <Target size={32} className="text-blue-500" />
                    </div>
                    <h2 className="mb-6 text-4xl font-black tracking-tight text-white">Our Mission: Operational Empowerment</h2>
                    <p className="text-xl font-medium leading-relaxed text-slate-100">
                      To empower industrial titans by transforming complex logistics into a competitive advantage. We bridge the gap between high-risk industrial requirements and precision-grade operational safety, ensuring that every link in the supply chain functions with flawless reliability.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Historical Significance */}
        <section className="bg-slate-50 py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <Reveal>
                  <h2 className="mb-8 text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Industrial Mastery <br />Since 2016.</h2>
                  <div className="space-y-8 text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
                    <p>
                      Founded with a mission to solve the complex logistical challenges of the petrochemical sector, VKLS has evolved into a regional titan in South India.
                    </p>
                    <p>
                      Our infrastructure spanning 3,00,000+ square feet is more than just space—it&apos;s a high-security hub engineered for the hazardous and the critical.
                    </p>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-8">
                    {[
                      { label: "Precision", value: "99.9%" },
                      { label: "Expertise", value: "20 Yrs" },
                      { label: "Capacity", value: "3L+ Sq Ft" },
                      { label: "Safety", value: "Tier-1" }
                    ].map((stat, i) => (
                      <div key={i} className="border-l-4 border-blue-600 pl-6">
                        <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                        <div className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
              <div className="w-full lg:w-1/2">
                 <Reveal delay={0.3}>
                   <div className="aspect-[4/3] rounded-[3.5rem] bg-white p-4 shadow-2xl shadow-blue-100 ring-1 ring-slate-100 group">
                      <div className="h-full w-full rounded-[2.5rem] bg-slate-100 overflow-hidden relative">
                         <img 
                            src="/images/team-mastery.webp" 
                            alt="VK LOGISTICS SOLUTIONS Team Excellence" 
                            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                         />
                         <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
                      </div>
                   </div>
                 </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Standards & Certifications */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-6">
            <Reveal>
              <h2 className="mb-16 text-center text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Global Standards</h2>
            </Reveal>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <Shield className="h-10 w-10" />, title: "Safety Protocol", desc: "Rigorous OHSAS compliance for every operation." },
                { icon: <Award className="h-10 w-10" />, title: "Quality Audit", desc: "ISO 9001:2015 certified infrastructure." },
                { icon: <Users className="h-10 w-10" />, title: "Human Capital", desc: "Elite logistics engineers and safety officers." },
                { icon: <Shield className="h-10 w-10" />, title: "Governance", desc: "Absolute transparency in supply chain reporting." },
              ].map((value, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="rounded-[2.5rem] border border-slate-100 bg-white p-10 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100 group">
                    <div className="mb-8 flex justify-center text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {value.icon}
                    </div>
                    <h3 className="mb-4 text-xl font-black text-slate-900">{value.title}</h3>
                    <p className="text-slate-600 font-medium">{value.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
