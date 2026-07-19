/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Trophy, Video, Users, PhoneCall, Play, MessageSquare, Mic, Video as VideoIcon, CheckCircle2, Layers } from 'lucide-react';

export default function WhatsInside() {
  return (
    <div className="bg-slate-950 flex flex-col w-full text-left overflow-hidden">
      
      {/* 
        ========================================
        GLOBAL HEADER
        ========================================
      */}
      <section id="programs" className="relative pt-32 pb-16 px-4 md:px-8 border-t border-slate-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#5C9400] to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm px-4 py-1.5 border border-slate-800/60 text-slate-300 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl">
            <Layers className="w-4 h-4 text-[#5C9400]" />
            <span>THE COMPLETE TACTICAL TENNIS SYSTEM BUNDLE</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase italic text-white leading-[0.9] drop-shadow-lg">
            HOW THE COURSE <br /> IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5C9400] to-[#D4AF37] pr-2 pb-2">STRUCTURED</span>
          </h2>
          <p className="text-base md:text-xl text-slate-400 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            A complete 3-part ecosystem designed to give you match dominance. Not just a course—a full feedback loop.
          </p>
        </div>
      </section>

      {/* 
        ========================================
        PART 1: CORE CURRICULUM (ZIGZAG LAYOUT)
        ========================================
      */}
      <section className="relative py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono text-[#5C9400] font-bold uppercase tracking-widest block">
              PART 1 — CORE CURRICULUM
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-black italic text-white uppercase tracking-tight">
              1 COURSE · 3 VIDEO MODULES
            </h3>
          </div>

          {/* Module 1: Strategy (Text Left, Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-[#5C9400]/10 border border-[#5C9400]/20 px-3 py-1 rounded-full">
                <BookOpen className="w-4 h-4 text-[#5C9400]" />
                <span className="text-[10px] font-mono text-[#5C9400] font-bold uppercase tracking-widest">MODULE 01</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-display font-black italic text-white uppercase leading-tight">
                COURT GEOMETRY <br className="hidden md:block" /> MASTERCLASS
              </h4>
              <p className="text-lg text-slate-400 font-sans leading-relaxed">
                Learn the exact science of where and how the serve needs to go. We map out impact target channels to command the geometry of the court. Core serve geometry and targets explained via detailed presentation guides.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                {['Tactical decisions', 'Pressure solutions', 'Serve as weapon'].map((item) => (
                  <span key={item} className="text-slate-300 font-sans text-xs font-medium uppercase tracking-wider flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5C9400] rounded-sm" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* Premium Visual: Court Geometry Image with Animated Line */}
              <div className="w-full h-[350px] md:aspect-[4/3] md:h-auto rounded-2xl shadow-2xl relative overflow-hidden group border-2 border-slate-800 hover:border-[#5C9400]/50 transition-colors duration-500">
                <img src="/jacobo-on-court.jpg" alt="Court Geometry" className="absolute inset-0 w-full h-full object-cover object-[center_35%] brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Animated Trajectory */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-lg" preserveAspectRatio="none" viewBox="0 0 400 300">
                  <path d="M 350 280 Q 200 150 50 100" fill="none" stroke="#5C9400" strokeWidth="3" strokeDasharray="6 6" className="animate-[dash_2s_linear_infinite]" />
                  <circle cx="50" cy="100" r="4" fill="white" className="animate-pulse shadow-[0_0_15px_white]" />
                </svg>
                
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[10px] text-white font-mono uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#5C9400] rounded-full animate-pulse" />
                  Target Zone Active
                </div>
              </div>
            </div>
          </div>

          {/* Module 2: Pro Patterns (Visual Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              {/* Visual Representation: Video Player Mockup */}
              <div className="aspect-[16/9] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl relative overflow-hidden group">
                {/* Background Image fallback */}
                <img src="/grand-slam-execution.png" alt="Pro Player Analysis" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700" onError={(e) => e.currentTarget.style.display = 'none'} />
                
                <div className="absolute inset-0 bg-slate-900/50" />
                
                {/* Video UI Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> REC
                    </span>
                    <span className="text-slate-300 font-mono text-xs">04:23 / 12:45</span>
                  </div>
                  
                  <div className="flex justify-center items-center h-full">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Scrubber */}
                  <div className="w-full space-y-2">
                    <div className="flex gap-2">
                      <div className="h-1 bg-[#D4AF37] w-1/3 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
                      </div>
                      <div className="h-1 bg-white/20 w-2/3 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-full">
                <Trophy className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase tracking-widest">MODULE 02</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-display font-black italic text-white uppercase leading-tight">
                GRAND SLAM EXECUTION <br className="hidden md:block" /> ANALYSIS
              </h4>
              <p className="text-lg text-slate-400 font-sans leading-relaxed">
                The ultimate proof of concept. We show pro players executing the exact same tactical serving channels under massive competitive Grand Slam pressure. Analyzed frame-by-frame by Jacobo.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                {['Pro target maps', 'Pressure trends', 'Split-second cues'].map((item) => (
                  <span key={item} className="text-slate-300 font-sans text-xs font-medium uppercase tracking-wider flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-sm" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Module 3: Live Coaching (Text Left, Visual Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-[#5C9400]/10 border border-[#5C9400]/20 px-3 py-1 rounded-full">
                <Video className="w-4 h-4 text-[#5C9400]" />
                <span className="text-[10px] font-mono text-[#5C9400] font-bold uppercase tracking-widest">MODULE 03</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-display font-black italic text-white uppercase leading-tight">
                ON-COURT COACHING <br className="hidden md:block" /> CLINIC
              </h4>
              <p className="text-lg text-slate-400 font-sans leading-relaxed">
                Jacobo films live training sessions on-court with actual club competitors. You see real-time biomechanical corrections and alignment drills in action. Real-world student training reels shot on-court.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                {['Real corrections', 'Audio callouts', 'Live cue system'].map((item) => (
                  <span key={item} className="text-slate-300 font-sans text-xs font-medium uppercase tracking-wider flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#5C9400] rounded-sm" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* Visual Representation: Clean Image Mockup */}
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 w-full h-full bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 group">
                  <img src="/this-is-an-intelligent-problem.jpg" alt="Coaching Session" className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white font-mono uppercase">
                    ON-COURT FEED
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================
        PART 2: MENTORSHIP COMMUNITY
        ========================================
      */}
      <section className="relative py-10 md:py-24 px-4 md:px-8 border-t border-slate-900 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Visual: Chat Interface Mockup */}
            <div className="relative w-full h-[400px] md:h-auto md:aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5C9400]/20 to-transparent rounded-[30px] md:rounded-[40px] blur-3xl opacity-50" />
              
              <div className="relative w-full h-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-4 md:p-6 flex flex-col space-y-4">
                {/* Chat Header */}
                <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5C9400] to-[#D4AF37] p-0.5">
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-white font-bold text-sm">Elite Server Forum</h5>
                    <p className="text-slate-400 text-xs">2,401 members online</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 space-y-4 overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                  
                  {/* Message 1 */}
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 shrink-0" />
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl rounded-tl-none p-3 text-sm text-slate-300">
                      Coach Jacobo, I'm struggling with my toss placement on the ad side. It keeps drifting left.
                    </div>
                  </div>

                  {/* Message 2 (Jacobo Reply) */}
                  <div className="flex space-x-3 flex-row-reverse space-x-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#5C9400] shrink-0 flex items-center justify-center text-xs font-bold text-white">
                      J
                    </div>
                    <div className="bg-[#5C9400]/10 border border-[#5C9400]/30 rounded-2xl rounded-tr-none p-3 text-sm text-white">
                      Upload a side-angle video. Usually, a leftward drift means your toss arm is pulling away too early. Let's look at it.
                    </div>
                  </div>

                  {/* Message 3 */}
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 shrink-0" />
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl rounded-tl-none p-3 text-sm text-slate-300 flex items-center space-x-2">
                      <VideoIcon className="w-4 h-4 text-slate-400" />
                      <span>serve_ad_side.mp4</span>
                    </div>
                  </div>
                </div>

                {/* Input Mockup */}
                <div className="h-12 bg-slate-950 border border-slate-800 rounded-full flex items-center px-4">
                  <span className="text-slate-500 text-sm">Type your message...</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-mono text-[#5C9400] font-bold uppercase tracking-widest block">
                PART 2 — INTERACTIVE MENTORSHIP
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-black italic text-white uppercase leading-tight">
                MENTORSHIP <br /> COMMUNITY ACCESS
              </h3>
              <p className="text-lg text-slate-400 font-sans leading-relaxed">
                You are not learning alone. Get instant entry to our private, moderated athlete forum. Chat with competitive players worldwide, and get direct feedback from Coach Jacobo himself.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start space-x-4">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-[#5C9400] rounded-sm shrink-0" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Direct Coach Access</h5>
                    <p className="text-slate-400 text-sm">Upload your on-court serve videos or ask tactical questions directly.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-[#5C9400] rounded-sm shrink-0" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Peer Interaction</h5>
                    <p className="text-slate-400 text-sm">Exchange match strategies with competitive players from 25+ countries.</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 
        ========================================
        PART 3: LIVE CALLS
        ========================================
      */}
      <section className="relative py-10 md:py-24 px-4 md:px-8 border-t border-slate-900">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#D4AF37] to-transparent blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-widest block">
                PART 3 — DIRECT GROUP FEEDBACK
              </span>
              <h3 className="text-4xl md:text-5xl font-display font-black italic text-white uppercase leading-tight">
                TWICE-A-MONTH <br /> LIVE GROUP CALLS
              </h3>
              <p className="text-lg text-slate-400 font-sans leading-relaxed">
                Meet Jacobo live to clarify your doubts. Twice a month, the entire group joins together for an exclusive live stream. Resolve all your serve alignment or strategic board questions face-to-face.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start space-x-4">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-[#D4AF37] rounded-sm shrink-0" />
                  <div>
                    <h5 className="text-white font-bold mb-1">12 Live Stream Calls</h5>
                    <p className="text-slate-400 text-sm">Fully integrated bi-weekly Q&A streams directly across your 6 months.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-[#D4AF37] rounded-sm shrink-0" />
                  <div>
                    <h5 className="text-white font-bold mb-1">Video Replay Library</h5>
                    <p className="text-slate-400 text-sm">Every group coaching live call is recorded and uploaded to your vault.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visual: Live Call Grid Mockup */}
            <div className="order-1 lg:order-2 relative aspect-[4/3] w-full">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 w-full h-full p-4 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl relative z-10">
                {/* Main Speaker (Jacobo) */}
                <div className="col-span-2 row-span-1 bg-slate-800 rounded-xl relative overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <img src="/jacobo-main-picture.png" alt="Jacobo Live" className="w-full h-full object-cover object-[center_30%]" onError={(e) => e.currentTarget.style.display = 'none'} />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Coach Jacobo
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 px-2 py-0.5 rounded text-[9px] text-white font-bold uppercase tracking-wider">
                    Live
                  </div>
                </div>
                
                {/* Participant 1 */}
                <div className="bg-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-700 to-slate-800 opacity-50" />
                  <Users className="w-8 h-8 text-slate-600 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white flex items-center gap-1.5">
                    <Mic className="w-3 h-3 text-red-500" />
                    Student
                  </div>
                </div>

                {/* Participant 2 */}
                <div className="bg-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-700 to-slate-800 opacity-50" />
                  <Users className="w-8 h-8 text-slate-600 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white flex items-center gap-1.5">
                    <Mic className="w-3 h-3 text-red-500" />
                    Student
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
