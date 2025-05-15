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
    <div className="w-fit h-[576px] flex mb-24">
      <div className="min-w-xl h-full bg-neutral-700 rounded-xl flex flex-col">
        <div>
          <p className="bg-black/85 mt-4 ml-4 p-2 rounded-md inline-block text-sm">
            {tag}
          </p>
        </div>
        <div className="border-3 border-solid border-neutral-900 w-[486px] h-80 m-auto rounded-2xl relative">
          <Image
            className=" max-w-[486px] max-h-[316px] rounded-2xl object-cover object-top "
            src={imageUrl}
            alt={''}
            fill
          />
        </div>
      </div>
      <div className="ml-12 mt-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl ">{title}</h2>
          <p className="mt-10 text-[18px] text-white/80">{description}</p>
        </div>
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
  );
}

export default ProjectCard;
