import Header from '../components/Header';

function page() {
  return (
    <div className="w-screen h-full">
      <Header
        title={'lukascampos'}
        titleRef={'/lukas'}
        portfolioRef={'/portfolio'}
        resumeRef={'lukas/resume'}
        transfer={'/marcus'}
        githubRef={'https://www.github.com/lukascampos'}
        linkedInRef={'https://www.linkedin.com/in/lukas-campos'}
        instagramRef={'https://www.instagram.com/lukasg_campos/'}
      />
    </div>
  );
}

export default page;
