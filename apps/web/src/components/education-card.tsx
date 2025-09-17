import React from 'react';
import Image from 'next/image';
import type { Education } from '@/types/portfolio';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
    });
  };

  const startYear = formatDate(education.startDate);
  const endYear = education.endDate ? formatDate(education.endDate) : 'Present';

  return (
    <div className="flex flex-col min-w-full gap-5 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-4">
        {education.image && (
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={education.image}
              alt={education.degree}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-0.5">{education.degree}</h3>
          <p className="text-white/80 mb-2">{education.institution}</p>
          <p className="text-white/70 text-sm">{education.description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-white/10">
        <span className="text-xs text-white/50 uppercase">
          {education.type}
        </span>
        <span className="text-sm text-white/60">
          {startYear} - {endYear}
        </span>
      </div>
    </div>
  );
}

export default EducationCard;
