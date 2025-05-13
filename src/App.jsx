import React from "react";
import { BotIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup shadow-2xl ">
        {/* Header starts here */}
        <div className="chat-header">
          <div className="header-info">
            <BotIcon size={50} className="bg-white p-2 rounded-2xl" />
            <h2 className="logo-text text-white text-xl font-bold">
              Chat with your community
            </h2>
          </div>
          <button className="bg-white rounded-sm h-10">
            <ChevronDownIcon size={25} />
          </button>
        </div>

        {/* Chat Box body starts here */}
        <div className="chat-body h-96 p-7 flex flex-col gap-14 ">
          <div className="message.bot-message flex gap-1.5 items-center">
            <BotIcon size={50} color="#6d4fc2" className="" />
            <p className="message-text">
              Welcome 👋 Your voice matters. 💙
            </p>
          </div>
          <div className="message user-message ">
            <p className="message-text">
              Hey there! I'm here to listen to your thoughts and ideas. Let's
              have a conversation about civic engagement and how we can make a
              positive impact in our community. 💡
            </p>
          </div>
        </div>
        {/* Chat footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder="Type a message..."
              className="message-input"
              required
            />
            <button type="submit" className="send-button">
              <ChevronUpIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
