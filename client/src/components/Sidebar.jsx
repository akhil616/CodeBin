import React, { useEffect, useState } from "react";
import PasteDetails from "./PasteDetails";
import { usePasteContext } from "../hooks/usePasteContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Sidebar = () => {
  // const [pastes, setPastes] = useState(null);
  const { pastes, dispatch } = usePasteContext();
  // const { user } = useAuthContext();
  // var config = {};
  // if (user) {
  //   config = {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${user.token}`,
  //   };
  // } else {
  //   config = {
  //     "Content-Type": "application/json",
  //   };
  // }

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
    <>
      <h2>Public Pastes</h2>
      <div className="pastedetails">
        <div className="pastes">
          {pastes &&
            pastes.map((paste) => (
              <PasteDetails key={paste._id} paste={paste} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
