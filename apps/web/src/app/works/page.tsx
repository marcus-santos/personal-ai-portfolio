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
        portfolioRef={'./works'}
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
