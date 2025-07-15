export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  images: string[];
  tags: string[];
  date: string;
  slug: string;
  youtubePlaylistId?: string;
}