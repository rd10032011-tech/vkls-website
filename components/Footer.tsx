import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin as LinkedinIcon, X as XIcon, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white shadow-lg shadow-blue-200">
                VK
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-slate-900 leading-none">
                  VKLS
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-blue-600 uppercase">
                  Logistics
                </span>
              </div>
            </Link>
            <p className="mb-8 max-w-sm text-slate-500 font-medium leading-relaxed">
              India&apos;s trusted partner for petrochemical logistics and specialized warehousing. Engineered for safety, speed, and precision since 2016.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <LinkedinIcon size={18} />, href: "#" },
                { icon: <XIcon size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
              ].map((social, i) => (
                <Link 
                  key={i}
                  href={social.href} 
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-900">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              {[
                { name: "About VKLS", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Founders", href: "/founders" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-slate-900">Contact Us</h4>
            <ul className="space-y-6 text-sm font-bold text-slate-500">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                   <MapPin size={20} />
                </div>
                <span className="leading-relaxed">F3, Shree Diya Residency, <br />Bhuvaneshwari nagar, 2nd street,<br />Puzhal, Chennai - 600066</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                   <Phone size={20} />
                </div>
                <span>+91 90033 20526</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                   <Mail size={20} />
                </div>
                <span>mani@vkls.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-8 md:flex-row">
          <p className="text-xs font-bold text-slate-400">
            © 2026 VK LOGISTICS SOLUTIONS (VKLS). All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-400">
            <Link href="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
