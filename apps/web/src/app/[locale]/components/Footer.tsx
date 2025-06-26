'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

function Footer() {
    const t = useTranslations('Footer');
  return (
    <div>
      <footer className="w-2/3 mx-auto py-5 flex flex-col-reverse text-center lg:text-start lg:flex-row justify-between text-white/60 text-sm border-white/10">
        <p>{t('copyright')}</p>
        <p className="mt-2">
          {t('builtWith')}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
