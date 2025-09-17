'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import type { Project } from '@/types/portfolio';

interface LocalizedProjects {
  en: Project[];
  pt: Project[];
}

export function useProjectsData() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale() as 'en' | 'pt';

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const response = await fetch('/data/projects.json');

        if (!response.ok) {
          throw new Error('Failed to load projects data');
        }

        const projectsData: LocalizedProjects = await response.json();
        setProjects(projectsData[locale] || projectsData.en);
      } catch (err) {
        console.error('Error loading projects data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, [locale]);

  return { projects, loading, error };
}
