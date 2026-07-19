/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Award, Globe, Navigation, Target, Activity } from 'lucide-react';

export default function ProgramIntro() {
  const [underlineWidth, setUnderlineWidth] = useState('w-0');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setUnderlineWidth('w-56 md:w-96');
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
      id="program-introduction"
      className="bg-brand-bg py-24 px-4 md:px-8 relative border-b border-brand-border court-lines-bg text-center"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Intro Pill & Headlines */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="bg-brand-surface border border-brand-lime/20 px-4 py-1 text-xs font-mono text-brand-lime uppercase tracking-widest leading-none">
            INTRODUCING THE TACTICAL Blueprints
          </div>
          
          <h2 className="text-4xl md:text-7xl font-display font-black tracking-tight uppercase max-w-4xl leading-tight">
            <span className="text-white italic">THE TACTICAL </span>
            <span className="text-outline italic">TENNIS SYSTEM</span>
          </h2>
          
          <div className="text-2xl md:text-[32px] font-display font-bold text-brand-lime uppercase tracking-wider">
            PHASE 1: ELITE SERVE PATTERNS
          </div>

          {/* Sweeping Underline on Scroll */}
          <div className={`h-1 bg-brand-lime mt-2 transition-all duration-1000 ${underlineWidth}`} />
        </div>

        {/* 3-Column Core Value Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left bg-brand-surface/40 p-8 border border-brand-border px-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-brand-lime">
              <Award className="w-6 h-6" />
              <h3 className="font-display font-bold text-xl tracking-wider text-white uppercase">
                PROFESSIONAL
              </h3>
            </div>
            <p className="text-sm text-brand-muted font-mono uppercase pl-9 leading-snug">
              / Coaching-level strategic curriculum
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-brand-lime">
              <Globe className="w-6 h-6" />
              <h3 className="font-display font-bold text-xl tracking-wider text-white uppercase">
                ANY LEVEL
              </h3>
            </div>
            <p className="text-sm text-brand-muted font-mono uppercase pl-9 leading-snug">
              / Beginner to advanced competitors
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-brand-lime font-mono">
              <Navigation className="w-6 h-6" />
              <h3 className="font-display font-bold text-xl tracking-wider text-white uppercase">
                ANYWHERE
              </h3>
            </div>
            <p className="text-sm text-brand-muted font-mono uppercase pl-9 leading-snug">
              / Study and drill on any court worldwide
            </p>
          </div>
        </div>

        {/* Large Centered Core Statement */}
        <div className="py-6">
          <h3 className="text-4xl md:text-6xl font-display font-black italic uppercase tracking-tight">
            <span className="text-white">WE START WITH THE </span>
            <span className="text-brand-lime">SERVE.</span>
          </h3>
        </div>

        {/* 3 Bold Fact Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
          <div className="space-y-2 border-l border-brand-border pl-6">
            <div className="text-4xl md:text-5xl font-display font-black text-brand-lime leading-none">
              #1
            </div>
            <div className="font-display font-bold text-white text-lg uppercase">
              SHOT IN TENNIS
            </div>
            <p className="text-sm text-brand-muted font-sans font-light italic">
              *Opens every single point. Sets up the tactical flow immediately.*
            </p>
          </div>

          <div className="space-y-2 border-l border-brand-border pl-6">
            <div className="text-4xl md:text-5xl font-display font-black text-brand-lime leading-none">
              100%
            </div>
            <div className="font-display font-bold text-white text-lg uppercase">
              YOUR CONTROL
            </div>
            <p className="text-sm text-brand-muted font-sans font-light italic">
              *No opponent reaction to calculate. No windup. Just your target.*
            </p>
          </div>

          <div className="space-y-2 border-l border-brand-border pl-6">
            <div className="text-4xl md:text-5xl font-display font-black text-brand-lime leading-none">
              0
            </div>
            <div className="font-display font-bold text-white text-lg uppercase">
              OTHER PROGRAMS
            </div>
            <p className="text-sm text-brand-muted font-sans font-light italic">
              *Show you actual verified professional tour match configurations.*
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
