import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">Terms of Service</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="text-xl font-medium text-slate-800 mb-8">Last updated: May 12, 2026</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Agreement</h2>
          <p>By accessing the website of VK LOGISTICS SOLUTIONS (VKLS), you agree to be bound by these terms. If you do not agree, please refrain from using our digital services.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Industrial Standards</h2>
          <p>The information provided on this site is for informational purposes for our industrial partners. VKLS reserves the right to modify service parameters to meet evolving industrial safety standards and regulatory compliance (ISO, PESO, OHSAS).</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Intellectual Property</h2>
          <p>All content, branding, and imagery are the exclusive property of VK LOGISTICS SOLUTIONS. Unauthorized use or reproduction is strictly prohibited.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Limitation of Liability</h2>
          <p>While we strive for operational perfection, VKLS is not liable for indirect damages arising from the use of this website. Our formal service agreements are governed by separate, detailed industrial contracts.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Governing Law</h2>
          <p>These terms shall be governed by the laws applicable to industrial and commercial operations in India.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
