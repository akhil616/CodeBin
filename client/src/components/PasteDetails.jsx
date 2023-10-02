import React from "react";
import { Link } from "react-router-dom";

const PasteDetails = ({ paste }) => {
  return (
    <div className="pastes-details">
      <h4>
        <Link
          to={`/${paste._id}`}
          state={{ paste }}
          style={{ textDecoration: "none" }}
        >
          {paste.title}
        </Link>
      </h4>
      <p>1 day ago</p>
    </div>
  );
};

export default PasteDetails;
