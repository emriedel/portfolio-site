import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 md:text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hi, I&apos;m Eric
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              I&apos;m a software product manager and game designer from Seattle, Washington
            </p>
            <p className="text-lg text-gray-600">
              I like to design &quot;games&quot; that involve some sort of real-world, interactive experience. Here are some of my favorites from over the years.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/images/me.png"
                alt="Eric Riedel"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
