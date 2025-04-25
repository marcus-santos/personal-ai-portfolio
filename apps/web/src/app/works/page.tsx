import Header from '../components/Header';

function page() {
  <div className="w-screen h-full flex flex-col justify-center">
    <Header
      title={'marcus-santos'}
      titleRef={'/marcus'}
      portfolioRef={'/works'}
      resumeRef={'#'}
      transfer={'/lukas'}
      githubRef={'/marcus-santos'}
      linkedInRef={''}
      instagramRef={''}
    />
  </div>;
}

export default page;
