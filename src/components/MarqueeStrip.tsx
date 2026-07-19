/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface MarqueeStripProps {
  items: string[];
  speed?: 'normal' | 'fast' | 'reverse';
  bgTheme?: 'default' | 'surface';
}

export default function MarqueeStrip({ 
  items, 
  speed = 'fast',
  bgTheme = 'surface'
}: MarqueeStripProps) {
  // To handle continuous infinite scroll in CSS we duplicate the sequence
  const duplicatedItems = [...items, ...items, ...items, ...items];

  const speedClass = 
    speed === 'fast' 
      ? 'animate-marquee-fast' 
      : speed === 'reverse'
      ? 'animate-marquee-reverse'
      : 'animate-marquee';

  const bgClass = bgTheme === 'surface' ? 'bg-brand-surface' : 'bg-brand-bg';

  return (
    <section 
      id="marquee-strip-scroller"
      className={`w-full overflow-hidden py-5 border-y border-brand-border ${bgClass} select-none`}
    >
      <div className="relative flex items-center overflow-x-hidden">
        <div className={speedClass}>
          {duplicatedItems.map((item, idx) => (
            <div 
              key={`${item}-${idx}`} 
              className="flex items-center mx-6 shrink-0"
            >
              <span className="font-display font-extrabold italic text-2xl md:text-3xl text-white uppercase tracking-wider">
                {item}
              </span>
              <span className="text-brand-lime font-display font-black text-2xl md:text-3xl ml-12">
                //
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
