import Header from '../components/Header';

function page() {
  return (
    <div className="w-screen h-full">
      <Header
        title={'marcus-santos'}
        titleRef={'/marcus'}
        portfolioRef={'/portfolio'}
        resumeRef={'marcus/resume'}
        transfer={'/lukas'}
        githubRef={'https://www.github.com/marcus-santos'}
        linkedInRef={'https://www.linkedin.com/in/marcus-vinicius-csantos'}
        instagramRef={'https://www.instagram.com/marcus.csantos/'}
      />
    </div>
  );
}

export default page;
