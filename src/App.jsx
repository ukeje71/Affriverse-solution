import { useState } from "react";
import { BotIcon } from "lucide-react";
import UserAvatar from "./assets/ukeje  Isaac.jpg";
import ChatForm from "../component/ChatForm";
const App = () => {
  const [messages] = useState([
    {
      text: "Welcome 👋 Your voice matters here.",
      sender: "bot",
      time: "10:00 AM",
    }, 
  ]);

  return (
    <div className="container">
      <div className="chatbot-popup shadow-2xl ">
        {/* Header starts here */}
        <div className="chat-header">
          <div className="header-info">
            <BotIcon
              size={50}
              color="#6d4fc2"
              className="bg-white p-2 rounded-full"
            />
            <h2 className="logo-text text-white text-xl font-bold">
              Chat with your community
            </h2>
          </div>
          <button className=" rounded-sm h-10">
            <ChevronDownIcon size={25} color="white" />
          </button>
        </div>

        {/* Chat Box body starts here */}
        <div className="chat-body h-96 p-7 flex flex-col gap-4 ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message flex flex-col max-w-[75%] ${
                msg.sender === "user" ? "self-end items-end" : "items-start"
              }`}
            >
              <p
                className={`message-text p-3 rounded-2xl text-sm ${
                  msg.sender === "user"
                    ? "bg-[#6d4ec2] text-white rounded-br-none"
                    : "bg-[#f6f2ff] text-black"
                }`}
              >
                {msg.text}
              </p>
              <span className="text-xs text-gray-400 mt-1">{msg.time}</span>
            </div>
          ))}
          {/* <div className="message bot-message flex gap-1.5 items-center">
            <BotIcon
              size={35}
              color="white"
              className="bg-[#6d4fc2] rounded-full self-end p-1.5"
            />
            <p className="message-text">Welcome 👋 Your voice matters. 💙</p>
          </div> */}
          <div className="message user-message flex justify-end  ">
            <p className="message-text  text-white bg-[#6d4ec2] rounded-2xl rounded-br-none">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <img
              src={UserAvatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover self-end"
            />
          </div>
        </div>
        {/* Chat footer */}
        <div className="chat-footer">
          <ChatForm />
        </div>
      </div>
    </div>
  );
};

export default App;
