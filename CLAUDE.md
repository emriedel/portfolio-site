# CLAUDE.md - Portfolio Site Context

## Project Overview
This is Eric Riedel's personal portfolio website showcasing his work as a software product manager and game designer from Seattle, Washington. The site features a clean, minimalist design focused on displaying creative gaming experiences and interactive design projects.

## Owner Information
- **Name**: Eric Riedel
- **Role**: Software product manager and game designer
- **Location**: Seattle, Washington
- **Professional Summary**: "I am a software product manager and game designer from Seattle, Washington"

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist (Google Fonts)
- **Runtime**: React 19
- **Node**: 18+

## Project Structure
```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   │   └── page.tsx       # About Eric Riedel
│   ├── projects/[slug]/   # Dynamic project pages
│   │   └── page.tsx       # Individual project display
│   ├── layout.tsx         # Root layout with navigation/footer
│   ├── page.tsx           # Homepage with intro and projects
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Top navigation (Eric Riedel branding)
│   ├── Footer.tsx         # Footer with copyright
│   └── ProjectGrid.tsx    # Project display grid
├── data/                  # Static data files
│   └── projects.ts        # Project data array
└── types/                 # TypeScript type definitions
    └── project.ts         # Project interface
```

## Key Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Project Portfolio**: Grid layout showcasing gaming experiences
- **Dynamic Project Pages**: Individual pages for each project via slug routing
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type Safety**: Full TypeScript implementation
- **Clean Architecture**: Component-based React structure

## Development Commands
```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Content Management
- **Projects**: Add new projects in `src/data/projects.ts`
- **Images**: Store project images in `public/images/`
- **Styling**: Global styles in `src/app/globals.css`
- **Types**: Project interface in `src/types/project.ts`

## Current Projects
1. **Mystery Puzzle Hunt** (2023) - Multi-layered puzzle experience
2. **Escape Room Experience** (2023) - Narrative-driven escape room
3. **Interactive Game Night** (2022) - Social gaming experience

## Recent Changes
- **Personalization**: Site has been updated with Eric Riedel's name and professional information
- **Branding**: Navigation shows "Eric Riedel" instead of generic "Portfolio"
- **Content**: Professional summary added to homepage and about page
- **Metadata**: Site title updated to "Eric Riedel - Portfolio"

## Development Notes
- Uses Next.js App Router (not Pages Router)
- Tailwind CSS 4 for styling
- TypeScript strict mode enabled
- All images should be optimized for web
- Follow existing component patterns when adding new features
- Maintain responsive design principles
- Keep accessibility in mind for all additions

## Common Tasks
- **Add Project**: Update `src/data/projects.ts` with new project object
- **Update About**: Edit `src/app/about/page.tsx`
- **Modify Navigation**: Edit `src/components/Navigation.tsx`
- **Change Homepage**: Edit `src/app/page.tsx`
- **Update Styling**: Edit `src/app/globals.css` or component files

## Repository
- **GitHub**: emriedel/portfolio-site
- **Main Branch**: main
- **Recent PR**: #3 - Personalization to Eric Riedel

## Deployment
- **Platform**: Vercel (recommended)
- **URL**: TBD (will be provided after deployment)
- **Build Command**: `npm run build`
- **Dev Command**: `npm run dev`

## Important Context
- This is a personal portfolio site, not a commercial application
- Focus on clean, professional presentation of game design work
- Prioritize user experience and accessibility
- Keep the design minimal and content-focused
- Always test responsive behavior on different screen sizes