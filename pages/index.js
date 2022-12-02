import Head from "next/head";
import { useState } from "react";
import DarkChat from "../components/DarkChat";

export default function Home() {
  const [chat, setChat] = useState();

  const colors = {
    other: "#c026d3",
    me: "#1d4ed8",
  };
  const [messages, setMessages] = useState([]);

  return (
    <>
      <div className="bg-gray-900 w-full h-screen pt-10">
        <h2 className="text-gray-100 absolute top-0 left-0 w-full text-xl text-center bg-gradient-to-r from-pink-500 via-indigo-400 to-lime-500">
          12б групп чат
        </h2>
        <div className="w-full p-12 gap-4 flex flex-col h-full overflow-y-auto">
          {messages.map((row, i) => (
            <DarkChat
              key={i}
              user={row.user}
              message={row.message}
              color={row.right ? colors.me : colors.other}
              right={row.right}
            />
          ))}
        </div>
        <div className="h-12 w-full bg-gray-700 absolute bottom-0 flex items-center justify-center px-4">
          <input
            type="text"
            value={chat}
            className="w-full bg-gray-700 ring-0 outline-none text-gray-100"
            onChange={(e) => {
              setChat(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.code == "Enter") {
                setMessages([
                  ...messages,
                  { user: "Uguumur", message: chat, right: true, active: true },
                ]);
                setChat("");
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
