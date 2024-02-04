import { useState } from "react";

const useFetch = <T>() => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>();

  const fetchFn = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      // This setTimeout is just for demo purpose, to display the loading message
      setTimeout(() => {
        setData(data);
        setError(false);
        setLoading(false);
      }, 1000);
    } catch (e) {
      setData(undefined);
      setError(true);
      setLoading(false);
    }
  };

  return { data, setData, loading, error, fetchFn };
};

export default useFetch;
