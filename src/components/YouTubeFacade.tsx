/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

// Lightweight click-to-load facade: avoids pulling in the full YouTube iframe
// (and its scripts/network calls) until the user actually wants to watch.
export default function YouTubeFacade({ videoId, title, className = '' }: YouTubeFacadeProps) {
  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    return (
      <iframe
        className={`absolute inset-0 w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsActive(true)}
      aria-label={`Play video: ${title}`}
      className={`absolute inset-0 w-full h-full group cursor-pointer ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-lime/20 backdrop-blur-sm border border-brand-lime/50 flex items-center justify-center group-hover:bg-brand-lime group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(92,148,0,0.3)] group-hover:shadow-[0_0_40px_rgba(92,148,0,0.6)]">
          <Play className="w-7 h-7 md:w-8 md:h-8 text-brand-lime group-hover:text-black ml-1 transition-colors" />
        </div>
      </div>
    </button>
  );
}
