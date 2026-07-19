/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onJoinClick: () => void;
  onNavigate: (sectionId: string) => void;
  isUnlocked: boolean;
  onUnlockSimulate: () => void;
}

export default function Navigation({
  onJoinClick,
  onNavigate,
  isUnlocked,
  onUnlockSimulate,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-brand-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center text-left focus:outline-none focus:ring-0 select-none group border-0 bg-transparent cursor-pointer"
        >
          <div className="flex flex-col">
            <span className="font-display font-black italic text-xl md:text-2xl tracking-tighter uppercase leading-none transition-transform duration-300 group-hover:scale-[1.02]">
              <span className="text-white">THE </span>
              <span className="text-brand-lime drop-shadow-[0_0_8px_rgba(200,241,53,0.3)]">TACTICAL</span>
              <span className="text-white"> TENNIS SYSTEM</span>
            </span>
          </div>
        </button>

        {/* Right Side Links & CTA */}
        <div className="flex items-center space-x-3 md:space-x-8">
          <ul className="hidden md:flex items-center space-x-6 text-[11px] font-mono tracking-widest text-[#B2BAC7]">
            <li>
              <button
                onClick={() => onNavigate(isUnlocked ? 'athlete-portal' : 'programs')}
                className="hover:text-brand-lime transition-colors uppercase border-0 bg-transparent cursor-pointer"
              >
                INSIDE
              </button>
            </li>
            <span className="text-brand-border select-none">·</span>
            <li>
              <button
                onClick={() => onNavigate('community')}
                className="hover:text-brand-lime transition-colors uppercase border-0 bg-transparent cursor-pointer"
              >
                COMMUNITY
              </button>
            </li>
            <span className="text-brand-border select-none">·</span>
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-brand-lime transition-colors uppercase border-0 bg-transparent cursor-pointer"
              >
                JACOBO
              </button>
            </li>
          </ul>

          <div className="flex items-center space-x-2">


            <button
              id="nav-join-button"
              onClick={onJoinClick}
              className={`font-display font-bold text-xs px-5 py-2.5 uppercase transition-all tracking-wider border-0 cursor-pointer ${
                isUnlocked
                  ? 'bg-brand-surface text-brand-lime border border-brand-lime/30'
                  : 'bg-brand-lime hover:bg-white text-black'
              }`}
            >
              {isUnlocked ? 'ATHLETE PORTAL ACCESS' : 'JOIN FOR $99'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
