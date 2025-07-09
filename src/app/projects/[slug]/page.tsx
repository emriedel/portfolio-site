import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

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
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="text-gray-600 mb-4">
            {project.date}
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {project.description}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Images</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.images.map((image, index) => (
              <div key={index} className="relative bg-gray-200 rounded-lg aspect-video overflow-hidden">
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

        {project.longDescription && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Detailed Description</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </section>
        )}
      </article>
    </div>
  );
}