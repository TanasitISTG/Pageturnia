import { Chapter } from './chapter.model';

export interface Novel {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  cover: string;
  chapters: Chapter[];
  keywords: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
}
