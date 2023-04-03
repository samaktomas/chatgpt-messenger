import React from "react";
import Chat from "../../../../Components/Chat";
import ChatInput from "../../../../Components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};
export default function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
}
