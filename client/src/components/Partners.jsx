import React from "react";
import { partners } from "../data/partners";

const Partners = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container px-4 text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ils nous font confiance</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for fade effect */}
                <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-12 py-4">
                    {/* Double the list for seamless infinite loop */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={`${partner.id}-${index}`}
                            className="flex-shrink-0 w-40 md:w-52 group cursor-default"
                        >
                            <div className="flex flex-col items-center">
                                {/* Logo / Avatar Container */}
                                <div className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:border-slate-200">
                                    {partner.logo ? (
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full text-slate-400 font-bold text-2xl md:text-3xl group-hover:text-primary transition-colors duration-300">
                                            {partner.initials}
                                        </div>
                                    )}
                                </div>

                                {/* Company Name */}
                                <h3 className="text-sm md:text-base font-medium text-slate-500 group-hover:text-slate-900 transition-colors duration-300">
                                    {partner.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Partners;
