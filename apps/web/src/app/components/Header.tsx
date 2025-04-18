import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaRegUser } from 'react-icons/fa';

interface HeaderProps {
  title: string;
  portfolioRef: string;
  resumeRef: string;
  contactRef: string;
  githubRef: string;
  linkedInRef: string;
  instagramRef: string;
}

function Header({
  title,
  portfolioRef,
  resumeRef,
  contactRef,
  githubRef,
  linkedInRef,
  instagramRef,
}: HeaderProps) {
  return (
    <header className="w-full h-14 px-8 flex">
      <div className="flex h-full">
        <Link className="my-auto mr-5 font-bold whitespace-nowrap" href={title}>
          marcus-santos
        </Link>
        <nav className="text-sm font-semibold text-white/60 my-auto space-x-5">
          <Link
            className="hover:text-violet-600 transition"
            href={portfolioRef}
          >
            Portfolio
          </Link>
          <Link className="hover:text-violet-600 transition" href={resumeRef}>
            Resume
          </Link>
          <Link className="hover:text-violet-600 transition" href={contactRef}>
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex justify-end w-full my-auto space-x-2">
        <Link
          href={''}
          className="hover:bg-violet-600/50 p-2 hover:rounded transition"
        >
          <FaRegUser />
        </Link>
        <Link
          href={githubRef}
          className="hover:bg-violet-600/50 p-2 hover:rounded transition"
        >
          <FaGithub />
        </Link>
        <Link
          href={linkedInRef}
          className="hover:bg-violet-600/50 p-2 hover:rounded transition"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href={instagramRef}
          className="hover:bg-violet-600/50 p-2 hover:rounded transition"
        >
          <FaInstagram />
        </Link>
      </div>
    </header>
  );
}

export default Header;
