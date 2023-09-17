import React from "react";

const PasteDetails = ({ paste }) => {
  return (
    <div className="pastes-details">
      <h4>{paste.title}</h4>
      <p>1 day ago</p>
    </div>
  );
};

export default PasteDetails;
