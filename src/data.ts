/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Testimonial, FAQItem, CommunityThread, StatItem } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    country: 'USA',
    level: 'NTRP 4.5 / Club Competitor',
    quote: "Jacobo took me from club player to regional competitor. Nobody else comes close.",
    rating: 5,
    avatarUrl: ''
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    country: 'Germany',
    level: 'Junior ITF Competitor',
    quote: "I've worked with coaches across three countries. Jacobo is on a different level entirely.",
    rating: 5,
    avatarUrl: ''
  },
  {
    id: 't3',
    name: 'Sarah Jenkins',
    country: 'Australia',
    level: 'Adult League Finalist',
    quote: "Jacobo explains the why behind everything. That separates him from every coach I've had.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't4',
    name: 'David L.',
    country: 'UK',
    level: 'NTRP 4.0 Player',
    quote: "He sees things in real time most coaches miss on replay. I feel completely understood.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't5',
    name: 'Chloe Tremblay',
    country: 'Canada',
    level: 'College Athlete',
    quote: "I started watching pro matches completely differently. My court IQ has skyrocketed.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't6',
    name: 'Jason Sterling',
    country: 'USA',
    level: 'Masters Competitor',
    quote: "Five minutes with Jacobo is worth more than 10 lessons elsewhere. Real tactical mastery.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't7',
    name: 'Brooke Patterson',
    country: 'South Africa',
    level: 'NTRP 3.5 Player',
    quote: "The live calls alone justify everything. Feels personal. Not like an online course at all.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't8',
    name: 'Coach Richard Chen',
    country: 'Taiwan',
    level: 'Provincial Junior Coach',
    quote: "He took me from picking up a racket to competing in my first tournament in under a year.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't9',
    name: 'Arthur Miller',
    country: 'USA',
    level: 'Tennis Parent',
    role: 'TENNIS PARENT',
    quote: "My daughter is now national junior level. No version of that without Jacobo's patterns.",
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    number: 'COURSE 01',
    badge: 'COURSE 01',
    title: 'THE STRATEGY BREAKDOWN SESSIONS',
    subtitle: 'Understand your serve at a level most players never reach.',
    highlights: [
      'Tactical decisions',
      'Pressure solutions',
      'Pattern correction',
      'Serve as weapon',
      'Spin & placement',
      'Works all levels'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=600&auto=format&fit=crop',
    borderTheme: 'lime'
  },
  {
    id: 'c2',
    number: 'COURSE 02',
    badge: 'COURSE 02 — THE GAME CHANGER',
    title: 'PRO PLAYER PATTERN BREAKDOWNS',
    subtitle: 'Real tournament footage. Broken down by Jacobo. Nobody else does this.',
    highlights: [
      'Pro target maps',
      'Pressure trends',
      'Split-second cues'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600&auto=format&fit=crop',
    borderTheme: 'gold'
  },
  {
    id: 'c3',
    number: 'COURSE 03',
    badge: 'COURSE 03',
    title: 'LIVE COACHING SESSION FOOTAGE',
    subtitle: 'Real students. Real court. Real breakthroughs. Added regularly.',
    highlights: [
      'Real corrections',
      'Audio callouts',
      'Live cue system'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542143408-97c23b11d374?q=80&w=600&auto=format&fit=crop',
    borderTheme: 'lime'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Is this for beginners?',
    answer: 'Yes. Every level from first racket to competitive player can master these rules first and build correct habits immediately.'
  },
  {
    id: 'faq2',
    question: 'What do I get immediately?',
    answer: 'All 3 major course modules, immediate access to our exclusive athlete community, calendar invites for the direct coaching live streams, and instant template resources.'
  },
  {
    id: 'faq3',
    question: 'How long is my access?',
    answer: 'You obtain 6 full months of direct access from the date you complete your registration. This includes live group coaching and active program expansions.'
  },
  {
    id: 'faq4',
    question: 'When are the live calls?',
    answer: 'Twice monthly. Full calendar invites and schedule adjustments are shared inside our board. All live calls are fully recorded and added to the video vault within 24 hours.'
  },
  {
    id: 'faq5',
    question: 'Is there real interaction with Jacobo?',
    answer: 'Absolutely. Jacobo reads, reviews, and answers student questions personally in the Community feed, gives live video analysis, and addresses students directly on the bi-monthly group coaching sessions.'
  },
  {
    id: 'faq6',
    question: 'How is new content added?',
    answer: 'Course sessions are accessible immediately. High-definition recording reels of recent students and live session blueprints are appended on a continuous weekly cycle.'
  },
  {
    id: 'faq7',
    question: 'Refund policy?',
    answer: 'We offer a 100% money-back guarantee within 14 days of enrollment. If you watch the first 3 sessions and feel the elite tactical patterns aren\'t changing your serve game, email coach jacobo directly for a no-questions-asked refund.'
  }
];

export const PERFORMANCE_STATS: StatItem[] = [
  {
    target: 20,
    suffix: '+',
    label: 'YEARS ELITE COACHING',
    description: 'Years Spent on Court Refining Competitive Patterns'
  },
  {
    target: 1000,
    suffix: 's',
    label: 'PLAYERS TRAINED',
    description: 'From Absolute Beginners to ITF Juniors and Touring Pros'
  },
  {
    target: 100,
    suffix: '%',
    label: 'ALL LEVELS',
    description: 'Beginner to Advanced Competitive Players Welcome'
  },
  {
    target: 12,
    suffix: '',
    label: 'LIVE CALLS INCLUDED',
    description: 'Bi-weekly Direct Feedback Video Calls Over 6 Months'
  }
];

export const COMMUNITY_THREADS: CommunityThread[] = [
  {
    id: 'th1',
    author: 'Sam Harrison',
    role: 'NTRP 4.0 Club Player',
    timestamp: '2 hours ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    content: "Uploading my serve video to get feedback on Phase 1 ball toss placement. I've noticed a major drop in consistency when I hit into Zone B. Would love some alignment cues!",
    repliesCount: 3,
    likes: 8,
    reply: {
      author: 'Jacobo Hernandez',
      role: 'Head Coach',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150',
      content: "Sam, great toss alignment. The issue here isn't the toss height—your left shoulder is dropping exactly 0.2 seconds too early. Try to keep that non-dominant hand pointing at the clouds until your racket head drops into the slot. I've highlighted the frame for you. Keep drilling this!"
    }
  },
  {
    id: 'th2',
    author: 'Michael Vance',
    role: 'Varsity High School Player',
    timestamp: 'Yesterday',
    avatar: 'https://images.unsplash.com/photo-1542143408-97c23b11d374?q=80&w=150',
    content: "Just played my first tournament using the Pro Wide Pattern on deuce side. Broke my rival four times. They literally could not anticipate the kick! This pattern is insane.",
    repliesCount: 14,
    likes: 29,
    reply: {
      author: 'Jacobo Hernandez',
      role: 'Head Coach',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150',
      content: "That's how we build absolute court dominance, Michael! Notice how they started cheating to the middle after game 3? That's when you mix in the flat slider to the T. Huge win."
    }
  }
];
