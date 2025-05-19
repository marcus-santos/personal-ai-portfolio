import { FaCircle } from 'react-icons/fa';

function TypingIndicator() {
  return (
    <div className="flex gap-1">
      <FaCircle className="animate-bounce" size={5} />
      <FaCircle className="animate-bounce [animation-delay:.15s]" size={5} />
      <FaCircle className="animate-bounce [animation-delay:.3s]" size={5} />
    </div>
  );
}

export default TypingIndicator;
