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

function PC() {
  return (
    <div className="w-80 md:w-xl 2xl:w-6xl h-fit flex flex-col justify-center mx-auto md:flex-row lg:mx-0">
      <div className="w-full h-80 md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] 2xl:w-[600px] 2xl:h-[600px] bg-neutral-700 rounded-xl mx-auto ">
        <p className="ml-5 my-3 text-sm px-3 py-1 font-semibold inline-block rounded-xl bg-black/85">
          Challenge
        </p>
      </div>
    </div>
  );
}

export default PC;
