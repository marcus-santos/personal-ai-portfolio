'use client';

// LEGACY HOOK - Use specific hooks instead:
// - useProjectsData() for projects
// - useExperiencesData() for experiences
// - useEducationData() for education

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import type { PortfolioData, LocalizedPortfolioData } from '@/types/portfolio';

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale() as 'en' | 'pt';

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const response = await fetch('/data/portfolio.json');

        if (!response.ok) {
          throw new Error('Failed to load portfolio data');
        }

        const portfolioData: LocalizedPortfolioData = await response.json();
        setData(portfolioData[locale] || portfolioData.en);
      } catch (err) {
        console.error('Error loading portfolio data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [locale]);

  return { data, loading, error };
}
