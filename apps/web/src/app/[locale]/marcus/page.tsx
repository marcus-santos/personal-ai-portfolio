'use client';

import Header from '../components/Header';
import { marcus } from '../types/header-user';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

function Page() {
  const t = useTranslations('Home');
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 0 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col h-screen">
      <Header {...marcus} />
      <main className={`flex w-2/3 mx-auto h-full my-40`}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 my-auto w-full lg:w-1/2"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-bold flex items-center gap-2"
          >
            {t('title')}{' '}
            <motion.span
              className="inline origin-[70%_70%] mr-15 lg:mr-0"
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 3,
                delay: 0.5,
              }}
            >
              👋
            </motion.span>
          </motion.h1>

          <motion.p variants={item} className="text-white/70">
            {t('subtitle')}
            <br /> {t('description')}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col md:flex-row gap-4 mt-6 items-center"
          >
            <Button asChild className="bg-[#22c55e]/60 hover:bg-[#22c55e]/80">
              <Link href={marcus.chatRef}>{t('botButton')}</Link>
            </Button>
            <Link
              href={marcus.portfolioRef}
              className="hover:text-[#22c55e] transition"
            >
              {t('portfolioButton')}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="w-1/2 h-full max-h-[400px] hidden lg:block my-auto"
        >
          <DotLottieReact
            src="https://lottie.host/a3d417a4-df86-4dc3-8f0a-831687dff82a/jLPCKfdZo1.lottie"
            loop
            autoplay
          />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
