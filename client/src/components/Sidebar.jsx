import React, { useEffect, useState } from "react";
import PasteDetails from "./PasteDetails";

const Sidebar = () => {
  const [pastes, setPastes] = useState(null);
  useEffect(() => {
    const fetchPaste = async () => {
      const response = await fetch("http://localhost:5500/api/pastes/");
      const json = await response.json();
      if (response.ok) {
        setPastes(json);
      }
    };
    fetchPaste();
  }, []);
  return (
    <div className="sidebar">
      <h2>Public Pastes</h2>
      <div className="pastes">
        {pastes &&
          pastes.map((paste) => <PasteDetails key={paste._id} paste={paste} />)}
      </div>
    </div>
  );
};

export default Sidebar;
