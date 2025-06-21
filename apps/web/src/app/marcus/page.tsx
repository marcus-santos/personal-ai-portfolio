import Header from '../components/Header';
import { marcus } from '../types/header-user';
import { ChatWindow } from '../components/ChatWindow';

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
