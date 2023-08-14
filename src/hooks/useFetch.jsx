import { useState, useEffect } from "react";

const useFetch = (dataURL, dataOptions) => {
  const [url, setURL] = useState(dataURL);
  const [options, setOptions] = useState(dataOptions);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    console.log("mounted");
    const fetchData = async (url, options) => {
      setIsLoading(true);
      try {
        const request = await fetch(url, options);
        const response = await request.json();
        if (isMounted) {
          setData(response);
          setFetchError(null);
        }
      } catch ({ name, message }) {
        if (isMounted) {
          setData({});
          setFetchError({ name, message });
        }
      } finally {
        isMounted &&
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
      }
    };

    fetchData(url, options);

    const cleanUp = () => {
      console.log("cleaned up");
      isMounted = false;
    };

    return cleanUp;
  }, [url, options]);

  return { setURL, setOptions, data, isLoading, fetchError };
};

export default useFetch;
