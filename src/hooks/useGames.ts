import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform } []
    metacritic: number
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');


  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchGames = async () => {
      try {
        const response = await apiClient.get<FetchGamesResponse>('/games', { signal });
        setGames(response.data.results);
      } catch (err) {
        if (err instanceof CanceledError) {
          return; // Request was cancelled
        }
        else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An error occurred while fetching games');
        }
      }
    };

    fetchGames();

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
}

export default useGames;