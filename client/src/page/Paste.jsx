import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserPaste from "../components/UserPaste";
const Paste = () => {
  const location = useLocation();
  const { paste } = location.state;
  const deletePaste = async (e) => {
    e.preventDefault();
  };
  console.log(paste);
  return (
    <>
      <div className="home">
        <div className="paste">
          <h2>{paste.title}</h2>
          <textarea
            className="fixedtext"
            readOnly
            value={paste.body}
          ></textarea>
          <div className="icon">
            <span>copy</span>
            <span>edit</span>
            <span onClick={deletePaste}>delete</span>
          </div>
        </div>
        <div className="sidebar">
          <UserPaste />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Paste;
