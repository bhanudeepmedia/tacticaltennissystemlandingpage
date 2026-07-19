/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, TrendingUp, Award, Users, Lightbulb, UsersRound } from 'lucide-react';

export default function WhoIsThisFor() {
  return (
    <section 
      id="who-is-this-for"
      className="bg-brand-bg py-24 px-4 md:px-8 border-b border-brand-border"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Tagline */}
        <div className="space-y-4 text-left">
          <span className="text-xs font-mono tracking-widest text-brand-lime uppercase block">
            IS THIS FOR YOU?
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase italic text-white leading-none">
            THIS PROGRAM IS FOR YOU IF…
          </h2>
        </div>

        {/* 5 cards — 2 column grid — dark surface, sharp corners, lime green left border */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          <div className="bg-brand-surface border-l-3 border-brand-lime p-6 text-left flex items-start space-x-4">
            <Target className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                🎾 COMPLETE BEGINNER
              </h4>
              <p className="text-xs text-brand-muted font-sans font-light">
                Start the right way from day one. Avoid building critical biomechanical errors that hold back future tennis capabilities.
              </p>
            </div>
          </div>

          <div className="bg-brand-surface border-l-3 border-brand-lime p-6 text-left flex items-start space-x-4">
            <TrendingUp className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                📈 INTERMEDIATE PLAYER
              </h4>
              <p className="text-xs text-brand-muted font-sans font-light">
                Break through the serving ceiling. Transition from pushing balls inside to launching deep offensive first strikes.
              </p>
            </div>
          </div>

          <div className="bg-brand-surface border-l-3 border-brand-lime p-6 text-left flex items-start space-x-4">
            <Award className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                🏆 COMPETITIVE PLAYER
              </h4>
              <p className="text-xs text-brand-muted font-sans font-light">
                Close the gap to the next seed level. Use professional tour patterns to anticipate opponents weak sides and close sets.
              </p>
            </div>
          </div>

          <div className="bg-brand-surface border-l-3 border-brand-lime p-6 text-left flex items-start space-x-4">
            <Users className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                👨👧 TENNIS PARENT
              </h4>
              <p className="text-xs text-brand-muted font-sans font-light">
                Secure elite coaching. Provide your child with the exact competitive intelligence Jacobo uses with junior national candidates.
              </p>
            </div>
          </div>

          {/* Span full-width onlg layout to make it balanced, or keep standard grid */}
          <div className="bg-brand-surface border-l-3 border-brand-lime p-6 text-left flex items-start space-x-4 lg:col-span-2">
            <Lightbulb className="w-5 h-5 text-brand-lime shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                💡 ANY SERIOUS PLAYER
              </h4>
              <p className="text-xs text-brand-muted font-sans font-light">
                Understand the tactical chess of tennis. Don't just react and run—dictate the geometry on court today.
              </p>
            </div>
          </div>

        </div>

        {/* Centered Large lime statement */}
        <div className="text-center py-4 border-y border-brand-border/60">
          <h3 className="text-2xl md:text-4xl font-display font-black italic text-brand-lime uppercase tracking-widest leading-none">
            IF YOU ARE SERIOUS ABOUT TENNIS — THIS WAS BUILT FOR YOU.
          </h3>
        </div>

        {/* Wide B&W Image Placeholder */}
        <div className="relative border border-brand-border bg-brand-surface aspect-video overflow-hidden group">
          <img loading="lazy" decoding="async"
            alt="The Complete Tactical Tennis System Banner"
            src="/tactical-tennis-thumbnail.webp"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-101"
          />
        </div>

      </div>
    </section>
  );
}
