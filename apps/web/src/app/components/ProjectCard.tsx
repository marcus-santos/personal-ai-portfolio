function ProjectCard() {
  return (
    <div className="w-7xl h-[576px] flex">
      <div className="w-xl h-full bg-neutral-700 rounded-xl flex flex-col">
        <div>
          <p className="bg-black mt-4 ml-4 p-2 rounded-3xl inline-block text-sm">
            Conceptual Work
          </p>
        </div>

        <div className="border-2 border-solid border-neutral-900 w-[486px] h-80 m-auto rounded-2xl">
          <img src="#" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
