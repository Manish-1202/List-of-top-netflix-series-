import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Data from "./Arryofcard";

const netflixcard = (value) => (
  <Card title={value.title} imgsrc={value.imgsrc} asrc={value.asrc} />
);

ReactDOM.render(
  <>
    <h3 className="Heading">List Of Netflix Series</h3>
    <div className="cards">{Data.map(netflixcard)}</div>
  </>,
  document.getElementById("root")
);
