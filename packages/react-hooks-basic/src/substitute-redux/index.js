import React, { useRecucer } from "react";
import ShowArea from "./showArea";
import Buttons from "./buttons";
import { Color } from "./color";

function Index() {
  return (
    <div>
      <Color>
        <ShowArea />
        <Buttons />
      </Color>
    </div>
  );
}

export default Index;
