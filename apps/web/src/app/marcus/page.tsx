'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { marcus } from '../types/header-user';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function page() {
  const [showContent, setShowContent] = useState(false);
  const [showH1, setShowH1] = useState(false);
  const [showP, setShowP] = useState(false);
  const [showImg, setShowImg] = useState(false);

  useEffect(() => {
    // Sequência de animações: h1 -> p -> imagem/botão
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setShowContent(true), 200));
    timers.push(setTimeout(() => setShowH1(true), 400));
    timers.push(setTimeout(() => setShowP(true), 800));
    timers.push(setTimeout(() => setShowImg(true), 1000));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header {...marcus} />
      <div className={`flex w-2/3 mx-auto h-full my-40`}>
        <div className="flex flex-col m-auto">
          <h1
            className={`text-4xl font-bold transition-all duration-700
              ${showH1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
            `}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            Hi, I&apos;m Marcus 👋
          </h1>
          <p
            className={`text-white/70 mt-2 max-w-xl transition-all duration-700
              ${showP ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
            `}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            Full-stack developer focused on building scalable and accessible
            digital experiences.
          </p>

          <div
            className={`mt-6 flex gap-4 items-center transition-all duration-700
              ${showImg ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
            `}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <Button asChild className="bg-[#22c55e]/60 hover:bg-[#22c55e]/80">
              <Link href={marcus.chatRef}>Ask MarcusBot</Link>
            </Button>
            <Link
              href={marcus.portfolioRef}
              className="hover:text-[#22c55e] transition"
            >
              See my work
            </Link>
          </div>
        </div>
        <div
          className={`max-w-[450px] w-full h-full m-auto relative min-h-[450px] hidden lg:block transition-all duration-700
            ${showImg ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
          `}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <DotLottieReact
            src="https://lottie.host/a3d417a4-df86-4dc3-8f0a-831687dff82a/jLPCKfdZo1.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
