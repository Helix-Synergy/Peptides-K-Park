import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyAbGFemPZeVnKCD_CW0UPw43_2tjEPI2_U" });

const initialContext = `You are a helpful assistant for the Peptides website. Answer questions about the website, its services, and general information in a friendly, concise way. Always reply in the same language as the user's question.`;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! Ask me anything about this website.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
          { role: "user", parts: [{ text: initialContext }] },
          { role: "user", parts: [{ text: input }] }
        ]
      });
      const botText = response.text || 'Sorry, I could not get an answer.';
      setMessages((msgs) => [...msgs, { role: 'bot', text: botText }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { role: 'bot', text: 'Error connecting to Gemini API.' }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chatbot"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15h8M9 9h.01M15 9h.01" /></svg>
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fade-in-up">
          <div className="bg-blue-600 text-white px-4 py-3 font-bold">Peptides Chatbot</div>
          <div className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto max-h-96">
            {messages.map((msg, i) => (
              <div key={i} className={`rounded-lg px-3 py-2 text-sm max-w-[90%] ${msg.role === 'user' ? 'bg-blue-100 self-end text-gray-900' : 'bg-gray-100 self-start text-gray-700'}`}>{msg.text}</div>
            ))}
            {loading && <div className="text-xs text-gray-400">Thinking...</div>}
          </div>
          <form onSubmit={sendMessage} className="flex border-t border-gray-200">
            <input
              ref={inputRef}
              className="flex-1 px-3 py-2 outline-none text-sm"
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-tr-2xl rounded-bl-none rounded-br-2xl transition disabled:opacity-50"
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot; 