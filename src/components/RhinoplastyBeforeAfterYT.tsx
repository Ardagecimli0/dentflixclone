"use client";

import { useTranslation } from "@/lib/i18n";

const videos = [
    { id: "ioOjcrwcmx4" },
    { id: "Hbo-DfTJcaY" },
    { id: "YYS-DhUqENs" },
    { id: "UbgwkbYi7ds" },
];

export default function RhinoplastyBeforeAfterYT() {
    const { t } = useTranslation();

    return (
        <section className="py-16 md:py-20 bg-[#12171e]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#c9a96e' }}>
                    {t('rhinoplastyBeforeAfterYT.title')}
                </h2>

                {/* Subtitle */}
                <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
                    {t('rhinoplastyBeforeAfterYT.subtitle')}
                    <br />
                </p>

                {/* Videos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#1a1a1a] hover:scale-105 transition-transform duration-300 cursor-pointer shadow-xl"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}?loop=1`}
                                title={`Before After Video ${index + 1}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
