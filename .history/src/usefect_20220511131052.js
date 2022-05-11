import { useState, useEffect } from "react";

const url = "";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const data = await fetch(url);
    const response = await data.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
};
