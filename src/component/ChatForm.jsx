import { ChevronUpIcon } from "lucide-react";
import { useRef } from "react";

const ChatForm = ({setChatHistory}) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    //Update chat history with user messsage
    setChatHistory(history => [...history,{role:"user",text:userMessage}])
  };

  return (
    <form
      action="#"
      className="chat-form flex justify-between"
      onSubmit={handleFormSubmit}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        className="message-input border-0 outline-0"
        required
      />
      <button type="submit" className="send-button">
        <ChevronUpIcon
          color="white"
          size={25}
          className="p-1 bg-[#6d4fc2] rounded-full"
        />
      </button>
    </form>
  );
};

export default ChatForm;
