import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I&apos;m Eric
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
          I&apos;m a software product manager and game designer from Seattle, Washington
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I like to design &quot;games&quot; that have some sort of real-world, interactive experience involved. Here are some of my favorites from over the years.
        </p>
      </section>

      <section className="mb-8">
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
