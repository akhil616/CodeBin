import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Paste = () => {
  const location = useLocation();
  const { paste } = location.state;
  console.log(paste);
  return (
    <>
      <div className="home">
        <div className="paste">
          <h2>{paste.title}</h2>
          <textarea readOnly value={paste.body}></textarea>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Paste;
