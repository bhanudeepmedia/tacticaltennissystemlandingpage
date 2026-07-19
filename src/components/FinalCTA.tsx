/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Lock, CheckCircle2, Shield, Calendar, Users } from 'lucide-react';

interface FinalCTAProps {
  onJoinClick: () => void;
}

export default function FinalCTA({ onJoinClick }: FinalCTAProps) {
  return (
    <section 
      id="final-cta-closing"
      className="bg-[#080B12] py-28 px-4 md:px-8 relative border-t border-brand-border text-center overflow-hidden"
    >
      {/* Cinematic lime radial overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 via-transparent to-transparent opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-lime/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10 flex flex-col items-center">
        
        {/* Gold Badge */}
        <span className="text-xs font-mono tracking-widest text-[#D4AF37] bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-4.5 py-1.5 uppercase block font-bold">
          YOUR GAME STARTS HERE
        </span>

        {/* Headline Mixed Styles */}
        <h3 className="text-4xl md:text-7xl font-display font-black tracking-tight uppercase leading-[0.9] max-w-3xl">
          <span className="text-white italic block">THE SERVE IS WHERE</span>
          <span className="text-outline italic block mt-1">EVERY POINT BEGINS.</span>
          <span className="text-brand-lime block italic font-extrabold mt-1">START THERE.</span>
        </h3>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-[#B2BAC7] font-sans font-extralight tracking-wide italic">
          *Build everything from the first shot. Rule the court before your opponent reactions trigger.*
        </p>

        {/* Action button */}
        <div className="w-full max-w-md pt-4 space-y-3">
          <button
            id="final-closing-enroll-action"
            onClick={onJoinClick}
            className="w-full bg-brand-lime hover:bg-white text-black font-display font-extrabold text-base md:text-xl py-4.5 uppercase tracking-widest transition-all duration-300 shadow-[0_12px_40px_rgb(200,241,53,0.3)] flex items-center justify-center space-x-3 cursor-pointer border-0"
          >
            <span>JOIN ELITE SERVE PATTERNS — $99</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </button>
          
          <p className="text-[10px] font-mono text-brand-muted tracking-widest uppercase">
            6 months full access · All levels · Full blueprint library · launch pricing only
          </p>
        </div>

        {/* Trust strip at bottom */}
        <div className="border-t border-brand-border/60 pt-8 mt-4 w-full">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] md:text-xs font-mono tracking-widest text-brand-muted uppercase">
            <div className="flex items-center space-x-1">
              <Lock className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-white">SECURE PAYMENT</span>
            </div>
            <span className="text-brand-border select-none">/</span>
            <div className="flex items-center space-x-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-white">INSTANT ACCESS</span>
            </div>
            <span className="text-brand-border select-none">/</span>
            <div className="flex items-center space-x-1">
              <Shield className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-white">ALL TENNIS LEVELS</span>
            </div>
            <span className="text-brand-border select-none">/</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-brand-lime" />
              <span className="text-white">12 LIVE CALLS</span>
            </div>
            <span className="text-brand-border select-none">/</span>
            <div className="flex items-center space-x-1">
              <span className="text-brand-lime">⏱</span>
              <span className="text-white">LAUNCH PRICE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
