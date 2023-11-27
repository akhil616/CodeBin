import React from "react";
import { useLocation, redirect, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserPaste from "../components/UserPaste";
import { useAuthContext } from "../hooks/useAuthContext";
import { usePasteContext } from "../hooks/usePasteContext";
const Paste = () => {
  const { user } = useAuthContext();
  const { dispatch } = usePasteContext();
  const location = useLocation();
  const { paste } = location.state;

  const deletePaste = async (e) => {
    e.preventDefault();
    console.log(paste._id);
    const response = await fetch(
      `http://localhost:5500/api/pastes/${paste._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_PASTE", payload: json });
      redirect(json.redirect);
    }
  };
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
            <span onClick={(e) => navigator.clipboard.writeText(paste.body)}>
              copy
            </span>
            {user && user._id === paste.user_id && (
              <>
                <span>
                  <Link to={`/edit/${paste._id}`} state={{ paste }}>
                    edit
                  </Link>
                </span>
                <span onClick={deletePaste}>delete</span>
              </>
            )}
          </div>
        </div>
        <div className="sidebar">
          {user && <UserPaste />}
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Paste;
