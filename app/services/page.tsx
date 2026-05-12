import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Header */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="mb-6 text-5xl font-black text-slate-900 md:text-7xl">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-600 font-medium leading-relaxed">
              Comprehensive, specialized, and safety-certified logistics solutions tailored for the global petrochemical and industrial manufacturing sectors.
            </p>
          </div>
        </section>

        <Services />

        {/* Value Prop */}
        <section className="bg-slate-900 py-24 text-white text-center">
           <div className="container mx-auto px-6">
              <h2 className="mb-8 text-4xl font-black">Need a Custom Logistics Plan?</h2>
              <p className="mx-auto mb-12 max-w-2xl text-xl opacity-80">Our engineering team works with you to design bespoke warehousing and distribution strategies that maximize efficiency and safety.</p>
              <a href="/contact" className="inline-block rounded-full bg-blue-600 px-10 py-5 text-xl font-black transition-all hover:bg-blue-700 active:scale-95">Get a Free Audit</a>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
