import { ChevronUpIcon } from "lucide-react";
import { useRef } from "react";

const ChatForm = ({ setChatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Update UI with user message and thinking placeholder
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
      { role: "assistant", text: "Thinking..." },
    ]);

    // Clear input
    inputRef.current.value = "";

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            // Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
            Authorization: `Bearer ${import.meta.env.VITE_APIKEY}`,
            "HTTP-Referer": "https://affriverse-solution.vercel.app/", // Replace with your live site URL
            "X-Title": "My Civic Chatbot",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "meta-llama/llama-4-maverick:free",
            messages: [
              {
                role: "system",
                content:
                  "You are bot, well trained on matters relating to Abia state only. Respond helpfully and factually.",
              },
              {
                role: "user",
                content: [
                  {
                    type: "text",
                    text: userMessage,
                  },
                  // Optionally add image here later
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      const assistantReply = data?.choices?.[0]?.message?.content;

      setChatHistory((history) => {
        const updated = history.filter((msg) => msg.text !== "Thinking...");
        return [
          ...updated,
          {
            role: "assistant",
            text: assistantReply || "No response from model.",
          },
        ];
      });
    } catch (error) {
      console.error("API Error:", error);
      setChatHistory((history) => {
        const updated = history.filter((msg) => msg.text !== "Thinking...");
        return [
          ...updated,
          { role: "assistant", text: "Failed to fetch response." },
        ];
      });
    }
  };

  return (
    <form
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
