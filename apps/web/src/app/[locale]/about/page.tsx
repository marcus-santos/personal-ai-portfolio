'use client';

import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import EducationCard from '@/components/education-card';
import ExperienceCard from '@/components/experience-card';
import StackSection from '@/components/stack-section';
import { Button } from '@/components/ui/button';
import { useEducationData } from '@/hooks/use-education-data';
import { useExperiencesData } from '@/hooks/use-experiences-data';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { LiaDownloadSolid } from 'react-icons/lia';
import marcus from '../../../types/header-user';

function Page() {
  const t = useTranslations('About');
  const {
    experiences,
    loading: experiencesLoading,
    error: experiencesError,
  } = useExperiencesData();
  const {
    education,
    loading: educationLoading,
    error: educationError,
  } = useEducationData();

  const loading = experiencesLoading || educationLoading;
  const error = experiencesError || educationError;

  if (loading) {
    return (
      <div className="flex flex-col h-screen">
        <Header {...marcus} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" />
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-screen">
        <Header {...marcus} />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-red-400">Error: {error}</p>
        </main>
        <Footer />
      </div>
    );
  }
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
            <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>

            <p className="text-lg font-semibold mb-4">{t('subtitle')}</p>

            <p className="mb-4 text-white/80">{t('description')}</p>
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
                {t('resumeButton')}
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
            {t('stackSection.title')}
          </h2>
          <p className="text-white/80 text-center">
            {t('stackSection.subtitle')}
          </p>
          <StackSection />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="py-20 border-b-2 border-neutral-700"
        >
          <h2 className="text-2xl font-semibold mb-1 text-center">
            {t('learningSection.title')}
          </h2>
          <p className="text-white/80 text-center">
            {t('learningSection.subtitle')}
          </p>
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 py-20">
            <div className="flex flex-col mx-auto gap-5">
              {education
                .filter((educationItem) => educationItem.type === 'degree')
                .map((educationItem) => (
                  <EducationCard
                    key={educationItem.id}
                    education={educationItem}
                  />
                ))}
            </div>
            <div className="flex flex-col mx-auto gap-5">
              {education
                .filter((educationItem) => educationItem.type === 'certificate')
                .map((educationItem) => (
                  <EducationCard
                    key={educationItem.id}
                    education={educationItem}
                  />
                ))}
            </div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="py-20"
        >
          <h2 className="text-2xl font-semibold mb-1">
            {t('experienceSection.title')}
          </h2>
          <p className="text-white/80">{t('experienceSection.subtitle')} </p>
          <div className="flex justify-between py-10">
            <div className="mt-8 border-l-2 border-[#44883e] pl-6 space-y-6">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
              <div>
                <p className="text-white/80">
                  {t('experienceSection.linkPresentation')}{' '}
                  <Link
                    href={'/marcus/portfolio'}
                    className="text-green-600 hover:text-green-500 transition underline underline-offset-2"
                  >
                    {t('experienceSection.link')}
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

export default Page;
