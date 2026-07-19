/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check, ShieldCheck, CreditCard, Lock } from 'lucide-react';

interface PricingProps {
  onJoinClick: () => void;
}

const VALUE_STACK = [
  { icon: '🎓', label: 'Strategy Breakdown Course', value: 197 },
  { icon: '🎥', label: 'Pro Player Pattern Breakdowns', value: 297 },
  { icon: '🎾', label: 'Live Coaching Footage — ongoing', value: 197 },
  { icon: '💬', label: 'Private Community — 6 months', value: 97 },
  { icon: '🏆', label: 'Direct Q&A with Jacobo', value: 197 },
  { icon: '📞', label: '12 Live Group Calls with Jacobo', value: 597 }
];

export default function Pricing({ onJoinClick }: PricingProps) {
  const totalValue = VALUE_STACK.reduce((sum, item) => sum + item.value, 0);

  return (
    <section 
      id="pricing-viewport"
      className="bg-brand-bg py-10 md:py-24 px-4 md:px-8 border-b border-brand-border"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Title Tagline */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono tracking-widest text-brand-lime uppercase block">
            EVERYTHING YOU GET
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase italic text-white leading-none">
            ONE PRICE. <span className="text-brand-lime">SIX MONTHS.</span>
          </h2>
        </div>

        {/* Value Stack rows */}
        <div className="bg-brand-surface border border-brand-border p-6 md:p-8 space-y-4 shadow-2xl text-left">
          <div className="space-y-3">
            {VALUE_STACK.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-900/50 backdrop-blur-md border border-brand-border hover:border-brand-lime/50 transition-colors shadow-lg rounded-sm"
              >
                <div className="flex items-center space-x-3 text-sm md:text-base">
                  <div className="w-5 h-5 bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-center shrink-0 rounded-full">
                    <Check className="w-3 h-3 text-brand-lime font-bold" />
                  </div>
                  <span className="text-[#B2BAC7] font-mono mr-2 text-xs md:text-sm">{item.icon}</span>
                  <span className="text-white font-medium tracking-wide text-xs md:text-sm">{item.label}</span>
                </div>
                <div className="font-mono text-white/50 text-xs md:text-sm font-bold">
                  ${item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Divider and Total Sum computation */}
          <div className="border-t border-brand-border/80 pt-6 mt-6 flex flex-col items-center text-center sm:flex-row sm:items-end sm:text-left sm:justify-between gap-4">
            <div className="font-mono">
              <div className="text-brand-muted text-[10px] sm:text-xs tracking-wider uppercase">AGGREGATE SYSTEM ESTIMATION</div>
              <div className="text-brand-lime text-sm sm:text-base font-bold uppercase mt-1">Total Real Program value</div>
            </div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold italic text-white line-through opacity-80 decoration-red-500">
              ${totalValue}.00
            </div>
          </div>
        </div>

        {/* Massive Centered Pricing Pitch */}
        <div className="bg-brand-surface/40 p-8 border border-brand-border text-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-brand-muted tracking-widest block uppercase">
              LAUNCH PREMIERE INVITATION
            </span>
            <div className="text-4xl md:text-6xl font-display font-black tracking-tight flex items-center justify-center space-x-4">
              <span className="text-brand-muted line-through text-2xl md:text-4xl italic mr-2">
                $199
              </span>
              <span className="text-brand-lime italic font-black text-5xl md:text-7xl">
                $99
              </span>
            </div>
            <span className="text-xs text-brand-lime font-mono tracking-wider block uppercase">
              *Full Launch pricing only. Will return to $199 when launch registration closing cycle passes.*
            </span>
          </div>

          <div className="space-y-3 max-w-lg mx-auto w-full">
            <button
              id="pricing-checkout-action"
              onClick={onJoinClick}
              className="w-full bg-brand-lime hover:bg-white text-black font-display font-extrabold text-base md:text-lg py-5 uppercase tracking-widest transition-all duration-300 shadow-[0_8px_30px_rgb(200,241,53,0.3)] hover:shadow-[0_8px_40px_rgb(200,241,53,0.5)] cursor-pointer border-0 rounded-none transform hover:-translate-y-1"
            >
              CLAIM $99 LAUNCH OFFER NOW
            </button>
            <p className="text-[10px] font-mono text-brand-muted tracking-widest uppercase">
              Instant access · All development levels · 6 months · Secure checkout ssl encryption
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
