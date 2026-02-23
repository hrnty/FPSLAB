import { ReactNode } from 'react';

export type Category = 'MOUSE' | 'MOUSEPAD' | 'AIM' | 'SENS';

export interface Spec {
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'specs' | 'list' | 'quote';
  content?: string;
  items?: string[];
  specs?: Spec[];
}

export interface Article {
  id: string;
  category: Category;
  title: string;
  date: string;
  excerpt: string;
  blocks: ContentBlock[];
}
