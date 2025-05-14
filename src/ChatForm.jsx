import { ChevronUpIcon } from "lucide-react";
const ChatForm = () => {
  return (
    <form action="#" className="chat-form flex justify-between">
      <input
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
