import { useState, useEffect } from "react";

const useFetch = (dataURL, dataOptions) => {
  const [data, setData] = useState([]);
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
          setData([]);
          setFetchError({ name, message });
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataURL, dataOptions);

    const cleanUp = () => {
      console.log("cleaned up");
      isMounted = false;
    };

    return cleanUp;
  }, [dataURL, dataOptions]);

  return { data, isLoading, fetchError };
};

export default useFetch;
