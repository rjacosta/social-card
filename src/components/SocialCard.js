import React from "react";
import "../styles.css";

function SocialCard(props) {
  return (
    <div className="SocialCard">
      <a className="ref" href={props.data.socialCardUrl}>
          <img className="image" src={props.data.photoUrl} alt="" />
          <div>
            <header className="header">{props.data.header}</header>
            <div className="description">
              {props.data.description}
            </div>
            <div className="link">
              {props.data.socialCardUrl}
            </div>
          </div> 
      </a>
    </div>
  );
}

export default SocialCard;
