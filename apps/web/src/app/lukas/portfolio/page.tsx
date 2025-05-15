import Header from '@/app/components/Header';
import ProjectCard from '@/app/components/ProjectCard';
import { lukas } from '@/app/types/header-user';

function page() {
  return (
    <div className="w-screen h-full flex flex-col justify-center">
      <Header {...lukas} />
      <main className="w-2/3 px-8 flex flex-col m-auto">
        <div className="py-17 w-xl">
          <h1 className="text-3xl font-semibold mb-3">FEATURED PROJECTS</h1>
          <p className="text-white/80 text-[18px]">
            Here are some of the selected projects that showcase my passion
            developing personalizes solution on back or frontend
          </p>
        </div>
        <div className="w-full flex justify-center">
          <ProjectCard
            tag={'Conceptual Work'}
            title={'Promotional landing page for our favorite show'}
            description={
              'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.'
            }
            imageUrl={'/images/lukas-campos.jpg'}
            year={'2023'}
            role={'Back-end Developer'}
            viewButton={true}
          />
        </div>
      </main>
    </div>
  );
}

export default page;
