import React, { useEffect, useState } from "react";
import { ApiService } from "../services/api";

export default function MainTable() {
  const [blablaData, setBlablaData] = useState([]);

  const getBlablaDATA = async () => {
    try {
      const res = await ApiService.getBlaBlaData({});
      setBlablaData(res);
    } catch (error) {
      console.log("error in getBlablaDATA", error);
    }
  };

  useEffect(() => {
    getBlablaDATA();
  }, []);

  const renderData = () => {
    return blablaData.map((item) => (
      <div>
        <p>{item.name}</p>
        <p>{item.age}</p>
        <p>{item.job}</p>
      </div>
    ));
  };

  return <div>{renderData()}</div>;
}
