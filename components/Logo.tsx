"use client";

import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 group">
      <div className="relative h-20 w-20 transition-transform duration-500 group-hover:scale-105">
        <Image 
          src="/logo.png" 
          alt="VKLS Logo" 
          fill
          sizes="(max-width: 80px) 100vw, 80px"
          className="object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement?.parentElement;
            if (parent) {
              const textFallback = document.createElement('div');
              textFallback.className = "font-black text-blue-600 text-4xl italic";
              textFallback.innerText = "VK";
              parent.appendChild(textFallback);
            }
          }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tighter text-slate-900 leading-none">
          VKLS
        </span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-blue-600 uppercase">
          VK LOGISTICS SOLUTIONS
        </span>
      </div>
    </Link>
  );
}
