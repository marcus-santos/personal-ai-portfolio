'use client';

import { MessageInput } from '@/app/components/message-input';
import Header from '../components/Header';
import { lukas } from '../types/header-user';

function page() {
  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
  };

  return (
    <div className="w-screen h-full">
      <Header {...lukas} />
      <div className="flex items-center justify-center p-4 absolute bottom-0 w-full">
        <div className="w-full max-w-2xl">
          <MessageInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default page;
