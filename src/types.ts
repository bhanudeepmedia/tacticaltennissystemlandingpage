/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  level: string;
  role?: string; // e.g. "PARENT", "COMPETITOR"
  quote: string;
  rating: number;
  avatarUrl: string;
}

export interface Course {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  highlights: string[];
  imageUrl: string;
  borderTheme: 'lime' | 'gold';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  target: number;
  suffix: string;
  label: string;
  description: string;
}

export interface CommunityThread {
  id: string;
  author: string;
  role: string;
  timestamp: string;
  avatar: string;
  content: string;
  repliesCount: number;
  likes: number;
  reply?: {
    author: string;
    role: string;
    avatar: string;
    content: string;
  };
}
