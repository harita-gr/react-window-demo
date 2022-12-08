import React from "react";
import { FixedSizeList as List } from "react-window";
import ListItem from "./ListItem";

const FixedSizeList = ({ userData }) => {
  return (
    <List
      itemData={userData}
      itemCount={userData.length}
      itemSize={200}
      height={800}
      width={1000}
      innerElementType="ul"
      className="list-container"
    >
      {({ index, data, style }) => {
        return <ListItem user={data[index]} style={style} />;
      }}
    </List>
  );
};

export default FixedSizeList;
