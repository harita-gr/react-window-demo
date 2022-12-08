import React from "react";
import { VariableSizeList as List } from "react-window";
import ListItem from "./ListItem";

const VariableSizeList = ({ userData }) => {
  // Your row heights/column widths should be based on the content of the row.
  function itemSize(index) {
    return index % 2 ? 200 : 400;
  }

  return (
    <List
      itemData={userData}
      itemCount={userData.length}
      itemSize={itemSize}
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

export default VariableSizeList;
