import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Game Design Portfolio
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to my portfolio of creative gaming experiences, interactive designs, and innovative projects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h2>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
