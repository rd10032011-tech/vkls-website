"use client";

import Image from "next/image";

interface ClientLogoProps {
  name: string;
  src: string;
}

export function ClientLogo({ name, src }: ClientLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center group h-24 w-40">
      <div className="relative h-16 w-32 transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 hover:scale-110">
        <Image 
          src={src} 
          alt={name} 
          fill 
          className="object-contain"
          onError={(e) => {
            // If logo file is missing, fallback to showing the name
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const container = target.parentElement;
            if (container) {
              const textFallback = document.createElement('div');
              textFallback.className = "flex items-center justify-center h-full w-full text-[10px] font-black text-slate-300";
              textFallback.innerText = name;
              container.appendChild(textFallback);
            }
          }}
        />
      </div>
    </div>
  );
}
