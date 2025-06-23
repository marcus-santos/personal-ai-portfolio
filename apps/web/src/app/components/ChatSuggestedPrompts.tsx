import { Button } from '@/components/ui/button';

function ChatSuggestedPrompts({
  onPromptClick,
}: {
  onPromptClick: (prompt: string) => void;
}) {
  const suggestedPrompts = [
    'What are your main skills as a fullstack developer?',
    'Tell me about a project that you are really proud of',
    'What companies or projects have you worked on?',
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="my-20 text-lg text-center font-semibold">
        👋 Hi! I’m Marcus and this is my chatbot, here to help you learn more
        about my career, skills, and projects.
        <br />
        <br />
        Try one of these Prompts
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-around w-full">
        {suggestedPrompts.map((prompt, idx) => (
          <Button
            key={idx}
            onClick={() => onPromptClick(prompt)}
            className="w-full sm:max-w-[25%] p-5 h-fit break-words whitespace-pre-wrap text-sm cursor-pointer"
          >
            <p>{prompt}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default ChatSuggestedPrompts;
