import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services-data";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Header Section */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-6">
            <Link 
              href="/services" 
              className="mb-8 inline-flex items-center gap-2 font-bold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="w-full lg:w-3/5">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                  {service.icon}
                </div>
                <h1 className="mb-6 text-5xl font-black text-slate-900 md:text-6xl">
                  {service.title}
                </h1>
                <p className="text-xl font-medium leading-relaxed text-slate-600">
                  {service.fullDesc}
                </p>
              </div>
              <div className="w-full lg:w-2/5">
                 <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Details */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 text-3xl font-black text-slate-900 uppercase tracking-tight">Key Capabilities</h2>
                <div className="grid gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-2xl border border-slate-50 bg-slate-50 p-6 transition-all hover:border-blue-100 hover:bg-white">
                      <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-600" />
                      <span className="text-lg font-bold text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2.5rem] bg-slate-900 p-12 text-white">
                <h2 className="mb-6 text-3xl font-black">Why Choose VKLS?</h2>
                <p className="mb-8 text-lg font-medium opacity-80 leading-relaxed">
                  With over 20 years of specialized experience in industrial logistics, we don&apos;t just move your goods; we protect your supply chain and your reputation.
                </p>
                <ul className="space-y-4 font-bold">
                   <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      Unmatched Safety Standards
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      Real-time Visibility & Tracking
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      Expert Regulatory Compliance
                   </li>
                   <li className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      Strategic South India Network
                   </li>
                </ul>
                <Link 
                  href="/contact"
                  className="mt-12 inline-block rounded-full bg-blue-600 px-8 py-4 font-black transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
                >
                  Request a Solution
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-50">
           <div className="container mx-auto px-6 text-center">
              <h2 className="mb-6 text-4xl font-black text-slate-900">Ready to optimize your logistics?</h2>
              <p className="mb-10 text-xl text-slate-500 font-medium">Connect with our experts to design a custom solution for your business.</p>
              <Link 
                href="/contact"
                className="rounded-full bg-slate-900 px-10 py-5 text-xl font-black text-white transition-all hover:bg-blue-600 active:scale-95"
              >
                Get Started
              </Link>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
