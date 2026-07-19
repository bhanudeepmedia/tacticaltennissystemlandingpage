/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AlertCircle, TrendingDown, RefreshCw, XCircle, CheckCircle2 } from 'lucide-react';

export default function TheProblem() {
  return (
    <section 
      id="problem-viewport"
      className="bg-brand-bg py-10 md:py-20 px-4 md:px-8 border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="space-y-4 text-left">
          <span className="text-xs font-mono tracking-widest text-brand-lime uppercase block">
            THE PROBLEM
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase">
            <span className="text-white italic block">YOUR SERVE BREAKS DOWN</span>
            <span className="text-outline italic block mt-1">WHEN IT MATTERS MOST.</span>
          </h2>
        </div>

        {/* 3 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-brand-surface border-t-2 border-brand-lime p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand-muted tracking-widest">MISTAKE 01</span>
              <span className="text-red-500 font-mono text-xs">[FATAL]</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold italic text-white uppercase">
                DOUBLE FAULTS
              </h3>
              <p className="text-sm font-sans italic text-brand-muted">
                On the biggest points. Up 40-30 or during tiebreaks.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-surface border-t-2 border-brand-lime p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand-muted tracking-widest">MISTAKE 02</span>
              <span className="text-red-500 font-mono text-xs">[FATAL]</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold italic text-white uppercase">
                CONFIDENCE DROPS
              </h3>
              <p className="text-sm font-sans italic text-brand-muted">
                Under real competitive pressure. Second serve becomes a cautious push.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-surface border-t-2 border-brand-lime p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand-muted tracking-widest">MISTAKE 03</span>
              <span className="text-red-500 font-mono text-xs">[FATAL]</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold italic text-white uppercase">
                SAME MISTAKES
              </h3>
              <p className="text-sm font-sans italic text-brand-muted">
                Year after year. Practicing blocks but choking in tournament sets.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Tinted Contrast Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* Card Left - Red Tinted */}
          <div className="bg-red-950/15 border border-red-900/30 p-8 md:p-10 text-left space-y-4">
            <div className="flex items-center space-x-3 text-red-500">
              <span className="h-px w-6 bg-red-500" />
              <span className="text-xs font-mono tracking-widest uppercase">WHAT YOU WERE TAUGHT</span>
            </div>
            <h4 className="text-3xl font-display font-bold italic text-white uppercase leading-none">
              MECHANICS ONLY.
            </h4>
            <ul className="space-y-2 text-sm text-[#B2BAC7] font-sans">
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mr-2">✕</span>
                <span>Endless focus on elbow angles and wrist snap formulas.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mr-2">✕</span>
                <span>'Just hit the ball inside.' No directional follow-up.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-500 mr-2">✕</span>
                <span>Hope for the best. Reactive defense playstyles.</span>
              </li>
            </ul>
          </div>

          {/* Card Right - Green Tinted */}
          <div className="bg-brand-lime/5 border border-brand-lime/20 p-8 md:p-10 text-left space-y-4">
            <div className="flex items-center space-x-3 text-brand-lime">
              <span className="h-px w-6 bg-brand-lime" />
              <span className="text-xs font-mono tracking-widest uppercase">WHAT ELITE PLAYERS KNOW</span>
            </div>
            <h4 className="text-3xl font-display font-bold italic text-white uppercase leading-none">
              TACTICAL INTELLIGENCE.
            </h4>
            <ul className="space-y-2 text-sm text-white font-sans">
              <li className="flex items-start space-x-2">
                <span className="text-brand-lime mr-2">✓</span>
                <span className="font-semibold">The serve is an offensive chess opener.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-lime mr-2">✓</span>
                <span>Precise server patterns that force predictable backhands.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-brand-lime mr-2">✓</span>
                <span className="font-semibold">Controlling the entire point sequence before striking.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Large Centered Bebas Bold Italic Headline */}
        <div className="text-center py-6">
          <h3 className="text-3xl md:text-5xl font-display font-black italic text-brand-lime uppercase tracking-widest leading-none">
            THIS IS AN INTELLIGENCE PROBLEM.
          </h3>
        </div>

        {/* Editorial B&W Photo block */}
        <div className="relative border border-brand-border bg-brand-surface aspect-[21/9] overflow-hidden group">
          <img
            alt="Frustrated Tennis Player Moody Court"
            src="/this-is-an-intelligent-problem.jpg"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top brightness-90 group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
          
          {/* Overlay Text Element */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left space-y-1.5 z-20">
            <span className="text-[10px] font-mono tracking-widest text-brand-lime uppercase bg-black/60 px-2 py-1">
              EDITORIAL STUDY · TOURNAMENT REELS
            </span>
            <p className="text-sm text-white italic max-w-sm font-sans font-light">
              Under pressure, high mechanical complexity fails. Simple tactical patterns succeed.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('nav-join-button')?.click()}
            className="w-full sm:w-auto bg-brand-surface hover:bg-white text-brand-lime hover:text-black border border-brand-lime font-display font-extrabold text-base py-4 px-10 uppercase tracking-widest transition-all duration-300 cursor-pointer"
          >
            SOLVE THIS PROBLEM TODAY
          </button>
        </div>

      </div>
    </section>
  );
}
