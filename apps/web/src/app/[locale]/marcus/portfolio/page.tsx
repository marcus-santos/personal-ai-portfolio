'use client';

import Header from '@/app/[locale]/components/Header';
import ProjectCard from '@/app/[locale]/components/ProjectCard';
import { marcus } from '@/app/[locale]/types/header-user';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

function Page() {
  const t = useTranslations('Portfolio');

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Header {...marcus} />
      <main className="md:w-4/5 lg:w-2/3 md:px-8 flex flex-col m-auto">
        <motion.div
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-17 w-4/5 mx-auto md:w-full md:m-0"
        >
          <h1 className="text-3xl font-semibold mb-3 text-center sm:text-start">
            {t('title')}
          </h1>
          <p className="text-white/80 lg:w-1/2">{t('subtitle')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col"
        >
          <ProjectCard
            tag={t('card.one.tag')}
            title={t('card.one.title')}
            description={t('card.one.description')}
            imageUrl={'/artesaos-project.svg'}
            year={'2025'}
            role={t('card.one.role')}
            viewButton={true}
            githubButtonRef={''}
            viewButtonRef={''}
          />
          <ProjectCard
            tag={t('card.one.tag')}
            title={t('card.one.title')}
            description={t('card.one.description')}
            imageUrl={'/artesaos-project.svg'}
            year={'2025'}
            role={t('card.one.role')}
            viewButton={true}
            githubButtonRef={''}
            viewButtonRef={''}
          />
        </motion.div>
      </main>
    </div>
  );
}

export default Page;
