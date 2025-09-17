import { ChatWindow } from '@/components/chat-window';
import Header from '@/components/common/header';
import { lukas } from '../../../types/header-user';

function page() {
  return (
    <div className="flex flex-col h-screen">
      <Header {...lukas} />
      <ChatWindow api={'http://localhost:3333/lukas'} />
    </div>
  );
}

export default page;
