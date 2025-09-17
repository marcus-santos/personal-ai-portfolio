import React from 'react';
import type { Experience } from '@/types/portfolio';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  const startDate = formatDate(experience.startDate);
  const endDate = experience.current
    ? 'Present'
    : experience.endDate
      ? formatDate(experience.endDate)
      : 'Present';

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold">{experience.position}</h3>
      <p className="text-white/80">
        {experience.company} – {startDate} to {endDate}
      </p>
      <p className="text-white/60 text-sm">{experience.description}</p>
      {experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-neutral-700 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
