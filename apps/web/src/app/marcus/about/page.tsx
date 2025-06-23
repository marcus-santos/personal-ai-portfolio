'use client';

import Header from '@/app/components/Header';
import { marcus } from '@/app/types/header-user';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { LiaDownloadSolid } from 'react-icons/lia';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNestjs, SiExpress } from 'react-icons/si';
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import AboutCard from '@/app/components/AboutCard';
import Link from 'next/link';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';

function page() {
  return (
    <div className="flex flex-col">
      <Header {...marcus} />
      <main className="w-2/3 flex flex-col mx-auto py-20">
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center pb-10 border-b-2 border-neutral-700"
        >
          <div className="flex justify-center w-full h-full mx-auto relative min-h-[250px]">
            <Image
              fill
              src="/about-image.svg"
              alt="Marcus Santos - About Me"
              className="max-w-[400px] w-full h-full opacity-80"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">ABOUT ME</h2>

            <p className="text-lg font-semibold mb-4">
              I’m a front-end developer based in Brazil with an academic
              foundation in systems analysis and a strong focus on modern web
              technologies.
            </p>

            <p className="mb-4 text-white/80">
              As a student at IFSP, I have been working across the full stack
              using technologies like React, Next.js, Node.js, and Tailwind CSS,
              always aiming to build organized, accessible, and scalable digital
              experiences. I contribute to both front-end and back-end
              development.
            </p>
            <Button
              asChild
              className="bg-[#22c55e]/60 hover:bg-[#22c55e]/80 cursor-pointer"
            >
              <a
                href="https://drive.google.com/file/d/1CzSV3Y3U8ArzGAYWWkQ7esQF7itGF5KZ/view?usp=drive_link"
                target="_blank"
                className="flex items-center gap-1.5"
                rel="noreferrer"
              >
                Download Resume
                <LiaDownloadSolid className="mt-0.5" />
              </a>
            </Button>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-20 border-b-2 border-neutral-700"
        >
          <h2 className="text-2xl font-semibold mb-1 text-center">
            MY TECH STACK
          </h2>
          <p className="text-white/80 text-center">
            Technologies i&apos;ve been working with recently
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-14 w-1/2 mx-auto my-22">
            <Image
              src={'/html-5-svgrepo-com.svg'}
              alt={'html-icon'}
              width={50}
              height={50}
              className="min-w-[50px] min-h-[50px]"
            />
            <Image
              src={'/css-3-svgrepo-com.svg'}
              alt={'html-icon'}
              width={50}
              height={50}
              className="min-w-[50px] min-h-[50px]"
            />
            <FaReact size={50} className="text-[#58C4DC]" />
            <Image
              src={'/nextjs-svgrepo-com.svg'}
              alt={'nextjs-icon'}
              width={50}
              height={50}
              className="min-w-[50px] min-h-[50px]"
            />
            <RiTailwindCssFill size={50} className="text-[#F50057]" />
            <BiLogoTypescript size={50} className="text-[#3178c6]" />
            <RiJavascriptFill size={50} className="text-[#F7DF1E]" />
            <FaNodeJs size={50} className="text-[#44883e]" />
            <SiExpress size={50} />
            <SiNestjs size={50} className="text-[#F50057]" />
            <Image
              src={'/java-svgrepo-com.svg'}
              alt={'java-icon'}
              width={50}
              height={50}
              className="min-w-[50px] min-h-[50px]"
            />
            <Image
              src={'/python-svgrepo-com.svg'}
              alt={'python-icon'}
              width={50}
              height={50}
              className="min-w-[50px] min-h-[50px]"
            />
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="py-20 border-b-2 border-neutral-700"
        >
          <h2 className="text-2xl font-semibold mb-1 text-center">
            LEARNING PATH
          </h2>
          <p className="text-white/80 text-center">
            Courses and institutions that built my path in technology.
          </p>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 py-20">
            <div className="flex flex-col mx-auto gap-5">
              <AboutCard
                graduation={'Technologist of Computer Science'}
                institution={'Federal Institute of São Paulo'}
                description={
                  'Higher education in systems development, software architecture, and databases.'
                }
                imageUrl={'/graduation.svg'}
                beginningYear={'2023'}
                endYear={'2025'}
              />
              <AboutCard
                graduation={'Computer Technician'}
                institution={'Tancredo de Almeida Neves State School'}
                description={
                  'Technical high school program focused on computer science fundamentals.'
                }
                imageUrl={'/graduation.svg'}
                beginningYear={'2018'}
                endYear={'2020'}
              />
            </div>
            <div className="flex flex-col mx-auto gap-5" />
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="py-20"
        >
          <h2 className="text-2xl font-semibold mb-1">MY EXPERIENCE</h2>
          <p className="text-white/80">
            Take a look at my professional journey timeline.
          </p>
          <div className="flex justify-between py-10">
            <div className="mt-8 border-l-2 border-[#44883e] pl-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Front-end Developer</h3>
                <p className="text-white/80">Criarte Project – 2025</p>
                <p className="text-white/60 text-sm">
                  Worked with React, Tailwind, and Shadcn to develop and improve
                  internal platform features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Technical Assistant</h3>
                <p className="text-white/80">Local Business – 2023</p>
                <p className="text-white/60 text-sm">
                  Provided tech support, assisted with system configurations,
                  and helped maintain digital workflows.
                </p>
              </div>
              <div>
                <p className="text-white/80">
                  Want to see what I&apos;ve built?{' '}
                  <Link
                    href={'/marcus/portfolio'}
                    className="text-green-600 hover:text-green-500 transition underline underline-offset-2"
                  >
                    Click here.
                  </Link>
                </p>
              </div>
            </div>
            <div className="pr-1 hidden lg:block">
              <Image
                src={'/undraw_building-a-website_1wrp.svg'}
                alt={'experience-image'}
                width={220}
                height={220}
              />
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default page;
