import { ChatWindow } from '@/components/chat-window';
import Header from '@/components/common/header';
import { marcus } from '../../../../types/header-user';

function page() {
  return (
    <div className="flex flex-col h-screen">
      <Header {...marcus} />
      <div className="mb-4 text-sm text-white/60" />
      <ChatWindow api={'http://localhost:3333/marcus'} />
    </div>
  );
}

export default page;
