"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Founders", href: "/founders" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-white/90 border-b border-slate-100 backdrop-blur-xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden space-x-2 lg:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-600 transition-colors hover:text-blue-600 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-500 group-hover:w-4" />
              </Link>
            ))}
            <Link 
              href="/contact"
              className="ml-4 rounded-full bg-slate-900 px-8 py-3 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 active:scale-95"
            >
              Get a Solution
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="text-slate-900 lg:hidden p-3 rounded-2xl bg-slate-50 border border-slate-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-white/98 border-b border-slate-100 p-8 shadow-2xl backdrop-blur-2xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-slate-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="w-full rounded-2xl bg-blue-600 py-5 text-center text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-blue-200"
              onClick={() => setIsOpen(false)}
            >
              Get a Solution
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
