import React from "react";
import Header from "./Components/Header/Header";
import Greetings from "./Components/Greetings/Greetings";
import Input from "./Components/Input/Input";
import ChatRoom from "./Components/ChatRoom/ChatRoom";

function App() {
  return (
    <div className="bot">
        <Header />
        <Greetings />
        <ChatRoom />
        <Input />
    </div>
  );
}

export default App;
