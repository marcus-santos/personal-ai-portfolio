import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import ProjectCard from '../components/ProjectCard';

function page() {
  return (
    <div className="w-screen h-full flex flex-col justify-center">
      <Header
        title={'marcus-santos'}
        titleRef={'/marcus'}
        portfolioRef={'./works'}
        resumeRef={'marcus/resume'}
        transfer={'/lukas'}
        githubRef={'https://www.github.com/marcus-santos'}
        linkedInRef={'https://www.linkedin.com/in/marcus-vinicius-csantos'}
        instagramRef={'https://www.instagram.com/marcus.csantos/'}
      />
      <main className="w-2/3 px-8 flex flex-col m-auto">
        <div className="py-17 w-xl">
          <h1 className="text-3xl font-semibold mb-3">FEATURED PROJECTS</h1>
          <p className="text-white/80">
            Here are some of the selected projects that showcase my passion
            developing personalizes solution on back or frontend
          </p>
        </div>
        <div className="w-full flex justify-center">
          <ProjectCard />
        </div>
      </main>
    </div>
  );
}

export default page;
