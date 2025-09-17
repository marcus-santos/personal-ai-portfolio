'use client';

import Header from '@/components/common/header';
import ProjectCard from '@/components/project-card';
import { useProjectsData } from '@/hooks/use-projects-data';
import { lukas } from '@/types/header-user';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

function Page() {
  const t = useTranslations('Portfolio');
  const { projects, loading, error } = useProjectsData();

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col justify-center">
        <Header {...lukas} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" />
            <p>Loading...</p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col justify-center">
        <Header {...lukas} />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-red-400">Error: {error}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Header {...lukas} />
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-8 py-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default Page;
