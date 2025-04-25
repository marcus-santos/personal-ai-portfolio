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
import ContactForm from './ContactForm';

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
  return (
    <header className="sticky top-0 z-50 w-[1472px] h-14 px-8 flex m-auto">
      <div className="flex h-full">
        <Link
          className="text-lg my-3 mr-10 font-semibold whitespace-nowrap"
          href={titleRef}
        >
          {title}
        </Link>
        <nav className="text-sm font-medium text-white/60 my-auto space-x-6 whitespace-nowrap">
          <Link
            className={`hover:text-[#22c55e] transition`}
            href={portfolioRef}
          >
            Works
          </Link>
          <Link className={`hover:text-[#22c55e] transition"`} href={resumeRef}>
            Resume
          </Link>
          <ContactForm>
            <Button
              variant={'link'}
              className={`hover:text-[#22c55e] transition cursor-pointer p-0`}
            >
              Contact
            </Button>
          </ContactForm>
        </nav>
      </div>
      <div className="flex justify-end w-full my-auto space-x-2">
        <Link
          href={transfer}
          className={`hover:bg-[#22c55e]/70 p-2 hover:rounded transition`}
        >
          <FaRegUser size={18} />
        </Link>
        <Link
          href={githubRef}
          className={`hover:bg-[#22c55e]/70 p-2 hover:rounded transition`}
        >
          <FaGithub size={18} />
        </Link>
        <Link
          href={linkedInRef}
          className={`hover:bg-[#22c55e]/70 p-2 hover:rounded transition`}
        >
          <FaLinkedinIn size={18} />
        </Link>
        <Link
          href={instagramRef}
          className={`hover:bg-[#22c55e]/70 p-2 hover:rounded transition`}
        >
          <FaInstagram size={18} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
