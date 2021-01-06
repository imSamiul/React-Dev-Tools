import React from "react";
function Avatar(props) {
    return <div><img className = "circle-img"
    src={props.image}
    alt="avatar_img"
  /></div>
};
export default Avatar;