import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="text-xl font-medium text-slate-800 mb-8">Last updated: May 12, 2026</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Commitment to Data Integrity</h2>
          <p>At VK LOGISTICS SOLUTIONS (VKLS), we understand that in the industrial logistics sector, trust is the ultimate currency. We are committed to protecting the privacy and security of the information shared by our industrial partners, clients, and website visitors.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Information We Collect</h2>
          <p>We collect information you voluntarily provide, such as your name, corporate email, enterprise details, and logistics requirements when you request a quote or contact our team. We also collect technical data (cookies, IP addresses) to enhance website performance and security.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Data Usage & Protection</h2>
          <p>Your data is used strictly for operational purposes, such as:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Architecting logistics solutions for your enterprise.</li>
            <li>Responding to your industrial inquiries.</li>
            <li>Improving our service delivery and safety protocols.</li>
          </ul>
          <p>We never sell your corporate data. We implement high-security encryption to ensure all communications with VKLS remain confidential and secure.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Compliance</h2>
          <p>Our data handling processes align with industry-leading security standards. We continuously audit our digital infrastructure to ensure it meets the rigorous expectations of global industrial giants.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
