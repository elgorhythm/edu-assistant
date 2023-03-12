import "./accounts.scss";

import React, { useState } from "react";
import CollectionCard from "./components/CollectionCard";
import AcctsSearchContainer from "./components/AcctsSearchContainer";
import { collectionsList } from "../../temp";
import Loading from "../../components/loading/Loading";

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("studentName");
  const [dateRange, setDateRange] = useState("week");

  // const collectionsList = null;

  const getSearchTerm = (search) => {
    setSearchTerm(search);
  };
  const getDateRange = (range) => {
    setDateRange(range);
  };

  console.log(searchTerm);
  console.log(dateRange);

  return collectionsList ? (
    <div className="collections">
      <div className="wrapper">
        <AcctsSearchContainer
          getSearchTerm={getSearchTerm}
          getDateRange={getDateRange}
        />
        <CollectionCard
          collectionsList={collectionsList}
          searchTerm={searchTerm}
          searchBy={searchBy}
        />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Collections;
