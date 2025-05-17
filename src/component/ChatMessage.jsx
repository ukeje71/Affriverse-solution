import React from "react";
import UserAvatar from "../assets/ukeje -Isaac.jpg";
import  Bot from "../assets/BotIcon.png";

const ChatMessage = ({ chat }) => {
  const isBot = chat.role === "assistant";

  return (
    <div className={`message flex items-end gap-2 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot ? (
        <>
        <img src={Bot} alt="Bot" className="w-8 h-8 rounded-full object-cover bg-[#FDBD3D] p-1.5" />
          <p className="message-text bg-[#f6f2ff] rounded-2xl rounded-bl-none p-2 max-w-sm">
            {chat.text}
          </p>
        </>
      ) : (
        <>
          <p className="message-text text-white bg-[#AA1f2E] rounded-2xl rounded-br-none p-2 max-w-sm">
            {chat.text}
          </p>
          <img
            src={UserAvatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </>
      )}
    </div>
  );
};

export default ChatMessage;
