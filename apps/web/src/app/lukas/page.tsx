import Header from '../components/Header';
import { lukas } from '../types/header-user';
import { ChatWindow } from '../components/ChatWindow';

function page() {
  return (
    <div className="flex flex-col h-screen">
      <Header {...lukas} />
      <ChatWindow api={'http://localhost:3333/lukas'} />
    </div>
  );
}

export default page;
