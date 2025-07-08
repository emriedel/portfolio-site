import Link from 'next/link';
import { Project } from '@/types/project';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link 
          key={project.id}
          href={`/projects/${project.slug}`}
          className="group block"
        >
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group-hover:shadow-lg card-hover">
            <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              {project.date}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}