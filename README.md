# Game Design Portfolio

A minimalist portfolio website showcasing creative gaming experiences and interactive design projects. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices
- **Project Gallery**: Clean grid layout showcasing gaming experiences
- **Individual Project Pages**: Detailed views with images and descriptions
- **Minimalist Styling**: Clean, professional design with subtle animations
- **SEO Optimized**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety throughout the codebase

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── projects/[slug]/   # Dynamic project pages
│   └── ...
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ProjectGrid.tsx
├── data/                  # Static data files
│   └── projects.ts        # Project data
└── types/                 # TypeScript type definitions
    └── project.ts
```

## Customization

### Adding New Projects

1. Add your project data to `src/data/projects.ts`
2. Include project images in the `public/images/` directory
3. The site will automatically generate individual project pages

### Styling

- Global styles are in `src/app/globals.css`
- Uses Tailwind CSS for utility-first styling
- Custom CSS variables for theme colors and dark mode support

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Next.js and deploy your site
5. Your site will be live with a custom URL

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Use `next export` for static hosting
- **Cloudflare Pages**: Direct integration with Git repositories

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist (Google Fonts)
- **Deployment**: Vercel (recommended)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
