import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

interface FetchGenreResponse {
  count: number,
  results: Genre[]
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchGenres = async () => {
      try {
        const response = await apiClient.get<FetchGenreResponse>("/genres", {
          signal,
        });
        setGenres(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) {
          return; // Request was cancelled
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An error occurred while fetching games");
        }
      }
    };
    fetchGenres();

    return () => {
      controller.abort();
    };
  }, []);

  return {genres, error};
};

export default useGenres;
