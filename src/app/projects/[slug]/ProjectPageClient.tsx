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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Projects
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
        </header>

        {project.longDescription && (
          <section className="mb-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.longDescription}
              </ReactMarkdown>
            </div>
          </section>
        )}

        {project.youtubePlaylistId && (
          <section className="mb-8">
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${project.youtubePlaylistId}`}
                title="Related Videos"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        <section className="mb-8">
          <div className="grid gap-4 md:grid-cols-2">
            {project.images.map((image, index) => (
              <div 
                key={index} 
                className="relative bg-gray-200 rounded-lg aspect-video overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
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