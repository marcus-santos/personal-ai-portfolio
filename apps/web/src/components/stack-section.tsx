import React from 'react';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { RiTailwindCssFill, RiJavascriptFill } from 'react-icons/ri';
import { SiExpress, SiNestjs } from 'react-icons/si';
import Image from 'next/image';

function stackSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-14 w-1/2 mx-auto my-22">
      <Image
        src={'/html-5-svgrepo-com.svg'}
        alt={'html-icon'}
        width={50}
        height={50}
        className="min-w-[50px] min-h-[50px]"
      />
      <Image
        src={'/css-3-svgrepo-com.svg'}
        alt={'html-icon'}
        width={50}
        height={50}
        className="min-w-[50px] min-h-[50px]"
      />
      <FaReact size={50} className="text-[#58C4DC]" />
      <Image
        src={'/nextjs-svgrepo-com.svg'}
        alt={'nextjs-icon'}
        width={50}
        height={50}
        className="min-w-[50px] min-h-[50px]"
      />
      <RiTailwindCssFill size={50} className="text-[#F50057]" />
      <BiLogoTypescript size={50} className="text-[#3178c6]" />
      <RiJavascriptFill size={50} className="text-[#F7DF1E]" />
      <FaNodeJs size={50} className="text-[#44883e]" />
      <SiExpress size={50} />
      <SiNestjs size={50} className="text-[#F50057]" />
      <Image
        src={'/java-svgrepo-com.svg'}
        alt={'java-icon'}
        width={50}
        height={50}
        className="min-w-[50px] min-h-[50px]"
      />
      <Image
        src={'/python-svgrepo-com.svg'}
        alt={'python-icon'}
        width={50}
        height={50}
        className="min-w-[50px] min-h-[50px]"
      />
    </div>
  );
}

export default stackSection;
