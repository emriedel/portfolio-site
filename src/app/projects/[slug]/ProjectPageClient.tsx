'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ImageModal from '@/components/ImageModal';
import { Project } from '@/types/project';

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
      <nav className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </nav>

      <article>
        <header className="mb-10">
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
            {project.date}
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              {project.title}
            </h1>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-[color:var(--background)] transition-colors"
              >
                Visit {project.title}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {project.longDescription && (
          <section className="mb-10">
            <div className="prose prose-lg prose-neutral max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.longDescription}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {project.youtubePlaylistId && (
          <section className="mb-10">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-200">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${project.youtubePlaylistId}`}
                title="Related Videos"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {project.images.length > 0 && (
          <section className="mb-8">
            <div className="grid gap-4 md:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-neutral-200 transition-opacity hover:opacity-90"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      <ImageModal
        src={selectedImage || ''}
        alt={selectedImage ? `${project.title} - Full Size Image` : ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
