import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: '"The Box"',
    description: 'A unique puzzle hunt for a small group of friends',
    longDescription: 'This interactive game night combined elements of social deduction, creative storytelling, and collaborative problem-solving. The format was designed to work with groups of varying sizes and comfort levels, using adaptive rules and engaging prompts to ensure everyone could participate meaningfully.',
    images: ['/images/the-box-1.png', '/images/the-box-2.png'],
    tags: ['Puzzle Hunt'],
    date: '2021',
    slug: 'the-box'
  },
  {
    title: 'Survivor 1: Sturgus Ave',
    description: 'A day-long party where 12 friends were split into two tribes to play Survivor',
    longDescription: 'This multi-layered puzzle hunt took participants through a series of interconnected challenges spanning both physical and digital realms. Players had to decode messages, solve riddles, and collaborate to uncover the final mystery. The experience was designed to test creative thinking, attention to detail, and teamwork skills.',
    images: ['/images/survivor-1-1.png', '/images/survivor-1-2.png', '/images/survivor-1-3.png'],
    tags: ['Experience'],
    date: '2021',
    slug: 'survivor'
  },
  {
    title: 'Survivor 2: Graham Street',
    description: 'The second iteration of a day-long Survivor party',
    longDescription: 'This escape room experience pushed beyond traditional lock-and-key puzzles to create a narrative-driven adventure. Players became part of an unfolding story, where their choices and problem-solving skills directly influenced the outcome. The room featured custom-built props, interactive technology, and multiple story paths.',
    images: ['/images/survivor-2-1.jpeg', '/images/survivor-2-2.jpeg', '/images/survivor-2-3.jpeg'],
    tags: ['Experience'],
    date: '2022',
    slug: 'survivor-2'
  },
  {
    title: 'Taskmaster',
    description: 'A home game based on the Taskmaster TV show',
    longDescription: 'This interactive game night combined elements of social deduction, creative storytelling, and collaborative problem-solving. The format was designed to work with groups of varying sizes and comfort levels, using adaptive rules and engaging prompts to ensure everyone could participate meaningfully.',
    images: ['/images/taskmaster-1-1.png'],
    tags: ['Experience'],
    date: '2022',
    slug: 'taskmaster'
  },
  {
    title: 'Birthday Puzzle Hunt',
    description: 'A puzzle hunt to find the location of my birthday party',
    longDescription: 'This interactive game night combined elements of social deduction, creative storytelling, and collaborative problem-solving. The format was designed to work with groups of varying sizes and comfort levels, using adaptive rules and engaging prompts to ensure everyone could participate meaningfully.',
    images: ['/images/birthday-puzzle-hunt-1.png', '/images/birthday-puzzle-hunt-2.png', '/images/birthday-puzzle-hunt-3.png'],
    tags: ['Experience'],
    date: '2023',
    slug: 'birthday-puzzle-hunt'
  }
];