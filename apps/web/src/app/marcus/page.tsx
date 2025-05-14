import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

function page() {
  return (
    <div className="w-screen h-full flex flex-col justify-center">
      <Header
        title={'marcus-santos'}
        titleRef={'/marcus'}
        portfolioRef={'./marcus/portfolio'}
        resumeRef={'marcus/resume'}
        transfer={'/lukas'}
        githubRef={'https://www.github.com/marcus-santos'}
        linkedInRef={'https://www.linkedin.com/in/marcus-vinicius-csantos'}
        instagramRef={'https://www.instagram.com/marcus.csantos/'}
      />
      <main className="w-2/3 py-10 px-8 flex justify-center">
        <div className="w-1/2 py-12 px-4">
          <h1 className="text-3xl font-bold mb-3">
            HI, I AM
            <br /> MARCUS SANTOS
          </h1>
          <p className="text-lg mb-3">
            Full-stack developer based in São Paulo, fueled by coffee and
            passionate about turning ideas into digital solutions.
          </p>
          <Button
            asChild
            className="cursor-pointer bg-[#22c55e]/70 hover:bg-[#22c55e]/90 mr-5"
          >
            <Link href={'/resume'}>Download Resume</Link>
          </Button>
          <ContactForm>
            <Link
              href={''}
              className="text-white/70 p-2.5 hover:bg-white/20 transition rounded-lg"
            >
              Contact Me
            </Link>
          </ContactForm>
        </div>
      </main>
    </div>
  );
}

export default page;
