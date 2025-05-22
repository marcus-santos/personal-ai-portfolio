import Header from '@/app/components/Header';
import PC from '@/app/components/PC';
import { marcus } from '@/app/types/header-user';

function page() {
  return (
    <div className="flex flex-col">
      <Header {...marcus} />
      <main className="sm:w-2/3 px-8 flex flex-col m-auto">
        <div className="py-17 w-full">
          <h1 className="text-3xl font-semibold mb-3 text-center sm:text-start">
            FEATURED PROJECTS
          </h1>
          <p className="text-white/80 text-[18px] sm:w-2/3">
            Here are some selected projects that reflect my passion for
            developing personalized solutions, both on the front end and back
            end.
          </p>
        </div>
        <PC />
      </main>
    </div>
  );
}

export default page;
