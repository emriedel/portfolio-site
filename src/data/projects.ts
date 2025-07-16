import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'The Box',
    description: 'A unique puzzle hunt for a small group of friends',
    longDescription: `In 2021, I went on a two-month volunteering trip to Europe. Before I left, I gave four different friends a box and told them not to open it until the day I left.
    
The boxes each contained a note along with a puzzle element that needed to be combined with the others to be solved:
- One box contained a Rubik's cube that, when solved, opened up to reveal a black light
- Another box contained crossword puzzle that revealed a code word when solved
- The third box contained a 1000-piece jigsaw puzzle that revealed a code when solved
- The last box contained a small hotel safe along with a hidden cipher that was only revealed by black light

The goal of the puzzle hunt was to open the safe, but in order to get there, my friends had to find each other, combine their items, and work together to solve a variety of puzzles around the city of Seattle including:
- An online game that revealed a clue when a certain high score was reached
- GPS coordinates leading to a lockbox buried in my back yard
- A SoundCloud account that contained a song, which revealed a message when played backwards
- A trivia game where the answers could be found on the trail signs at a nearby hike
- A sticker put up in a public graffiti area in the city that contained the code word for a cipher

In the end, the final cipher revealed the code for the safe, which had some little prizes inside, and a note congratulating them on finishing.
    `,
    images: ['/images/the-box-1.jpg', '/images/the-box-2.jpg', '/images/the-box-3.jpg', '/images/the-box-4.jpg', '/images/the-box-5.jpg', '/images/the-box-6.jpg'],
    tags: ['Puzzle Hunt'],
    date: '2021',
    slug: 'the-box'
  },
  {
    title: 'Survivor 1: Sturgus Ave',
    description: 'A day-long party where 12 friends were split into two tribes to play Survivor',
    longDescription: `In 2021, I ran a day-long party in which 12 friends were split into two tribes to play the game of Survivor.
    
I acted as the host, Jeff Probst, and facilitated the challenges and "tribal councils" as the twelve voted each other out until there were only three remaining, when the voted out players chose the sole survivor at a final tribal council.

The challenges were largely party game themed, and included:
- Beer pong
- A jigsaw puzzle
- Flip cup
- Rage Cage
- Quiplash
- Saltines eating competition

In the end, the winner of the inaugural Survivor party was **Nicole Potchen**!
    `,
    images: ['/images/survivor-1-1.png', '/images/survivor-1-2.png', '/images/survivor-1-3.png', '/images/survivor-1-4.png'],
    youtubePlaylistId: 'PLpAljtwjM4XdQ4BFwJvY4TItz23L5AMwJ',
    tags: ['Experience'],
    date: '2021',
    slug: 'survivor'
  },
  {
    title: 'Survivor 2: Graham Street',
    description: 'The second iteration of a day-long Survivor party',
    longDescription: `Because of the success of the first Survivor experience, I decided to run another game in 2022 for a friend's birthday.

The game largely stayed the same, but I tweaked or entirely changed some of the less successfull challenges. The most successful new challenge was "blindfolded drawing" where the players who had already been voted out voted for the winning artist.

After a full day of challenges and tribal councils, the winner of Survivor 2 was **Nathan So**!
    `,
    images: ['/images/survivor-2-1.jpeg', '/images/survivor-2-2.jpeg', '/images/survivor-2-3.jpeg', '/images/survivor-2-4.jpeg'],
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

I edited the videos down to make one "episode", and on my birthday held a watch party where we all came together to view the end result. After doing some prize tasks and a live challenge, the winner of Taskmaster was **Simon Baumgardt-Wellander**!
    `,
    images: ['/images/taskmaster-1.png', '/images/taskmaster-2.png', '/images/taskmaster-3.png', '/images/taskmaster-4.png', '/images/taskmaster-5.png', '/images/taskmaster-6.png', '/images/taskmaster-7.png', ],
    youtubePlaylistId: 'PLpAljtwjM4XellxvLtx96U1bUAu-oOmG0',
    tags: ['Experience'],
    date: '2022',
    slug: 'taskmaster'
  },
  {
    title: 'Birthday Puzzle Hunt',
    description: 'A puzzle hunt to find the location of my birthday party',
    longDescription: `For my birthday in 2023, I ran a puzzle hunt that led my friends around the city of Seattle with the goal of uncovering the location of my party later that night.

Groups started by picking up a packet of papers that contained the starting clues and puzzles that took them on a journey including:
- A crossword puzzle that revealed the name of a local statue
- That local statue revealed a code when a piece of paper was placed over its plaque
- A sudoku puzzle that provided the charter number of a little free library to visit
- A park sign that helped to solve a book cipher
- A phone number that played morse code when called

Ultimately, the groups were led to a local park where visiting a website on their phone that could only be accessed from that location revealed the bar where I would be hanging out that evening.

One of the main goals of this puzzle hunt was to see if I could expand on the earlier "The Box" puzzle hunt I made and make something that was scalable to more people as well as achievable in a day, and I think I was very successful in that regard.
    `,
    images: ['/images/birthday-puzzle-hunt-1.png', '/images/birthday-puzzle-hunt-2.jpg', '/images/birthday-puzzle-hunt-3.jpg', '/images/birthday-puzzle-hunt-4.jpg', '/images/birthday-puzzle-hunt-5.png', '/images/birthday-puzzle-hunt-6.png'],
    tags: ['Experience'],
    date: '2023',
    slug: 'birthday-puzzle-hunt'
  }
];