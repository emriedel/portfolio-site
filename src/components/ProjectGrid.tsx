import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-900"
        >
          <Link
            href={`/projects/${project.slug}`}
            className="block focus:outline-none"
            aria-label={project.title}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
              {project.images && project.images.length > 0 ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-neutral-400">Project Image</span>
                </div>
              )}
            </div>
          </Link>

          <div className="flex flex-1 flex-col p-5">
            <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              {project.date}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="focus:outline-none"
            >
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-[color:var(--accent-warm)]">
                {project.title}
              </h3>
            </Link>

            <p className="mb-5 text-neutral-600">
              {project.description}
            </p>

            <div className="mt-auto flex items-end justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="relative z-10 inline-flex shrink-0 items-center gap-1 text-sm font-medium text-neutral-900 hover:text-[color:var(--accent-warm)]"
                >
                  Visit
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
