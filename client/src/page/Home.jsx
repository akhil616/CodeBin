import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { usePasteContext } from "../hooks/usePasteContext";

const Home = () => {
  const { dispatch } = usePasteContext();
  const [title, setTitle] = useState("");
  const [visibility, setVisibility] = useState(null);
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paste = { title, visibility, body };
    const response = await fetch("http://localhost:5500/api/pastes/", {
      method: "POST",
      body: JSON.stringify(paste),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setBody("");
      setVisibility(null);
      setError(null);
      console.log("new paste added", json);
      dispatch({ type: "CREATE_PASTE", payload: json });
    }
  };

  return (
    <div className="home">
      <div className="create">
        <form onSubmit={handleSubmit}>
          <label>Paste Name / Title </label>
          <br />
          <input
            required
            className="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="radio">
            <label>
              <input
                required
                name="visibility"
                type="radio"
                value="Public"
                checked={visibility === "Public"}
                onChange={(e) => setVisibility(e.target.value)}
              />
              Public
            </label>
            <label>
              <input
                name="visibility"
                type="radio"
                value="Private"
                checked={visibility === "Private"}
                onChange={(e) => setVisibility(e.target.value)}
              />
              Private
            </label>
          </div>
          <label>Enter Your Paste</label>
          <br />
          <textarea
            required
            name="textarea"
            placeholder="Enter your paste"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button>Create New Paste</button>
          {error && <div>{error}</div>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
