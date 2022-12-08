import React, { useState } from "react";
import { faker } from "@faker-js/faker";

import "./App.css";
import List from "./components/List";
import FixedSizeList from "./components/FixedSizeList";
import VariableSizeList from "./components/VariableSizeList";
import FixedSizeGrid from "./components/FixedSizeGrid";
import VariableSizeGrid from "./components/VariableSizeGrid";
import ListWithScrollIndicators from "./components/ListWithScrollIndicators";

function App() {
  const createUser = () => {
    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      bio: faker.lorem.sentence(),
      image: faker.image.avatar(),
    };
  };

  const [data, setData] = useState(() =>
    Array.from({ length: 1000 }, createUser)
  );

  // const [data, setData] = useState(() =>
  //   Array.from({ length: 100 }, () => Array.from({ length: 10 }, createUser))
  // );

  return (
    <div className="App">
      <h1>Rendering a large list without Virtualization</h1>
      <List userData={data} />

      {/* <h1>Rendering a fixed-size list with Virtualization</h1>
      <FixedSizeList userData={data} /> */}

      {/* <h1>Rendering a variable-size list with Virtualization</h1>
      <VariableSizeList userData={data} /> */}

      {/* <h1>Rendering a fixed-size grid with Virtualization</h1>
      <FixedSizeGrid userData={data} /> */}

      {/* <h1>Rendering a variable-size grid with Virtualization</h1>
      <VariableSizeGrid userData={data} /> */}

      {/* <h1>Rendering a virtualized list with Scrolling Indicators</h1>
      <ListWithScrollIndicators userData={data} /> */}
    </div>
  );
}

export default App;
