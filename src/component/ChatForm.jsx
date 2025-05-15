import { ChevronUpIcon } from "lucide-react";
import { useRef } from "react";

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Update chat history with user message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    // Clear input
    inputRef.current.value = "";

    // API Integration
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
            "HTTP-Referer": "http://localhost:5173", // Replace with your live domain
            "X-Title": "My Civic Chatbot", // Replace with your site name
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-prover-v2:free",
            messages: [
              {
                role: "system",
                content:
                  "You are an Affriverse agent, well trained on matters relating to Abia state and Nigeria. Respond helpfully and factually.",
              },
              {
                role: "user",
                content: userMessage,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const assistantReply = data?.choices?.[0]?.message?.content;

      if (assistantReply) {
        setChatHistory((history) => [
          ...history,
          { role: "assistant", text: assistantReply },
        ]);
      } else {
        setChatHistory((history) => [
          ...history,
          { role: "assistant", text: "No response from model." },
        ]);
      }
    } catch (error) {
      console.error("API Error:", error);
      setChatHistory((history) => [
        ...history,
        { role: "assistant", text: "Failed to fetch response." },
      ]);
    }
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
