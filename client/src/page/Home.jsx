import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="create">
        <form>
          <label>Paste Name / Title </label>
          <br />
          <input className="title" type="text" />
          <div className="radio">
            <label>
              <input name="visibility" type="radio" value="Public" />
              Public
            </label>
            <label>
              <input name="visibility" type="radio" value="Private" />
              Private
            </label>
          </div>
          <label>Enter Your Paste</label>
          <br />
          <textarea name="textarea" placeholder="Enter your paste" />
          <button>Create New Paste</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Home;
