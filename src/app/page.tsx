import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <section className="mb-20">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-semibold text-neutral-900 mb-6">
              Hi, I&apos;m Eric.
            </h1>
            <p className="text-lg text-neutral-700 mb-4">
              I&apos;m a software product manager and game designer from Seattle, Washington.
            </p>
            <p className="text-lg text-neutral-600">
              I usually like to design games that involve some sort of real-world, interactive experience. Here are a few of my favorite projects from over the years.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <Image
                src="/images/me.png"
                alt="Eric Riedel"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-8 border-t border-neutral-200" />
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
