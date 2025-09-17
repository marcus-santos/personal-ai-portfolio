'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import type { Experience } from '@/types/portfolio';

interface LocalizedExperiences {
  en: Experience[];
  pt: Experience[];
}

export function useExperiencesData() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale() as 'en' | 'pt';

  useEffect(() => {
    async function loadExperiences() {
      try {
        setLoading(true);
        const response = await fetch('/data/experiences.json');

        if (!response.ok) {
          throw new Error('Failed to load experiences data');
        }

        const experiencesData: LocalizedExperiences = await response.json();
        setExperiences(experiencesData[locale] || experiencesData.en);
      } catch (err) {
        console.error('Error loading experiences data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadExperiences();
  }, [locale]);

  return { experiences, loading, error };
}
