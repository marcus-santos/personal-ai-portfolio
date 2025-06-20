import Header from '@/app/components/Header';
import ProjectCard from '@/app/components/ProjectCard';
import { lukas } from '@/app/types/header-user';

function page() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <Header {...lukas} />
      <main className="md:w-4/5 lg:w-2/3 md:px-8 flex flex-col m-auto">
        <div className="py-17 w-4/5 mx-auto md:w-full md:m-0">
          <h1 className="text-3xl font-semibold mb-3 text-center sm:text-start">
            FEATURED PROJECTS
          </h1>
          <p className="text-white/80 lg:w-1/2">
            Here are some selected projects that reflect my passion for
            developing personalized solutions, both on the front end and back
            end.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center">
          <ProjectCard
            tag={'Extension Project'}
            title={'Criarte – Handcrafted Marketplace'}
            description={`This project is an e-commerce platform aimed at artisans, with the goal of valuing handcrafted work and local culture. 
              The concept goes beyond a traditional online store — the system integrates social networking features, allowing each artisan
              to publish their products and also share their personal story.Through this, visitors to the platform not only discover unique
              handmade items, but also learn about the context, journey, and inspirations behind each piece. The platform fosters a connection 
              between the public and the artists, encouraging conscious consumption and cultural recognition. `}
            imageUrl={'/artesaos-project.svg'}
            year={'2025'}
            role={'Back-end Developer'}
            viewButton={true}
            githubButtonRef={''}
            viewButtonRef={''}
          />
          <ProjectCard
            tag={'Conceptual Work'}
            title={'Promotional landing page for our favorite show'}
            description={`This project is an e-commerce platform aimed at artisans, with the goal of valuing handcrafted work and local culture. 
              The concept goes beyond a traditional online store — the system integrates social networking features, allowing each artisan
              to publish their products and also share their personal story.Through this, visitors to the platform not only discover unique
              handmade items, but also learn about the context, journey, and inspirations behind each piece. The platform fosters a connection 
              between the public and the artists, encouraging conscious consumption and cultural recognition. `}
            imageUrl={'/artesaos-project.svg'}
            year={'2025'}
            role={'Back-end Developer'}
            viewButton={true}
            githubButtonRef={''}
            viewButtonRef={''}
          />
        </div>
      </main>
    </div>
  );
}

export default page;
