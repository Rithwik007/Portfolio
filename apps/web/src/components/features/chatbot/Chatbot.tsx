'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '@portfolio/content';
import { cn } from '@portfolio/ui';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hey! I'm Rithwik's AI assistant. Ask me anything about his projects, skills, or if he's open to work! 👋",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    setInput('');
    setIsLoading(true);

    const userMessage: ChatMessage = {
      role: 'user',
      content: trimmedInput,
      timestamp: Date.now(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    // Placeholder bot message that will be populated by stream
    const botPlaceholderMessage: ChatMessage = {
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
    };
    
    setMessages([...newMessages, botPlaceholderMessage]);

    try {
      // Filter out timestamps and format message list for API validation
      const formattedMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: formattedMessages }),
      });

      if (!response.ok) {
        throw new Error('Chat API returned an error.');
      }

      if (!response.body) {
        throw new Error('No stream body found.');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponseText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const textChunk = decoder.decode(value, { stream: true });
        botResponseText += textChunk;

        // Update the assistant message content dynamically in real-time
        setMessages((prevMessages) => {
          const updated = [...prevMessages];
          const lastMsg = updated[updated.length - 1];
          if (lastMsg && lastMsg.role === 'assistant') {
            lastMsg.content = botResponseText;
          }
          return updated;
        });
      }
    } catch (err) {
      console.error(err);
      setMessages((prevMessages) => {
        const updated = [...prevMessages];
        const lastMsg = updated[updated.length - 1];
        if (lastMsg && lastMsg.role === 'assistant') {
          lastMsg.content =
            "I'm having trouble connecting to my brain right now. 🧠 Maybe the API key is missing? Reach out directly: rithwikracharla@gmail.com";
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[45]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-grad-primary text-background flex items-center justify-center shadow-glow-blue transition-transform hover:scale-110 hover:shadow-glow-violet active:scale-95"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          'absolute bottom-20 right-0 w-[360px] max-w-[calc(100vw-40px)] h-[480px] bg-background-1/95 border border-border rounded-3xl overflow-hidden flex flex-col shadow-2xl backdrop-blur-glass transition-all duration-300 origin-bottom-right',
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">Rithwik&apos;s Assistant</h3>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Online
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-muted hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message History */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/20">
          {messages.map((msg, i) => {
            const isBot = msg.role === 'assistant';
            return (
              <div key={i} className={cn('flex', isBot ? 'justify-start' : 'justify-end')}>
                <div className={cn('flex items-start gap-2 max-w-[85%]', isBot ? 'flex-row' : 'flex-row-reverse')}>
                  <div
                    className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center text-[10px] border shrink-0',
                      isBot
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        : 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                    )}
                  >
                    {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  </div>
                  <div
                    className={cn(
                      'p-3 rounded-2xl text-xs leading-relaxed',
                      isBot
                        ? 'bg-surface border border-border text-foreground rounded-tl-none'
                        : 'bg-grad-primary text-background font-medium rounded-tr-none shadow-lg'
                    )}
                  >
                    {msg.content === '' && isLoading && i === messages.length - 1 ? (
                      <div className="flex gap-1 items-center h-4 py-1">
                        <span className="w-1.5 h-1.5 bg-background rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-background rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-background rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-border bg-surface flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSend();
              }
            }}
            placeholder="Ask me something..."
            className="flex-1 bg-background-2 border border-border rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-border-accent text-foreground"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-grad-primary text-background p-2 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
