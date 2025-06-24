'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegUser } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import ContactForm from './ContactForm';
import {
  SheetTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { RiMenu2Fill } from 'react-icons/ri';
import { useState } from 'react';

interface HeaderProps {
  title: string;
  titleRef: string;
  chatRef: string;
  portfolioRef: string;
  aboutRef: string;
  transfer: string;
  githubRef: string;
  linkedInRef: string;
  instagramRef: string;
}

function Header({
  title,
  titleRef,
  chatRef,
  portfolioRef,
  aboutRef,
  transfer,
  githubRef,
  linkedInRef,
  instagramRef,
}: HeaderProps) {
  const pathName = usePathname();
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="bg-[#121214]/90 sticky top-0 z-50">
      <header className=" w-full max-w-[1472px] h-14 px-8 flex mx-auto ">
        <div className="flex h-full">
          <Sheet>
            <SheetTrigger className="sm:hidden">
              <RiMenu2Fill size={18} />
            </SheetTrigger>
            <SheetContent side="left" className="bg-primary">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    className="text-lg my-3 mr-10 text-white/90 font-semibold whitespace-nowrap hover:scale-110 transition"
                    href={titleRef}
                  >
                    {title}
                  </Link>
                </SheetTitle>
                <SheetDescription className="flex flex-col p-5 items-start text-sm font-medium text-white/90 my-auto gap-y-5 whitespace-nowrap">
                  <Link
                    className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'}`}
                    href={chatRef}
                  >
                    Chat
                  </Link>
                  <Link
                    className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'}`}
                    href={portfolioRef}
                  >
                    Portfolio
                  </Link>
                  <Link
                    className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'}`}
                    href={aboutRef}
                  >
                    About
                  </Link>
                  <SheetClose asChild>
                    <button
                      type="button"
                      className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'} transition cursor-pointer p-0`}
                      onClick={() => setContactOpen(true)}
                    >
                      Contact
                    </button>
                  </SheetClose>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Link
            className="hidden sm:block text-lg my-3 mr-10 font-semibold whitespace-nowrap hover:scale-110 transition"
            href={titleRef}
          >
            {title}
          </Link>
          <nav className="hidden sm:block text-sm font-medium text-white/60 my-auto space-x-6 whitespace-nowrap">
            <Link
              className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'}`}
              href={chatRef}
            >
              Chat
            </Link>
            <Link
              className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'}`}
              href={portfolioRef}
            >
              Portfolio
            </Link>
            <Link
              className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'}`}
              href={aboutRef}
            >
              About
            </Link>
            <Button
              onClick={() => setContactOpen(true)}
              variant={'link'}
              className={`${pathName.includes('marcus') ? 'hover:text-[#22c55e] transition' : 'hover:text-violet-500 transition'} transition cursor-pointer p-0`}
            >
              Contact
            </Button>
          </nav>
          <ContactForm
            api={'http://localhost:3333/contact'}
            open={contactOpen}
            onOpenChange={setContactOpen}
          />
        </div>
        <div className="flex justify-end w-full my-auto space-x-2">
          <Link
            href={transfer}
            className={`${pathName.includes('marcus') ? 'hover:bg-[#22c55e]/50 transition' : 'hover:bg-violet-500/50 transition'} p-2 hover:rounded transition`}
          >
            <FaRegUser size={18} />
          </Link>
          <Link
            href={githubRef}
            className={`${pathName.includes('marcus') ? 'hover:bg-[#22c55e]/50 transition' : 'hover:bg-violet-500/50 transition'} p-2 hover:rounded transition`}
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href={linkedInRef}
            className={`${pathName.includes('marcus') ? 'hover:bg-[#22c55e]/50 transition' : 'hover:bg-violet-500/50 transition'} p-2 hover:rounded transition`}
          >
            <FaLinkedinIn size={18} />
          </Link>
          <Link
            href={instagramRef}
            className={`${pathName.includes('marcus') ? 'hover:bg-[#22c55e]/50 transition' : 'hover:bg-violet-500/50 transition'} p-2 hover:rounded transition`}
          >
            <FaInstagram size={18} />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
