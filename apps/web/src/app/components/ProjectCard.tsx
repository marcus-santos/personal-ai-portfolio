'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  role: string;
  viewButton?: boolean;
  viewButtonRef: string;
  githubButtonRef: string;
}

function ProjectCard({
  tag,
  title,
  description,
  imageUrl,
  year,
  role,
  viewButton,
  viewButtonRef,
  githubButtonRef,
}: ProjectCardProps) {
  const pathName = usePathname();
  return (
    <div className="w-80 mb-30 lg:mb-45 md:w-xl lg:w-5xl 2xl:w-6xl h-fit flex flex-col mx-auto justify-center gap-5 xl:flex-row lg:mx-0">
      <div className="w-full flex flex-col p-10 h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] bg-neutral-700 rounded-xl">
        <p className="mb-5 text-sm px-3 py-1 font-semibold w-fit rounded-xl bg-black/85">
          {tag}
        </p>
        <div className="h-full w-full relative rounded-t-xl">
          <Image
            src={imageUrl}
            alt="Project Card Image"
            className="w-full h-full border border-black object-cover object-top rounded-xl"
            fill
          />
        </div>
      </div>
      <div className="w-full md:w-[420px] lg:w-[520px] lg:h-[520px]">
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-2xl">{title}</h2>
          <p className="mt-5 text-white/80">{description}</p>
          <div>
            <p className="border-solid border-b-2 border-neutral-600 py-3">
              PROJECT INFO
            </p>
            <div className="flex justify-between border-solid border-b-2 border-neutral-600 py-3">
              <p>Year</p>
              <p className="text-white/80">{year}</p>
            </div>
            <div className="flex justify-between border-solid border-b-2 border-neutral-600 py-3">
              <p>Role</p>
              <p className="text-white/80">{role}</p>
            </div>
            <div className="flex gap-4 mt-10">
              {viewButton && (
                <Button
                  className={`${pathName.includes('marcus') ? 'bg-[#22c55e]/60 hover:bg-[#22c55e]' : 'bg-violet-500/50 hover:bg-violet-500/80'} cursor-pointer`}
                >
                  <Link
                    href={viewButtonRef}
                    className="flex items-center gap-1.5"
                  >
                    View Project
                    <GoArrowUpRight size={20} />
                  </Link>
                </Button>
              )}
              <Button
                variant="link"
                className={`${pathName.includes('marcus') ? ' text-[#22c55e]/80 hover:text-[#22c55e]' : 'text-violet-500/80 hover:text-violet-500'} flex items-center transition underline underline-offset-4`}
              >
                <Link
                  href={githubButtonRef}
                  className="flex items-center gap-1.5"
                >
                  See on Github
                  <FaGithub />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
