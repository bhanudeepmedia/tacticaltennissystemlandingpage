/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import YouTubeFacade from './YouTubeFacade';

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section 
      id="hero-viewport"
      className="relative min-h-screen bg-brand-bg pt-20 md:pt-28 pb-10 md:pb-16 px-4 md:px-8 flex flex-col justify-between overflow-hidden court-lines-bg"
    >
      {/* Immersive High Density Diagonal Grid Backdrop */}
      <div className="absolute inset-0 diagonal-grid pointer-events-none" />

      {/* Decorative Diagonal Green Beam in background */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[700px] bg-brand-lime/5 blur-[180px] pointer-events-none transform -skew-x-12" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[500px] bg-brand-lime/3 blur-[150px] pointer-events-none transform skew-x-12" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center my-auto relative z-10">
        
        {/* Left Column Text Content */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6 text-left">
          {/* Phase Pill in High Density Style */}
          <div className="inline-block bg-[#0D1220] border-l-4 border-brand-lime px-4 py-1.5 shadow-md">
            <span className="green-caps">PHASE 1 — THE TACTICAL TENNIS SYSTEM</span>
          </div>

          {/* Mixed Solid / Ghost Headline */}
          <h1 className="headline-italic text-5xl md:text-7xl xl:text-[80px] tracking-tight text-white mb-6">
            THE FIRST SHOT<br/>
            <span className="text-outline my-0.5 block">OF EVERY POINT</span>
            <span className="text-brand-lime block">DECIDES EVERYTHING.</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-white text-base md:text-lg tracking-normal font-light max-w-xl leading-relaxed">
            The serve is where every point begins. Master the physics-free strategic patterns that command instant errors. Own every match.
          </p>

          {/* Action Blocks */}
          <div className="space-y-3 pt-2">
            <button
              id="hero-enroll-action"
              onClick={onJoinClick}
              className="w-full sm:w-auto sharp-btn flex items-center justify-center space-x-3 hover:opacity-90 transform hover:-translate-y-0.5 transition-all shadow-[0_8px_30px_rgb(200,241,53,0.3)] hover:shadow-[0_8px_40px_rgb(200,241,53,0.5)]"
            >
              <span>CLAIM $99 LAUNCH OFFER NOW</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
            
            <p className="text-[11px] font-mono tracking-wider flex flex-col md:flex-row md:items-center md:space-x-2">
              <span className="text-white bg-red-600 px-1.5 py-0.5 rounded-sm font-bold uppercase inline-block w-max mb-1 md:mb-0">CLOSING SOON</span>
              <span className="text-brand-muted">
                Regular price: <span className="line-through text-white/50">$199</span> · Limited launch discount
              </span>
            </p>
          </div>
        </div>

        {/* Right Column VSL Video block */}
        <div className="lg:col-span-12 xl:col-span-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] md:text-xs font-mono tracking-wider text-brand-lime uppercase px-1">
              <span>WATCH THIS VIDEO BEFORE READING THE WEBSITE</span>
              <span className="animate-pulse">● LIVE AUDIO BLUEPRINT</span>
            </div>

            {/* VSL Block */}
            <div
              id="vsl-video-player"
              className="relative aspect-video bg-brand-surface border-2 border-brand-lime overflow-hidden shadow-2xl"
            >
              <YouTubeFacade videoId="O0mLC9DYdWY" title="Elite Serve Patterns VSL" />
            </div>
          </div>
        </div>

      </div>

      {/* Trust Items Horizontal Strip at bottom */}
      <div className="max-w-7xl mx-auto w-full border-t border-brand-border pt-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            '20+ YEARS COACHING',
            'ALL LEVELS WELCOME',
            'INSTANT ACCESS',
            '12 LIVE CALLS INCLUDED'
          ].map((item, idx, array) => (
            <div 
              key={item} 
              className="flex items-center justify-center space-x-2 md:space-x-4 text-[11px] font-mono tracking-widest text-[#B2BAC7]"
            >
              <span className="text-brand-lime font-bold">/</span>
              <span className="uppercase text-white font-medium">{item}</span>
              {idx === array.length - 1 && <span className="text-brand-lime font-bold">/</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
