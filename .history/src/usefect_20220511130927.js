import { useState, useEffect } from "react";

const url = "";

export const useFetch = async () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const data = await fetch(url);
  const response = await data.json();
};
