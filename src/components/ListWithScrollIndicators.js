import React from "react";
import { FixedSizeList as List } from "react-window";
import ListItem from "./ListItem";

const ListWithScrollIndicators = ({ userData }) => {
  return (
    <List
      itemData={userData}
      itemCount={userData.length}
      itemSize={200}
      height={800}
      width={1000}
      innerElementType="ul"
      className="list-container"
      useIsScrolling={true}
    >
      {({ index, data, style, isScrolling }) =>
        isScrolling ? (
          <div className="skeleton-container" style={style}>
            <span className="skeleton-user-image"></span>
            <div className="skeleton-user-info"></div>
          </div>
        ) : (
          <ListItem user={data[index]} style={style} />
        )
      }
    </List>
  );
};

export default ListWithScrollIndicators;
