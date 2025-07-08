import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Mystery Puzzle Hunt',
    description: 'An immersive puzzle hunt experience that combines physical clues with digital challenges.',
    longDescription: 'This multi-layered puzzle hunt took participants through a series of interconnected challenges spanning both physical and digital realms. Players had to decode messages, solve riddles, and collaborate to uncover the final mystery. The experience was designed to test creative thinking, attention to detail, and teamwork skills.',
    images: ['/images/puzzle-hunt-1.jpg', '/images/puzzle-hunt-2.jpg'],
    tags: ['Puzzle Design', 'Interactive Experience', 'Team Building'],
    date: '2023',
    slug: 'mystery-puzzle-hunt'
  },
  {
    id: '2',
    title: 'Escape Room Experience',
    description: 'A narrative-driven escape room focusing on storytelling and innovative mechanics.',
    longDescription: 'This escape room experience pushed beyond traditional lock-and-key puzzles to create a narrative-driven adventure. Players became part of an unfolding story, where their choices and problem-solving skills directly influenced the outcome. The room featured custom-built props, interactive technology, and multiple story paths.',
    images: ['/images/escape-room-1.jpg', '/images/escape-room-2.jpg'],
    tags: ['Escape Room', 'Narrative Design', 'Interactive Props'],
    date: '2023',
    slug: 'escape-room-experience'
  },
  {
    id: '3',
    title: 'Interactive Game Night',
    description: 'A social gaming experience designed to break the ice and build connections.',
    longDescription: 'This interactive game night combined elements of social deduction, creative storytelling, and collaborative problem-solving. The format was designed to work with groups of varying sizes and comfort levels, using adaptive rules and engaging prompts to ensure everyone could participate meaningfully.',
    images: ['/images/game-night-1.jpg', '/images/game-night-2.jpg'],
    tags: ['Social Gaming', 'Event Design', 'Group Dynamics'],
    date: '2022',
    slug: 'interactive-game-night'
  }
];