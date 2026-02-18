import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Chào bạn! Mình là trợ lý ảo Chủ nhiệm 4.0. Hôm nay bạn cảm thấy thế nào?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Format history for context (last 5 messages)
    const history = messages.slice(-5).map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const responseText = await sendMessageToGemini(userMessage.text, history);

    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section className="py-20 bg-brand">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 text-white space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                    Trải nghiệm thử <br/> Chatbot AI
                </h2>
                <p className="text-blue-100 text-lg">
                    Hãy thử trò chuyện với phiên bản demo của trợ lý ảo. 
                    Bạn có thể đóng vai một học sinh lớp 10 để chia sẻ cảm xúc hoặc hỏi về nề nếp trường lớp.
                </p>
                <div className="flex gap-4 text-sm font-medium">
                    <span className="bg-white/20 px-3 py-1 rounded-full">#ThanThien</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">#LangNghe</span>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col">
                    {/* Chat Header */}
                    <div className="bg-gray-50 p-4 border-b flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center">
                            <Bot size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Trợ lý Chủ nhiệm 4.0</h3>
                            <div className="flex items-center gap-1 text-xs text-green-600">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-brand text-white rounded-tr-none' 
                                    : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                                    <Loader2 size={16} className="animate-spin text-brand" />
                                    <span className="text-xs text-gray-500">Đang suy nghĩ...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                            <input 
                                type="text" 
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Nhập tin nhắn..." 
                                className="flex-1 bg-transparent outline-none text-gray-700 text-sm"
                            />
                            <button 
                                onClick={handleSend}
                                disabled={isLoading}
                                className="p-2 bg-brand text-white rounded-full hover:bg-brand-dark disabled:opacity-50 transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
