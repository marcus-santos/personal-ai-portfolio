'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegUser } from 'react-icons/fa';
import { Dialog, DialogHeader } from '@/components/ui/dialog';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  title: string;
  titleRef: string;
  portfolioRef: string;
  resumeRef: string;
  transfer: string;
  githubRef: string;
  linkedInRef: string;
  instagramRef: string;
}

function Header({
  title,
  titleRef,
  portfolioRef,
  resumeRef,
  transfer,
  githubRef,
  linkedInRef,
  instagramRef,
}: HeaderProps) {
  const pathName = usePathname();

  return (
    <header className="w-full h-14 px-8 flex">
      <div className="flex h-full">
        <Link
          className="text-lg text-neutral-100 my-auto mr-6 font-bold whitespace-nowrap"
          href={titleRef}
        >
          {title}
        </Link>
        <nav className="text-sm font-medium text-white/60 my-auto space-x-6 whitespace-nowrap">
          <Link
            className={`${pathName.includes('marcus') ? 'hover:text-violet-500 transition' : 'hover:text-blue-500 transition'}`}
            href={portfolioRef}
          >
            Portfolio
          </Link>
          <Link
            className={`${pathName.includes('marcus') ? 'hover:text-violet-500 transition' : 'hover:text-blue-500 transition'}`}
            href={resumeRef}
          >
            Resume
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={'link'}
                className={`${pathName.includes('marcus') ? 'hover:text-violet-500 transition' : 'hover:text-blue-500 transition'} transition cursor-pointer p-0`}
              >
                Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-sm text-white/80">
                <DialogHeader>
                  <div className="flex justify-between">
                    <DialogTitle className="text-xl">Contact Me</DialogTitle>
                    <DialogClose className="text-xl mr-3 text-white/50 font-normal hover:text-white cursor-pointer">
                      x
                    </DialogClose>
                  </div>
                  <DialogDescription className="my-3">
                    Fill out the form below to get in touch.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <form className="w-full m-1 flex flex-col space-y-5">
                    <input
                      className="w-full p-2 border border-neutral-400 rounded"
                      placeholder="Name"
                    />
                    <input
                      className="w-full p-2 border border-neutral-400 rounded"
                      placeholder="Email"
                      type="email"
                    />
                    <textarea
                      className="w-full size-40 resize-none p-2 border border-neutral-400 rounded"
                      placeholder="Message"
                    />
                    <Button type="submit" className="mt-4">
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
      <div className="flex justify-end w-full my-auto space-x-2">
        <Link
          href={transfer}
          className={`${pathName.includes('marcus') ? 'hover:bg-violet-500/50 transition' : 'hover:bg-blue-500/50 transition'} p-2 hover:rounded transition`}
        >
          <FaRegUser size={18} />
        </Link>
        <Link
          href={githubRef}
          className={`${pathName.includes('marcus') ? 'hover:bg-violet-500/50 transition' : 'hover:bg-blue-500/50 transition'} p-2 hover:rounded transition`}
        >
          <FaGithub size={18} />
        </Link>
        <Link
          href={linkedInRef}
          className={`${pathName.includes('marcus') ? 'hover:bg-violet-500/50 transition' : 'hover:bg-blue-500/50 transition'} p-2 hover:rounded transition`}
        >
          <FaLinkedinIn size={18} />
        </Link>
        <Link
          href={instagramRef}
          className={`${pathName.includes('marcus') ? 'hover:bg-violet-500/50 transition' : 'hover:bg-blue-500/50 transition'} p-2 hover:rounded transition`}
        >
          <FaInstagram size={18} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
