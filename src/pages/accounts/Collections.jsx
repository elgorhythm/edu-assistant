import "./accounts.scss";

import React, { useState } from "react";
import {
  AddOutlined,
  PrintOutlined,
  SearchOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import CollectionCard from "./components/CollectionCard";
import { Radio, RadioGroup } from "@mui/material";

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [range, setRange] = useState("week");
  console.log("range is ", range);
  return (
    <div className="collections">
      <div className="wrapper">
        <div className="top-container">
          <div className="search-wrapper">
            <SearchOutlined className="icon" />
            <input onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <div className="title-wrapper">
            <h3>All Collections</h3>
            <div className="filter">
              <div
                className="icon"
                onClick={() => setFilterDisplay(!filterDisplay)}
              >
                <TuneOutlined sx={{ fontSize: "20px" }} />
              </div>
              <div
                className="filter-selector"
                style={{ display: filterDisplay ? "flex" : "none" }}
              >
                <RadioGroup
                  row
                  className="radio-group"
                  defaultValue="male"
                  onChange={(e) => console.log(e.target.value)}
                  sx={{ display: "flex" }}
                >
                  asd
                  <Radio label="hi" value="male" />
                  <Radio value="female" />
                </RadioGroup>
                {/* <div onChange={(e) => console.log(e.target.value)}>
                  <input type="radio" value="hi" checked={false} />
                  <input type="radio" value="hola" checked={false} />
                </div> */}
                <button onClick={() => setFilterDisplay(!filterDisplay)}>
                  x
                </button>
              </div>
            </div>
          </div>
          <div className="buttons-wrapper">
            <button className="print">
              <PrintOutlined />
            </button>
            <button className="add">
              <AddOutlined />
            </button>
          </div>
        </div>
        <div className="collections-container">
          <CollectionCard />
        </div>
      </div>
    </div>
  );
};

export default Collections;
