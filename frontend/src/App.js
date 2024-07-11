import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
      {/* <h1>Hello</h1> */}
    </div>
  );
}

export default App;
