import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import GridItem from "./GridItem";

const FixedSizeGrid = ({ userData }) => {
  return (
    <Grid
      height={1000}
      width={1500}
      itemData={userData}
      columnCount={10}
      columnWidth={500}
      rowCount={100}
      rowHeight={200}
      innerElementType="div"
      className="list-container"
    >
      {({ columnIndex, rowIndex, data, style }) => {
        return <GridItem user={data[rowIndex][columnIndex]} style={style} />;
      }}
    </Grid>
  );
};

export default FixedSizeGrid;
