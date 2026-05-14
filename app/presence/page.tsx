import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Building2, Truck, ShieldCheck } from "lucide-react";
import { Reveal } from "@/lib/animations";

export default function PresencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        <section className="bg-slate-50 py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <Reveal>
              <h1 className="mb-6 text-5xl font-black text-slate-900 md:text-8xl tracking-tighter">
                Our <span className="text-blue-600">Strategic Presence.</span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-slate-600 font-medium leading-relaxed">
                Headquartered in Chennai, VK Logistics Solutions serves the industrial heart of South India with a specialized, high-security network.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-3">
              <Reveal>
                <div className="rounded-[2.5rem] bg-white border border-slate-100 p-10 shadow-xl shadow-blue-50">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <MapPin size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-slate-900">Chennai Headquarters</h3>
                  <p className="text-slate-600 font-medium">
                    F3, Shree Diya Residency, Bhuvaneshwari nagar, 2nd street, Puzhal, Chennai - 600066.
                  </p>
                </div>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div className="rounded-[2.5rem] bg-white border border-slate-100 p-10 shadow-xl shadow-blue-50">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Building2 size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-slate-900">Warehousing Hubs</h3>
                  <p className="text-slate-600 font-medium">
                    State-of-the-art facilities located strategically across the Puzhal industrial corridor, serving major manufacturing giants.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-[2.5rem] bg-white border border-slate-100 p-10 shadow-xl shadow-blue-50">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Truck size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-slate-900">South India Reach</h3>
                  <p className="text-slate-600 font-medium">
                    Comprehensive fleet coverage spanning Tamil Nadu, Andhra Pradesh, and Karnataka, specializing in hazardous petrochemical logistics.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
             <Reveal>
               <ShieldCheck size={64} className="mx-auto mb-8 text-blue-500" />
               <h2 className="mb-6 text-4xl font-black">Safety Compliance Across All Locations</h2>
               <p className="mx-auto max-w-2xl text-xl text-slate-400 font-medium">
                 Every VKLS facility, whether an office or a high-security warehouse, operates under the same rigorous ISO & OHSAS safety protocols to guarantee integrity across our entire network.
               </p>
             </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
