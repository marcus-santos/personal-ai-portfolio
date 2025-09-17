'use client';

import { Button } from '@/components/ui/button';
import type { Project } from '@/types/portfolio';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const pathName = usePathname();
  const t = useTranslations('Portfolio');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
    });
  };

  const startYear = formatDate(project.startDate);

  return (
    <div className="w-80 mb-30 lg:mb-45 md:w-xl lg:w-5xl 2xl:w-6xl h-fit flex flex-col mx-auto justify-center gap-5 xl:flex-row lg:mx-0">
      <div className="w-full flex flex-col p-10 h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] bg-white/5 rounded-xl">
        <p className="mb-5 text-sm px-3 py-1 font-semibold w-fit rounded-xl bg-black/85">
          {project.category}
        </p>
        <div className="h-full w-full relative rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full border border-black object-cover object-top rounded-xl"
            fill
          />
        </div>
      </div>
      <div className="w-full md:w-[420px] lg:w-[520px] lg:h-[520px]">
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-2xl">{project.title}</h2>
          <p className="mt-5 text-white/80">{project.description}</p>
          <div>
            <p className="border-solid border-b-2 border-neutral-600 py-3">
              {t('cardInfo')}
            </p>
            <div className="flex justify-between border-solid border-b-2 border-neutral-600 py-3">
              <p>{t('yearPlaceholder')}</p>
              <p className="text-white/80">{startYear}</p>
            </div>
            <div className="flex justify-between border-solid border-b-2 border-neutral-600 py-3">
              <p>{t('rolePlaceholder')}</p>
              <p className="text-white/80">{project.role}</p>
            </div>
            <div className="flex gap-4 mt-10">
              {project.liveUrl && (
                <Button
                  className={`${pathName.includes('marcus') ? 'bg-[#22c55e]/60 hover:bg-[#22c55e]' : 'bg-violet-500/50 hover:bg-violet-500/80'} cursor-pointer`}
                >
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-1.5"
                  >
                    {t('projectButton')}
                    <FaExternalLinkAlt size={16} />
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="link"
                  className={`${pathName.includes('marcus') ? ' text-[#22c55e]/80 hover:text-[#22c55e]' : 'text-violet-500/80 hover:text-violet-500'} flex items-center transition underline underline-offset-4`}
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-1.5"
                  >
                    {t('githubButton')}
                    <FaGithub />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
