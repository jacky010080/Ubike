'use client';

import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import Search from "../components/Search";
import Result from "../components/Table";

export default function Page() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [selectedArea, setSelectedArea] = useState([]);
  const [allAreas, setAllAreas] = useState();

  const callApi = async () => {
    const response = await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    setData(response.data);
    setFilteredData(response.data);
    const areaArray = response.data.map(item => item.sarea);
    setSelectedArea([...new Set(areaArray)]);
    setAllAreas([...new Set(areaArray)]);
  };

  const changeArea = () => {
    console.log(selectedArea);
    setFilteredData(data.filter(item => selectedArea.includes(item.sarea)));
  };

  const handleSearchStation = (station) => {
    setFilteredData(data.filter(item => item.sna.includes(station)));
  };

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    if (data) {
      changeArea();
    }
  }, [selectedArea]);

  return (
    <div>
      <Header />
      <Search selectedArea={selectedArea} setSelectedArea={setSelectedArea} handleSearchStation={handleSearchStation} allAreas={allAreas} />
      <Result filteredData={filteredData} />
    </div>
  );
}