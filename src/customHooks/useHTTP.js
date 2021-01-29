import { environment } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${environment.BASE_URL}/${url}`, {
          method: "GET",
          headers: {
            Authorization: "",
          },
        });
        const data = await result.json();
        setData(data.results);
        setFetching(false);
      } catch (e) {
        setData(initialState);
        setFetching(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return [data, fetching, error];
};

export const usePost = () => {
  const [response, setResponse] = useState(null);
  const [fetching, setFetching] = useState(false);
  const postData = async (endpoint, object) => {
    try {
      setFetching(true);
      const responseData = await axios.post(
        `${environment.BASE_URL}/${endpoint}`,
        object
      );
      setResponse(responseData);
      setFetching(false);
    } catch (e) {
      console.error(e);
    }
  };
  return [postData, response, fetching];
};
