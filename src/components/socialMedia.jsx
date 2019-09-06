import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 10,
        right: 10,
        width: "fit-content",
        margin: "0px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center"
      }}
    >
      <span>
        <a
          href="https://twitter.com/venkatvr_rao"
          style={{ color: "black", display: "flex", alignItems: "center" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
          <span style={{ marginLeft: 5, letterSpacing: 1, fontSize: 12 }}>
            {"@venkatvr_rao"}
          </span>
        </a>
      </span>
    </div>
  );
};

export default SocialMedia;
