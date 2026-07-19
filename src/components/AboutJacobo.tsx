/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Shield, Trophy, Globe, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function AboutJacobo() {
  return (
    <section 
      id="about"
      className="bg-brand-bg py-24 px-4 md:px-8 border-b border-brand-border text-left relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Two Column Layout (Left Full height photo, Right Copy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Full aspect Photo of Coach Jacobo */}
          <div className="lg:col-span-5 relative aspect-[3/4] bg-brand-surface border border-brand-border overflow-hidden">
            <img loading="lazy" decoding="async"
              alt="Jacobo Hernandez Head Coach"
              src="/jacobo-main-picture.webp"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-6 left-6 space-y-1 z-20">
              <span className="text-[10px] text-brand-lime font-mono uppercase bg-black px-2 py-0.5">
                HEADMASTER DIRECTORS
              </span>
              <h4 className="text-xl md:text-2xl font-display font-black italic uppercase tracking-wider text-white">
                JACOBO HERNANDEZ
              </h4>
              <p className="text-xs text-brand-lime font-mono uppercase">
                Phase 1 Author · Founder
              </p>
            </div>
          </div>

          {/* Right Column: Bio Copies */}
          <div className="lg:col-span-7 space-y-6">
            
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase block font-bold">
              THE COACH
            </span>

            {/* Mixed solid outline headlines */}
            <h3 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase leading-none">
              <span className="text-white block italic">20 YEARS.</span>
              <span className="text-outline block italic mt-1">ONE MISSION.</span>
            </h3>

            {/* 3 cards — dark surface, green left border, sharp */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-brand-surface border-l-2 border-brand-lime p-5 space-y-1">
                <span className="font-display font-extrabold text-brand-lime text-xl block uppercase">
                  🎾 20+ YEARS
                </span>
                <p className="text-[11px] text-brand-muted font-sans font-light">
                  Competing and coaching tennis players.
                </p>
              </div>

              <div className="bg-brand-surface border-l-2 border-brand-lime p-5 space-y-1">
                <span className="font-display font-extrabold text-brand-lime text-xl block uppercase">
                  🌍 GLOBAL
                </span>
                <p className="text-[11px] text-brand-muted font-sans font-light">
                  Athletes trained across multiple countries.
                </p>
              </div>

              <div className="bg-brand-surface border-l-2 border-brand-lime p-5 space-y-1">
                <span className="font-display font-extrabold text-brand-lime text-xl block uppercase">
                  🏆 ALL LEVELS
                </span>
                <p className="text-[11px] text-brand-muted font-sans font-light">
                  First serve straight to tournament champion level.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="relative p-6 bg-brand-surface/40 border border-brand-border/60 flex items-start space-x-4 mt-6">
              <Quote className="w-8 h-8 text-brand-lime shrink-0 transform scale-x-[-1]" />
              <div className="space-y-2">
                <p className="italic text-base text-white font-sans font-light leading-relaxed">
                  "I built this because every serious player deserves access to what I've spent 20 years learning on real courts under match stress."
                </p>
                <div className="text-xs font-mono text-brand-lime tracking-wider uppercase">
                  — Jacobo Hernandez
                </div>
              </div>
            </div>

            {/* Credentials Badges - Sharp pill shapes, green outline */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-widest block font-bold">
                LICENSES & CERTIFIED ACCREDITATIONS
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="border border-brand-lime/40 text-brand-lime font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 bg-brand-lime/5">
                  ITF CERTIFIED LEVEL-3
                </span>
                <span className="border border-brand-lime/40 text-brand-lime font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 bg-brand-lime/5">
                  ELITE TOUR PERFORMANCE
                </span>
                <span className="border border-brand-lime/40 text-brand-lime font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 bg-brand-lime/5">
                  USTA REGIONAL SPECIALIST
                </span>
                <span className="border border-brand-lime/40 text-brand-lime font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 bg-brand-lime/5">
                  PRO MATCH RECOGNITION
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Image rows - Coach with student, receiving recognition, competitive historical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="relative aspect-video bg-brand-surface border border-brand-border overflow-hidden">
            <img loading="lazy" decoding="async"
              alt="Jacobo with student at tour stage"
              src="/jacobo-coaching-student.webp"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-2.5 left-2.5 font-mono text-[8px] text-brand-lime uppercase bg-black px-2 py-0.5">
              PRO TOUR DELEGATE STAGE
            </span>
          </div>

          <div className="relative aspect-video bg-brand-surface border border-brand-border overflow-hidden">
            <img loading="lazy" decoding="async"
              alt="Coaching Recognition ceremony"
              src="/jacobo-on-court.webp"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_45%] transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-2.5 left-2.5 font-mono text-[8px] text-brand-lime uppercase bg-black px-2 py-0.5">
              COACHING EXCELLENCE PODIUM
            </span>
          </div>

          <div className="relative aspect-video bg-brand-surface border border-brand-border overflow-hidden">
            <img loading="lazy" decoding="async"
              alt="Historical competing picture"
              src="/jacobo-action.webp"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_18%] transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-2.5 left-2.5 font-mono text-[8px] text-brand-lime uppercase bg-black px-2 py-0.5">
              HISTORIC COMPETING HIGHLIGHTS
            </span>
          </div>
        </div>



        {/* 2 Compact Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left pt-4">
          <div className="bg-brand-surface border border-brand-border p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="flex text-brand-lime">
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
            </div>
            <p className="text-xs md:text-sm text-white italic font-sans font-light">
              "He took me from picking up a racket to competing in my first local tournament in under a year. His training guidelines are insanely practical."
            </p>
            <div className="text-[10px] text-brand-muted font-mono uppercase">
              — {TESTIMONIALS[7].name} · TAIWAN
            </div>
          </div>

          <div className="bg-brand-surface border border-brand-border p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="flex text-brand-lime">
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
              <Star className="w-3.5 h-3.5 fill-brand-lime" />
            </div>
            <p className="text-xs md:text-sm text-white italic font-sans font-light">
              "My daughter is now national junior level. There is literally no version of that outcome without Coach Jacobo's zone target formulas."
            </p>
            <div className="text-[10px] text-brand-muted font-mono uppercase">
              — {TESTIMONIALS[8].name} · USA
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
