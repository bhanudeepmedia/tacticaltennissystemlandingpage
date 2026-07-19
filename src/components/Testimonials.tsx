import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  {
    id: 'wxpCmOiq2iE',
    title: 'Atticus Kim Testimonial | Jacob Tennis',
  },
  {
    id: 'Aza3_oO-BwA',
    title: 'Arjun Bhatia Testimonial | Jacob Tennis',
  },
  {
    id: '4E1rCFL8OZo',
    title: 'Joaquín Walsh Testimonial | Jacob Tennis',
  },
  {
    id: '_N1ZZtvH1MA',
    title: 'Alec Rodriguez Testimonial | Jacob Tennis',
  }
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeVideo || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // If the container goes out of view by at least 80%, stop the video
        if (entries[0].intersectionRatio < 0.2) {
          setActiveVideo(null);
        }
      },
      {
        root: null,
        threshold: 0.2, // Trigger when less than 20% visible
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [activeVideo]);

  return (
    <section 
      id="testimonials" 
      ref={containerRef}
      className="relative py-16 md:py-24 bg-brand-bg px-4 md:px-8 border-t border-brand-border overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#5C9400]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono text-brand-lime font-bold uppercase tracking-widest block">
            ATHLETE SUCCESS STORIES
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black italic text-white uppercase tracking-tight">
            RESULTS FROM THE <br className="hidden md:block" /> TACTICAL SYSTEM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((test) => (
            <div 
              key={test.id}
              className="group relative aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-500"
            >
              {activeVideo === test.id ? (
                // In-place Video Player
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${test.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`} 
                  title={test.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              ) : (
                // Thumbnail view
                <div 
                  className="absolute inset-0 w-full h-full cursor-pointer hover:border-brand-lime hover:-translate-y-2 transition-all duration-500"
                  onClick={() => setActiveVideo(test.id)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${test.id}/hqdefault.jpg`}
                    alt={test.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-lime/20 backdrop-blur-sm border border-brand-lime/50 flex items-center justify-center group-hover:bg-brand-lime group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(92,148,0,0.3)] group-hover:shadow-[0_0_40px_rgba(92,148,0,0.6)]">
                      <Play className="w-6 h-6 text-brand-lime group-hover:text-black ml-1 transition-colors" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                      <h3 className="text-white font-bold text-sm leading-tight">
                        {test.title}
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
