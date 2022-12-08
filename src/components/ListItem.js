import React from "react";

const ListItem = ({ user, style }) => {
  return (
    <li className="user-container" style={style}>
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
    </li>
  );
};

export default ListItem;
