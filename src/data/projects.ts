import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'The Box',
    description: 'A unique puzzle hunt for a small group of friends',
    longDescription: `In 2021, I went on a two-month volunteering trip to Europe. Before I left, I gave 4 different friends a box and told them not to open it until the day I left.
    
The boxes each contained a note along with puzzle element that needed to be combined with the others to be solved:
- One box contained a Rubik's cube that, when solved, opened up to reveal a blacklight
- Another box contained crossword puzzle that revealed a code word when solved
- The third box contained a 1000-piece jigsaw puzzle that revealed a code when solved
- And the last box contained a small hotel safe along with the note that had the blacklight-hidden cipher

The goal of the puzzle hunt was to open the safe, but along the way my friends had to solve a variety of puzzles, including:
- An online game that revealed a clue when a certain high score was reached
- GPS coordinates leading to a lockbox buried in my backyard
- A SoundCloud account that contained a song that revealed a message when played backwards
- A trivia game where the answers could be found on the trail signs at a nearby hike
- A sticker put up in a public graffiti area in the city that contained the code word for another cipher

In the end, the final cipher revealed the code for the safe, which had a bunch of little board games inside for my friends to share (because every treasure hunt needs a treasure), and a note congratulating them on finishing.
    `,
    images: ['/images/the-box-1.jpg', '/images/the-box-2.jpg', '/images/the-box-3.jpg', '/images/the-box-4.jpg', '/images/the-box-5.jpg', '/images/the-box-6.jpg', '/images/the-box-7.jpg'],
    tags: ['Puzzle Hunt'],
    date: '2021',
    slug: 'the-box'
  },
  {
    title: 'Survivor 1: Sturgus Ave',
    description: 'A day-long party where 12 friends were split into two tribes to play Survivor',
    longDescription: `In 2021, I ran a day-long party in which 12 friends were split into two tribes to play the game of Survivor.
    
    I acted as the host, Jeff Probst, and facilitated the challenges and "tribal councils" as the twelve voted each other out until there was one sole survivor.

Some of the challenges included:
- A game of beer pong
- A jigsaw puzzle
- Flip cup
- Quiplash
- Saltines eating competition

    `,
    images: ['/images/survivor-1-1.png', '/images/survivor-1-2.png', '/images/survivor-1-3.png'],
    youtubePlaylistId: 'PLpAljtwjM4XdQ4BFwJvY4TItz23L5AMwJ',
    tags: ['Experience'],
    date: '2021',
    slug: 'survivor'
  },
  {
    title: 'Survivor 2: Graham Street',
    description: 'The second iteration of a day-long Survivor party',
    longDescription: `Because of the success of the first Survivor experience, I decided to run another game in 2022 for a friend's birthday.

    The game largely stayed the same, 
    
    `,
    images: ['/images/survivor-2-1.jpeg', '/images/survivor-2-2.jpeg', '/images/survivor-2-3.jpeg', '/images/survivor-2-4.png'],
    youtubePlaylistId: 'PLpAljtwjM4XfHxyHT91pKrgilBCVWuNjH',
    tags: ['Experience'],
    date: '2022',
    slug: 'survivor-2'
  },
  {
    title: 'Taskmaster',
    description: 'A home game based on the Taskmaster TV show',
    longDescription: `For my birthday in 2022, I ran a home game of Taskmaster, based on the British TV show.

Over the course of several weeks, I mailed six friends five different envelopes containing Taskmaster tasks. They were instructed to record themselves opening, reading, and then completing the tasks.

The tasks were:
- Throw something into something else. Most impressive shot wins. You have 20 minutes.
- Figure out how long this roll of toilet paper is when unraveled. You must give your answer in centimeters. You may not use your hands. You have 5 minutes.
- Take the coolest picture of yourself with a fruit. You have one week.
- Sit down on the floor. Stand up and strike a pose after exactly 100 seconds. You may not use a timekeeping device. Closest to 100 seconds wins. One bonus point will be awarded for the best pose.
- Make the best portrait of Eric using only items from your kitchen. You have 15 minutes.

I edited the videos down, and on my birthday held a watch party where we all came together to view the end result.
    `,
    images: ['/images/taskmaster-1.jpg'],
    youtubePlaylistId: 'PLpAljtwjM4XellxvLtx96U1bUAu-oOmG0',
    tags: ['Experience'],
    date: '2022',
    slug: 'taskmaster'
  },
  {
    title: 'Birthday Puzzle Hunt',
    description: 'A puzzle hunt to find the location of my birthday party',
    longDescription: `This **birthday puzzle hunt** created an engaging treasure hunt experience that combined digital and physical clues to guide friends to the party location.

## Hunt Structure
The puzzle incorporated multiple stages:

- **Digital clues** sent via social media and messaging
- *Physical locations* around the city with hidden messages
- **Collaborative elements** requiring teamwork to solve
- Time-based challenges that built excitement

The hunt culminated in a final reveal at the party location, where participants discovered not just the venue but also *additional surprises* waiting for them.

This personalized experience turned a simple birthday invitation into an **memorable adventure** that guests talked about long after the celebration ended.`,
    images: ['/images/birthday-puzzle-hunt-1.png', '/images/birthday-puzzle-hunt-2.png', '/images/birthday-puzzle-hunt-3.png'],
    tags: ['Experience'],
    date: '2023',
    slug: 'birthday-puzzle-hunt'
  }
];