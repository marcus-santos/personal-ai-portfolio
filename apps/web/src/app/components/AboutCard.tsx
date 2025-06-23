import Image from 'next/image';

interface AboutCardProps {
  graduation: string;
  institution: string;
  description: string;
  imageUrl: string;
  beginningYear: string;
  endYear: string;
}

function AboutCard({
  graduation,
  institution,
  description,
  imageUrl,
  beginningYear,
  endYear,
}: AboutCardProps) {
  return (
    <div className="flex flex-col md:flex-row min-w-[250px] max-w-[250px] md:min-w-[420px] md:max-w-[620px] h-fit bg-white/10 rounded-xl p-5 mb-5">
      <div className="flex items-center justify-center min-w-[50px] min-h-[50px] pb-5 md:pb-0 mr-5">
        <Image
          src={imageUrl}
          alt={'learning-path-icon'}
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">{graduation}</h3>
        <p className="text-white/80">{institution}</p>
        <p className="text-white/80">{description}</p>
        <p className="text-white/80">
          {beginningYear} - {endYear}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
