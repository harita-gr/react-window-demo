import React from "react";
import ListItem from "./ListItem";

const List = ({ userData }) => {
  return (
    <ul className="list-container">
      {userData.map((user) => {
        return <ListItem user={user} />;
      })}
    </ul>
  );
};

export default List;
