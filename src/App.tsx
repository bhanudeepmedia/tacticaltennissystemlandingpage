/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Mail, ShieldAlert, CheckCircle2, Lock, ArrowUp } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import TheProblem from './components/TheProblem';
import ProofStrip from './components/ProofStrip';
import ProgramIntro from './components/ProgramIntro';
import WhatsInside from './components/WhatsInside';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import WhoIsThisFor from './components/WhoIsThisFor';
import AboutJacobo from './components/AboutJacobo';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import InsideAthletePortal from './components/InsideAthletePortal';
import { TESTIMONIALS } from './data';

const CHECKOUT_URL = 'https://whop.com/checkout/plan_pRLiHuKDuHdIs';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [athleteEmail, setAthleteEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  // Global Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: stop observing once revealed
          // observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleJoinClick = () => {
    if (isUnlocked) {
      handleNavigate('athlete-portal');
    } else {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const handleBypassUnlock = () => {
    setAthleteEmail('ATHLETE.PREVIEW@ELITESERVE.COM');
    setIsUnlocked(true);
    setShowNotification(true);
    setTimeout(() => {
      handleNavigate('athlete-portal');
    }, 500);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    setAthleteEmail('');
    handleNavigate('home');
  };

  return (
    <div className="bg-[#080B12] min-h-screen font-sans text-white select-none">
      
      {/* Toast alert on success */}
      {showNotification && (
        <div className="fixed top-24 right-4 md:right-8 z-50 bg-brand-surface border-l-4 border-brand-lime p-4 shadow-2xl flex items-center space-x-3 text-left">
          <CheckCircle2 className="w-6 h-6 text-brand-lime" />
          <div>
            <div className="text-xs font-mono text-brand-lime uppercase tracking-widest font-semibold">
              UNLOCKED ACCESS ACTIVE
            </div>
            <p className="text-xs text-white font-sans">
              Welcome to the Tactical Vault. Program modules are now active.
            </p>
          </div>
        </div>
      )}

      {/* 1. NAVIGATION HIGHLIGHTS */}
      <Navigation 
        onJoinClick={handleJoinClick} 
        onNavigate={handleNavigate}
        isUnlocked={isUnlocked}
        onUnlockSimulate={handleBypassUnlock}
      />

      {/* 2. HERO SECTION */}
      <div id="home">
        <Hero onJoinClick={handleJoinClick} />
      </div>

      {/* 3. FIRST SCROLLING MARQUEE STRIP */}
      <MarqueeStrip 
        items={[
          'NATIONAL CHAMPIONS', 
          'TOURNAMENT WINNERS', 
          'BEGINNER TO PRO', 
          'REAL TOURNAMENT FOOTAGE', 
          'DIRECT ACCESS TO JACOBO', 
          '20+ YEARS ELITE COACHING', 
          'ALL LEVELS WELCOME', 
          '12 LIVE CALLS'
        ]} 
        speed="fast"
      />

      {/* ATHLETE PREVIEW PORTAL SCREEN: Appended dynamically upon unlocking */}
      {isUnlocked && (
        <div id="athlete-portal" className="border-t-4 border-brand-lime">
          <InsideAthletePortal athleteEmail={athleteEmail} onLogout={handleLogout} />
        </div>
      )}

      {/* 7. WHAT'S INSIDE THE COMPLETE TACTICAL SYSTEM BUNDLE */}
      <div className="reveal-on-scroll">
        <WhatsInside />
      </div>

      {/* 8. ATHLETE TESTIMONIAL REELS */}
      <div className="reveal-on-scroll from-left">
        <Testimonials />
      </div>

      {/* 10. PRICING BOARDS */}
      <div className="reveal-on-scroll from-right">
        <Pricing onJoinClick={handleJoinClick} />
      </div>

      {/* 12. ABOUT JACOBO */}
      <div className="reveal-on-scroll">
        <AboutJacobo />
      </div>

      {/* 4. THE Problem SECTION */}
      <div className="reveal-on-scroll from-left">
        <TheProblem />
      </div>

      {/* 5. PROOF STRIP 1 */}
      <div className="reveal-on-scroll from-right">
        <ProofStrip />
      </div>

      {/* 6. PROGRAM INTRODUCTION */}
      <div className="reveal-on-scroll">
        <ProgramIntro />
      </div>

      {/* 11. WHO IS THIS SECTION */}
      <div className="reveal-on-scroll from-left">
        <WhoIsThisFor />
      </div>

      {/* 13. FAQ ACCORDION BOARDS */}
      <div className="reveal-on-scroll">
        <FAQ />
      </div>

      {/* 14. FINAL CTA PANEL */}
      <div className="reveal-on-scroll from-right">
        <FinalCTA onJoinClick={handleJoinClick} />
      </div>

      {/* 15. FINAL PROOF — Last emotional push */}
      <section 
        id="final-emotional-push"
        className="bg-brand-bg py-20 px-4 md:px-8 border-t border-brand-border text-center"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Best student testimony video file */}
          <div className="border border-brand-lime bg-[#080B12] p-1 shadow-2xl">
            <div className="relative aspect-video bg-[#0c0e14] overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/O0mLC9DYdWY?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
                title="Elite Serve Patterns Final Testimony"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* 3 final compact testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-brand-surface p-6 border-l border-brand-lime">
              <div className="flex text-brand-lime mb-2"><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /></div>
              <p className="text-xs text-white italic font-sans font-light leading-relaxed">
                "Best tennis investment I've ever made. The shift in return patterns is immediate."
              </p>
              <p className="text-[9px] text-[#B2BAC7] font-mono uppercase mt-2">— SEAN P. · NTRP 4.5</p>
            </div>

            <div className="bg-brand-surface p-6 border-l border-brand-lime">
              <div className="flex text-brand-lime mb-2"><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /></div>
              <p className="text-xs text-white italic font-sans font-light leading-relaxed">
                "Jacobo is in a different category entirely. Most coaches can swing well; Jacobo teaches you how to win sets."
              </p>
              <p className="text-[9px] text-[#B2BAC7] font-mono uppercase mt-2">— LILLY CHEN · ITF COMS</p>
            </div>

            <div className="bg-brand-surface p-6 border-l border-brand-lime">
              <div className="flex text-brand-lime mb-2"><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /><Star className="w-3.5 h-3.5 fill-brand-lime text-brand-lime" /></div>
              <p className="text-xs text-white italic font-sans font-light leading-relaxed">
                "I wish this existed when I started. Do not hesitate. This system clears the clutter."
              </p>
              <p className="text-[9px] text-[#B2BAC7] font-mono uppercase mt-2">— HARROLD S. · SENIOR COMP</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECOND SCROLLING MARQUEE STRIP (Different content) */}
      <MarqueeStrip 
        items={[
          'SERVE TRANSFORMED', 
          'MATCH IQ ELEVATED', 
          'REAL COACHING', 
          'DIRECT ACCESS', 
          'BEGINNERS TO PROS', 
          'JOIN FOR $99'
        ]} 
        speed="reverse"
        bgTheme="default"
      />

      {/* 16. FOOTER */}
      <footer 
        id="app-footer"
        className="bg-[#080B12] text-brand-muted py-12 px-4 md:px-8 border-t border-brand-border font-mono text-[11px] text-left"
      >
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Left side box info */}
            <div className="flex items-center space-x-3">
              <div className="bg-brand-lime text-black font-display font-extrabold italic text-sm px-2.5 py-1.5 leading-none">
                JH
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white text-xs tracking-wider uppercase leading-none">
                  THE TACTICAL TENNIS SYSTEM
                </span>
                <span className="text-[9px] text-brand-lime tracking-widest uppercase mt-1 leading-none">
                  ELITE SERVE PATTERNS
                </span>
              </div>
            </div>

            {/* Center Phase info */}
            <div className="text-left md:text-center text-[#B2BAC7]">
              Phase 1 of The Tactical Tennis System
            </div>

            {/* Right side contact email */}
            <div className="flex items-center space-x-2 text-white">
              <Mail className="w-3.5 h-3.5 text-brand-lime" />
              <span>Contact: coach@jacobosystem.com</span>
            </div>

          </div>

          <div className="h-px bg-brand-border/60 w-full" />

          {/* Copyrights and Terms */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-brand-muted">
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-brand-lime transition-all">Privacy Policy</a>
              <span>·</span>
              <a href="#terms" className="hover:text-brand-lime transition-all">Terms of Use</a>
              <span>·</span>
              <a href="#refund" className="hover:text-brand-lime transition-all">Refund Policy</a>
            </div>
            <div className="text-left md:text-right space-y-1">
              <div>
                © {new Date().getFullYear()} Jacobo Hernandez — The Tactical Tennis System. All rights reserved.
              </div>
              <div className="text-[10px]">
                Designed & Developed by <a href="https://framenflowmedia.in/" target="_blank" rel="noopener noreferrer" className="text-brand-lime hover:text-white transition-all font-medium">Frame n Flow Media</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
