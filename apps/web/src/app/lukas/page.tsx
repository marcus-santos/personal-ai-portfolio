'use client';

import { MessageInput } from '@/app/components/message-input';
import Header from '../components/Header';

function page() {
  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
  };

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
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default page;
