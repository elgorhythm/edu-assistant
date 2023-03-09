import "./accounts.scss";

import React, { useState } from "react";
import {
  AddOutlined,
  PrintOutlined,
  SearchOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import CollectionCard from "./CollectionCard";

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDisplay, setFilterDisplay]=useState(false)
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
            <div className="filter" onClick={()=>setFilterDisplay(!filterDisplay)}>
                <TuneOutlined/>
                <div className="filter-selector" style={{display: filterDisplay? "flex":"none"}}>
                    hi
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
