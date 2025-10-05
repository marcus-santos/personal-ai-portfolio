'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiMenu2Fill } from 'react-icons/ri';
import ContactForm from './contact-form';

interface HeaderProps {
  title: string;
  titleRef: string;
  chatRef: string;
  portfolioRef: string;
  aboutRef: string;
  cvRef: string;
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
  cvRef,
  githubRef,
  linkedInRef,
  instagramRef,
}: HeaderProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const t = useTranslations('Header');

  return (
    <div className="bg-[#121214]/85 backdrop-blur-md sticky top-0 z-50">
      <header className="w-full max-w-[1472px] h-14 px-8 flex mx-auto ">
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
                    className={'hover:text-[#22c55e] transition'}
                    href={chatRef}
                  >
                    {t('chat')}
                  </Link>
                  <Link
                    className={'hover:text-[#22c55e] transition'}
                    href={portfolioRef}
                  >
                    {t('portfolio')}
                  </Link>
                  <Link
                    className={'hover:text-[#22c55e] transition'}
                    href={aboutRef}
                  >
                    {t('about')}
                  </Link>
                  <SheetClose asChild>
                    <button
                      type="button"
                      className={
                        'hover:text-[#22c55e] transition cursor-pointer p-0'
                      }
                      onClick={() => setContactOpen(true)}
                    >
                      {t('contact')}
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
            <Link className={'hover:text-[#22c55e] transition'} href={chatRef}>
              {t('chat')}
            </Link>
            <Link
              className={'hover:text-[#22c55e] transition'}
              href={portfolioRef}
            >
              {t('portfolio')}
            </Link>
            <Link className={'hover:text-[#22c55e] transition'} href={aboutRef}>
              {t('about')}
            </Link>
            <Button
              onClick={() => setContactOpen(true)}
              variant={'link'}
              className={'hover:text-[#22c55e] transition  cursor-pointer p-0'}
            >
              {t('contact')}
            </Button>
          </nav>
          <ContactForm
            api={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333'}/contact`}
            open={contactOpen}
            onOpenChange={setContactOpen}
          />
        </div>
        <div className="flex justify-end w-full my-auto space-x-2 items-center">
          <Link
            href={cvRef}
            className={
              'hover:bg-[#22c55e]/50 p-2 hover:rounded transition font-semibold'
            }
          >
            CV
          </Link>
          <Link
            href={githubRef}
            className={'hover:bg-[#22c55e]/50 transition p-2 hover:rounded '}
          >
            <FaGithub size={18} />
          </Link>
          <Link
            href={linkedInRef}
            className={'hover:bg-[#22c55e]/50 p-2 hover:rounded transition'}
          >
            <FaLinkedinIn size={18} />
          </Link>
          <Link
            href={instagramRef}
            className={'hover:bg-[#22c55e]/50 transition p-2 hover:rounded'}
          >
            <FaInstagram size={18} />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
