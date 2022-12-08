import React from "react";

const GridItem = ({ user, style }) => {
  console.log("USER:", user);
  return (
    <div className="user-container" style={style}>
      <img
        src={user.image}
        alt={`avatar of ${user.name}`}
        className="user-image"
      />
      <div>
        <div className="user-name">{user.name}</div>
        <div>
          <b>Address: </b>
          {user.address}
        </div>
        <div>
          <b>Email: </b>
          {user.email}
        </div>
        <div>
          <b>Bio: </b> {user.bio}
        </div>
      </div>
    </div>
  );
};

export default GridItem;
