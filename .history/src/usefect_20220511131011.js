import { useState, useEffect } from "react";

const url = "";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const data = await fetch(url);
    const response = await data.json();
  };
};
