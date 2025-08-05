import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint : string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get<FetchResponse<T>>(endpoint, { signal });
        setData(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) {
          return; // Request was cancelled
        }
        else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An error occurred while fetching games');
        }
        setLoading(false);
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, error, isLoading };
}

export default useData;