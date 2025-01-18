import React from "react";
import { PollManager } from "./components/PollManager";
import "./styles/index.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PollManager />
    </div>
  );
};

export default App;
