import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center w-screen justify-center p-8">
      <h1 className="absolute top-10 sm:top-24 md:top-40 text-base sm:text-2xl font-bold text-white text-center">
        Você quer conversar com o assistente virtual de qual desenvolvedor?
      </h1>

      <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-y-4 sm:gap-x-8">
        <Link href="/marcus" className="group">
          <div
            className={
              'flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground shadow transition-all duration-200'
            }
          >
            <div className="relative h-48 w-48 sm:h-80 sm:w-96 overflow-hidden">
              <Image
                src="/images/marcus-santos.jpg"
                alt="Dev Marcus Santos photo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-2 text-center bg-slate-500/50 group-hover:bg-[#22c55e]/50 transition-colors duration-200">
              <h3 className="text-sm font-semibold text-gray-800">
                Marcus Santos
              </h3>
            </div>
          </div>
        </Link>

        <Link href="/lukas" className="group">
          <div
            className={
              'flex flex-col overflow-hidden rounded-xl bg-card text-card-foreground shadow transition-all duration-200'
            }
          >
            <div className="relative h-48 w-48 sm:h-80 sm:w-96 overflow-hidden">
              <Image
                src="/images/lukas-campos.jpg"
                alt="Dev Lukas Campos photo"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-2 text-center bg-slate-500/50 group-hover:bg-blue-500/50 transition-colors duration-200">
              <h3 className="text-sm font-semibold text-gray-800">
                Lukas Campos
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
