'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import type { Education } from '@/types/portfolio';

interface LocalizedEducation {
  en: Education[];
  pt: Education[];
}

export function useEducationData() {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale() as 'en' | 'pt';

  useEffect(() => {
    async function loadEducation() {
      try {
        setLoading(true);
        const response = await fetch('/data/education.json');

        if (!response.ok) {
          throw new Error('Failed to load education data');
        }

        const educationData: LocalizedEducation = await response.json();
        setEducation(educationData[locale] || educationData.en);
      } catch (err) {
        console.error('Error loading education data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadEducation();
  }, [locale]);

  return { education, loading, error };
}
