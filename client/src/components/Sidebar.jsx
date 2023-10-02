import React, { useEffect, useState } from "react";
import PasteDetails from "./PasteDetails";
import { usePasteContext } from "../hooks/usePasteContext";

const Sidebar = () => {
  // const [pastes, setPastes] = useState(null);
  const { pastes, dispatch } = usePasteContext();
  useEffect(() => {
    const fetchPaste = async () => {
      const response = await fetch("http://localhost:5500/api/pastes/");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_PASTES", payload: json });
      }
    };

    fetchPaste();
    console.log("fetch");
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
