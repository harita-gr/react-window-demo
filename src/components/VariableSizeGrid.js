import React from "react";
import { VariableSizeGrid as Grid } from "react-window";
import GridItem from "./GridItem";

const VariableSizeGrid = ({ userData }) => {
  //   const columnWidths = new Array(1000)
  //     .fill(true)
  //     .map(() => 500 + Math.round(Math.random() * 50));
  //   const rowHeights = new Array(1000)
  //     .fill(true)
  //     .map(() => 200 + Math.round(Math.random() * 50));

  function columnWidth(index) {
    return index % 2 ? 500 : 800;
  }

  function rowHeight(index) {
    return index % 2 ? 200 : 400;
  }

  return (
    <Grid
      height={1000}
      width={1500}
      itemData={userData}
      columnCount={10}
      columnWidth={columnWidth}
      //   columnWidth={(index) => columnWidths[index]}
      rowCount={100}
      rowHeight={rowHeight}
      //   rowHeight={(index) => rowHeights[index]}
      innerElementType="div"
      className="list-container"
    >
      {({ columnIndex, rowIndex, data, style }) => {
        return <GridItem user={data[rowIndex][columnIndex]} style={style} />;
      }}
    </Grid>
  );
};

export default VariableSizeGrid;
