/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Calendar, Video, MessageSquare, BookOpen, Send, CheckCircle2, ShieldAlert, Award, Lightbulb } from 'lucide-react';

interface InsideAthletePortalProps {
  athleteEmail: string;
  onLogout: () => void;
}

const PORTAL_VIDEOS = [
  { id: 'v1', title: '01. The Deuce-Wide Service Geometry', duration: '14:20', presenter: 'Jacobo Hernandez', desc: 'How to position the toss 12 inches to the right to open backhand returns.' },
  { id: 'v2', title: '02. Shoulder Lever Alignment Formulas', duration: '18:45', presenter: 'Jacobo Hernandez', desc: 'Fixing the non-dominant shoulder drop that ruins first serve consistency.' },
  { id: 'v3', title: '03. Pro-Target Target Corridors Decoded', duration: '22:10', presenter: 'Jacobo Hernandez', desc: 'Analyzing Novak and Roger server patterns during grand slam breakpoints.' },
  { id: 'v4', title: '04. The Kick Serve Spin-Offset Trajectory', duration: '16:05', presenter: 'Jacobo Hernandez', desc: 'Adjusting brush geometry on second serves to force defensive returns.' }
];

export default function InsideAthletePortal({ athleteEmail, onLogout }: InsideAthletePortalProps) {
  const [activeVideo, setActiveVideo] = useState(PORTAL_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [serveSpot, setServeSpot] = useState<'Wide' | 'Center' | 'Body'>('Wide');
  const [targetZone, setTargetZone] = useState<'A' | 'B' | 'C'>('A');
  const [chatMessage, setChatMessage] = useState('');
  const [chatFeed, setChatFeed] = useState([
    { id: '1', author: 'Jacobo Hernandez', role: 'Head Coach', text: 'Welcome to Phase 1, Athlete. Post your serve question or video link below and I will compile direct alignment feedback for you.', time: 'Just now' }
  ]);
  const [answering, setAnswering] = useState(false);

  const handlePostChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = {
      id: String(Date.now()),
      author: athleteEmail.split('@')[0].toUpperCase(),
      role: 'Student Athlete',
      text: chatMessage,
      time: 'Just now'
    };

    setChatFeed((prev) => [...prev, userMsg]);
    const promptMsg = chatMessage;
    setChatMessage('');
    setAnswering(true);

    // Simulate specialized tennis coach response
    setTimeout(() => {
      let coachReplyText = `Interesting serve inquiry! When serving from the ${serveSpot} spot straight into Zone ${targetZone}, ensure your hip alignment remains closed relative to the net until contact. I will discuss this in our next Live Call!`;
      
      if (promptMsg.toLowerCase().includes('consistency') || promptMsg.toLowerCase().includes('fault')) {
        coachReplyText = "For consistency and double fault elimination: Look closely at your ball toss trajectory. It should land 1.5 feet into the court if dropped. Keep that wrist relaxed!";
      } else if (promptMsg.toLowerCase().includes('spin') || promptMsg.toLowerCase().includes('kick')) {
        coachReplyText = "To generate heavy topspin kick: Arch your back slightly and brush the ball from 7 o'clock to 1 o'clock. Speed up the arm through impact zone!";
      }

      const coachMsg = {
        id: String(Date.now() + 1),
        author: 'Jacobo Hernandez',
        role: 'Head Coach',
        text: coachReplyText,
        time: 'Just now'
      };

      setChatFeed((prev) => [...prev, coachMsg]);
      setAnswering(false);
    }, 1500);
  };

  // Get dynamic tactics summary based on selected servo position and target zone
  const getTacticalAdvice = () => {
    if (serveSpot === 'Wide') {
      if (targetZone === 'A') return "The 'Deuce-Wide Slider'. Forces high-risk forehand stretch returns. Sets up a wide open court on Shot 3.";
      if (targetZone === 'B') return "Deuce Body Slider. Jams the receiver physically. High correlation with defensive shank chips.";
      return "Wide angle slice to the T corridor. Highly unexpected. Great fallback pattern to hold service.";
    }
    if (serveSpot === 'Center') {
      if (targetZone === 'A') return "Center Slider into backhand wide channel. Forces flat slice returns that sit up midcourt.";
      if (targetZone === 'B') return "Flat server directly down the line. Maximum velocity, minimum reaction time. Absolute ace pattern.";
      return "Low kick to the Ad side corner. Best utilized on second serves under pressure.";
    }
    // Body spot
    if (targetZone === 'A') return "Ad Wide Body jammer. Hits the receiver in the right hip. Highly effective against tall baseline returners.";
    if (targetZone === 'B') return "Deep flat server targeted at the head. Generates instant physical block errors.";
    return "T Line body slice. Knifes into the receiver's torso, preventing any offensive swing paths.";
  };

  return (
    <div 
      id="athlete-portal-viewport"
      className="bg-brand-bg text-white border-y border-brand-border py-20 px-4 md:px-8 court-lines-bg text-left"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Welcome Header bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-border/60 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 bg-brand-lime/10 px-3 py-1 border border-brand-lime/20 text-brand-lime font-mono text-[9px] uppercase tracking-widest">
              <CheckCircle2 className="w-3 h-3" />
              <span>ACTIVE PROFESSIONAL ATHLETE ACCESS PORTAL</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-display font-black italic uppercase text-white tracking-tight">
              INSIDE THE <span className="text-brand-lime">TACTICAL WORLD</span>
            </h3>
            <p className="text-xs text-brand-muted font-sans flex items-center space-x-1">
              <span>Welcome Back,</span>
              <strong className="text-white uppercase font-mono">{athleteEmail}</strong>
              <span>· Rank: Class 1 Competitor</span>
            </p>
          </div>

          <button
            onClick={onLogout}
            className="bg-brand-surface hover:bg-red-950/20 text-brand-lime font-mono text-[10px] tracking-widest uppercase border border-brand-border px-4 py-2 transition-colors cursor-pointer"
          >
            LOGOUT / EXIT SYSTEM
          </button>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left (col-span-7) Interactive Video Player Vault */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-brand-lime uppercase tracking-widest flex items-center space-x-1.5">
                <Video className="w-4 h-4" />
                <span>ACTIVE SESSION: {activeVideo.title}</span>
              </span>
              <span className="text-[10px] text-brand-muted font-mono bg-black px-2 py-0.5">
                PRESENTER: {activeVideo.presenter.toUpperCase()}
              </span>
            </div>

            {/* Simulated interactive premium video dashboard render */}
            <div className="relative aspect-video bg-[#0c0e14] border-2 border-brand-lime overflow-hidden shadow-2xl flex flex-col justify-between p-4">
              
              {!isPlaying ? (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/85 p-6">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 bg-brand-lime text-black rounded-none flex items-center justify-center transition-all hover:scale-105 cursor-pointer border-0"
                  >
                    <Play className="w-6 h-6 fill-black ml-0.5 text-black" />
                  </button>
                  <p className="text-sm font-mono text-brand-lime uppercase tracking-widest mt-4 font-bold">
                    STREAM Blueprints DEMO
                  </p>
                  <p className="text-xs text-brand-muted font-sans text-center mt-1 max-w-sm">
                    {activeVideo.desc}
                  </p>
                </div>
              ) : (
                <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 bg-[#080B12] font-mono text-left select-none">
                  {/* Streaming board */}
                  <div className="flex items-center justify-between text-[10px] text-brand-lime border-b border-brand-border pb-2.5">
                    <span>VAULT_SEGMENT_STREAM_ON.CJS</span>
                    <span className="animate-pulse">● LIVE BUFFER SPEED 1.0X</span>
                  </div>

                  {/* Canvas Overlay graphics */}
                  <div className="flex-grow flex items-center justify-center relative">
                    <div className="absolute inset-10 border border-brand-lime/10 border-dashed rounded-none flex items-center justify-center">
                      <div className="w-2 h-2 bg-brand-lime rounded-full animate-ping" />
                    </div>
                    {/* Animated speech balloon */}
                    <div className="text-center font-display italic text-base font-bold text-white uppercase max-w-sm py-4 bg-brand-surface border-l-2 border-brand-lime px-4 z-20">
                      "[COACH JACOBO]: Notice how the racket face remains slightly open. This creates the optimal 14-degrees slider brush."
                    </div>
                  </div>

                  {/* Dials */}
                  <div className="space-y-1 pt-2 border-t border-brand-border/60">
                    <div className="h-1 bg-brand-border w-full">
                      <div className="h-full bg-brand-lime w-1/3 animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between text-[9px] text-[#B2BAC7]">
                      <span>04:15 / {activeVideo.duration}</span>
                      <button 
                        onClick={() => setIsPlaying(false)}
                        className="text-brand-lime hover:text-white border-0 bg-transparent cursor-pointer text-[9px]"
                      >
                        ✕ PAUSE STREAM
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* List of segment lectures */}
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest block font-bold">
                PHASE 1 CORE LECTURES LIBRARY
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PORTAL_VIDEOS.map((vid) => {
                  const isActive = vid.id === activeVideo.id;
                  return (
                    <button
                      key={vid.id}
                      onClick={() => {
                        setActiveVideo(vid);
                        setIsPlaying(false);
                      }}
                      className={`p-4 border text-left flex flex-col justify-between transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-brand-surface border-brand-lime shadow-lg'
                          : 'bg-brand-surface/40 border-brand-border hover:border-brand-lime/30'
                      }`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <span className="font-display font-bold text-sm text-white uppercase tracking-wider">{vid.title}</span>
                        <span className="font-mono text-[9px] text-brand-lime uppercase bg-brand-lime/10 px-1.5 py-0.5">{vid.duration}</span>
                      </div>
                      <p className="text-[10px] text-brand-muted mt-2 font-sans line-clamp-1">{vid.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column Right (col-span-5) Interactive Strategy Pad & Chat */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Strategy Pad */}
            <div className="bg-brand-surface border border-brand-border p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-lime uppercase tracking-widest flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4 text-brand-lime" />
                  <span>TACTICAL STRATEGY CALCULATOR</span>
                </span>
              </div>

              {/* Server Spot Select selectors */}
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-mono text-brand-muted uppercase block tracking-wider mb-1">
                    1. SELECT YOUR SERVE SPOT
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Wide', 'Center', 'Body'] as const).map((spot) => (
                      <button
                        key={spot}
                        type="button"
                        onClick={() => setServeSpot(spot)}
                        className={`py-1 px-2.5 font-mono text-[10px] border tracking-wider text-center cursor-pointer ${
                          serveSpot === spot
                            ? 'bg-brand-lime text-black border-brand-lime font-bold'
                            : 'bg-brand-bg text-[#B2BAC7] border-brand-border hover:border-white/20'
                        }`}
                      >
                        {spot.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Target Zone selectors */}
                <div>
                  <span className="text-[10px] font-mono text-brand-muted uppercase block tracking-wider mb-1">
                    2. TARGET ZONE CORRIDOR
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(['A', 'B', 'C'] as const).map((zone) => (
                      <button
                        key={zone}
                        type="button"
                        onClick={() => setTargetZone(zone)}
                        className={`py-1 px-2.5 font-mono text-[10px] border tracking-wider text-center cursor-pointer ${
                          targetZone === zone
                            ? 'bg-brand-lime text-black border-brand-lime font-bold'
                            : 'bg-brand-bg text-[#B2BAC7] border-brand-border hover:border-white/20'
                        }`}
                      >
                        ZONE {zone}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated dynamic playbook output feedback cards */}
                <div className="p-4 bg-brand-bg border border-brand-border space-y-2 text-left">
                  <div className="flex items-center space-x-2 text-brand-lime">
                    <Lightbulb className="w-4 h-4" />
                    <span className="font-mono text-[10px] tracking-widest uppercase block font-semibold">
                      COACH STRATEGIC SUMMARY
                    </span>
                  </div>
                  <p className="text-white text-xs font-sans leading-relaxed font-semibold">
                    {getTacticalAdvice()}
                  </p>
                  <p className="text-[10px] text-brand-muted font-sans font-light italic mt-1">
                    *Recommended serve speed: {serveSpot === 'Wide' ? '85% slice spin' : '95% flat strike'}.*
                  </p>
                </div>
              </div>

            </div>

            {/* Student Chat reply loop engine */}
            <div className="bg-brand-surface border border-brand-border p-6 shadow-xl space-y-4">
              <span className="text-xs font-mono text-brand-lime uppercase tracking-widest flex items-center space-x-1.5">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT Q&A LINE WITH JACOBO</span>
              </span>

              {/* Chat scrolling log window */}
              <div className="h-44 bg-brand-bg border border-brand-border p-4 overflow-y-auto space-y-3.5 flex flex-col justify-start">
                {chatFeed.map((msg) => {
                  const isCoach = msg.author.includes('Jacobo');
                  return (
                    <div 
                      key={msg.id}
                      className={`p-3 space-y-1 text-left ${
                        isCoach
                          ? 'bg-brand-surface border-l-2 border-brand-lime ml-2'
                          : 'bg-brand-surface/40 border-l-2 border-slate-500 mr-2'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[9px] font-mono">
                        <span className={isCoach ? 'text-brand-lime font-bold' : 'text-[#B2BAC7]'}>
                          {msg.author} <span className="text-[8px] opacity-70">({msg.role})</span>
                        </span>
                        <span className="text-brand-muted">{msg.time}</span>
                      </div>
                      <p className="text-xs text-white font-sans font-light leading-relaxed">
                        {msg.text}
                      </p>
                    </div>
                  );
                })}
                {answering && (
                  <div className="text-xs text-brand-lime font-mono italic animate-pulse">
                    COACH JACOBO IS TRANSMITTING RECTIFICATION DIALS...
                  </div>
                )}
              </div>

              {/* Send box */}
              <form onSubmit={handlePostChat} className="flex gap-2">
                <input
                  required
                  type="text"
                  placeholder="Ask about ball toss, hip stance, grip..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-grow bg-[#080B12] text-xs border border-brand-border px-3 py-2 text-white focus:outline-none focus:border-brand-lime"
                />
                <button
                  type="submit"
                  disabled={answering}
                  className="bg-brand-lime hover:bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider px-4.5 cursor-pointer border-0"
                >
                  <Send className="w-3.5 h-3.5 inline mr-1" /> ASK
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
