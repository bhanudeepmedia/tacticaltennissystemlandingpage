/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Star, Check, Heart, Trophy, Medal, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function ProofStrip() {
  const [years, setYears] = useState(0);
  const [players, setPlayers] = useState(0);
  const [liveCalls, setLiveCalls] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Trigger smooth progressive counts
          const yearsInterval = setInterval(() => {
            setYears((prev) => {
              if (prev >= 20) {
                clearInterval(yearsInterval);
                return 20;
              }
              return prev + 1;
            });
          }, 35);

          const playersInterval = setInterval(() => {
            setPlayers((prev) => {
              if (prev >= 1000) {
                clearInterval(playersInterval);
                return 1000;
              }
              return prev + 40;
            });
          }, 25);

          const liveInterval = setInterval(() => {
            setLiveCalls((prev) => {
              if (prev >= 12) {
                clearInterval(liveInterval);
                return 12;
              }
              return prev + 1;
            });
          }, 50);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="proof-strip-section"
      className="bg-brand-surface py-10 md:py-20 px-4 md:px-8 border-b border-brand-border text-center"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase block font-bold">
            🏆 20 YEARS OF REAL RESULTS
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase">
            <span className="text-white italic block">THE PROOF WAS BUILT</span>
            <span className="text-outline italic block mt-1">ON REAL COURTS.</span>
          </h2>
        </div>

        {/* 4 Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-y border-brand-border py-12 bg-brand-bg/50 px-4 md:px-8">
          <div>
            <div className="text-5xl md:text-7xl font-display font-black text-brand-lime leading-none">
              {years}+
            </div>
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mt-3">
              YEARS ELITE COACHING
            </div>
            <p className="text-[11px] text-brand-muted mt-1 font-sans">
              Refining Tactical Play Patterns
            </p>
          </div>

          <div>
            <div className="text-5xl md:text-7xl font-display font-black text-brand-lime leading-none">
              {players}s
            </div>
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mt-3">
              PLAYERS TRAINED
            </div>
            <p className="text-[11px] text-brand-muted mt-1 font-sans">
              Tournament Level Development
            </p>
          </div>

          <div>
            <div className="text-5xl md:text-7xl font-display font-black text-brand-lime leading-none">
              ALL
            </div>
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mt-3">
              LEVELS ON COURT
            </div>
            <p className="text-[11px] text-brand-muted mt-1 font-sans">
              From Beginners to Touring Pros
            </p>
          </div>

          <div>
            <div className="text-5xl md:text-7xl font-display font-black text-brand-lime leading-none">
              {liveCalls}
            </div>
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mt-3">
              LIVE CALLS INCLUDED
            </div>
            <p className="text-[11px] text-brand-muted mt-1 font-sans">
              Direct Feedback From Jacobo
            </p>
          </div>
        </div>

        {/* 3 Image Accolades Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square bg-[#080B12] overflow-hidden group">
            <img loading="lazy" decoding="async"
              alt="Student Competition Trophies"
              src="/student-tournament-trophies.webp"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-left flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-brand-lime" />
              <span className="font-mono text-[10px] tracking-wider text-white uppercase bg-black/60 px-2 py-0.5">
                STUDENT TOURNAMENT TROPHIES
              </span>
            </div>
          </div>

          <div className="relative aspect-square bg-[#080B12] overflow-hidden group">
            <img loading="lazy" decoding="async"
              alt="Tournament Podium Students"
              src="/jacobo-coaching-student.webp"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-left flex items-center space-x-2">
              <Medal className="w-4 h-4 text-brand-lime" />
              <span className="font-mono text-[10px] tracking-wider text-white uppercase bg-black/60 px-2 py-0.5">
                TOURNAMENT CHAMPIONS PODIUM
              </span>
            </div>
          </div>

          <div className="relative aspect-square bg-[#080B12] overflow-hidden group">
            <img loading="lazy" decoding="async"
              alt="Medal collection"
              src="/career-medals.webp"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-left flex items-center space-x-2">
              <Star className="w-4 h-4 text-brand-lime" />
              <span className="font-mono text-[10px] tracking-wider text-white uppercase bg-black/60 px-2 py-0.5">
                CAREER MEDALS & RANKS
              </span>
            </div>
          </div>
        </div>

        {/* 2 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-4">
          {TESTIMONIALS.slice(0, 2).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-brand-bg border-l-3 border-brand-lime p-8 flex flex-col justify-between space-y-6 shadow-xl relative"
            >
              <div className="flex items-center space-x-1 text-brand-lime">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-lime text-brand-lime" />
                ))}
              </div>

              <blockquote className="text-lg text-white font-sans font-light italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center space-x-4 border-t border-brand-border pt-4">
                {testimonial.avatarUrl ? (
                  <img
                    loading="lazy"
                    decoding="async"
                    alt={testimonial.name}
                    src={testimonial.avatarUrl}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 object-cover grayscale border border-brand-border hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="w-12 h-12 border border-brand-border shrink-0" />
                )}
                <div>
                  <div className="font-display font-bold text-white text-base tracking-wider uppercase">
                    {testimonial.name}
                  </div>
                  <div className="font-mono text-[10px] text-brand-muted uppercase flex items-center space-x-2 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-lime" />
                    <span>{testimonial.level} · {testimonial.country}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
