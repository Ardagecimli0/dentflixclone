"use client";

import Image from "next/image";

const logos = [
  { src: "/images/press/elle.svg", alt: "Elle Magazine" },
  { src: "/images/press/hello.svg", alt: "Hello Magazine" },
  { src: "/images/press/gq.svg", alt: "GQ Magazine" },
  { src: "/images/press/cnn-turk.svg", alt: "CNN Turk" },
  { src: "/images/press/vogue.svg", alt: "Vogue Magazine" },
  { src: "/images/press/elele.svg", alt: "Elele Magazine" },
];

export default function PressLogos() {
  return (
    <section className="py-8 bg-[#0c1015] overflow-hidden border-y border-gray-800">
      <div className="flex animate-marquee">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-12">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
