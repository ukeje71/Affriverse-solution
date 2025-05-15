import React from "react";
import UserAvatar from "../assets/ukeje -Isaac.jpg";
import {BotIcon} from "lucide-react";

const ChatMessage = ({chat}) => {
  return (
    <div>
      <div className={`message ${chat.role === "model" ? 'bot' :'user'}-message flex justify-end `}>
        {chat.role === "model" && <BotIcon/>}
        <p className="message-text  text-white bg-[#6d4ec2] rounded-2xl rounded-br-none">
          {chat.text}
        </p>
        <img
          src={UserAvatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full object-cover self-end"
        />
      </div>
    </div>
  );
};

export default ChatMessage;
