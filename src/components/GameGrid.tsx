import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react'

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchGames();
    }, []);

    const fetchGames = async () => {
        try {
            const response = await apiClient.get<FetchGamesResponse>('/games');
            setGames(response.data.results);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred while fetching games');
        } 
    };
    if (error) return <div>Error: {error}</div>;
    return (
        games.map(game => (
            <ul key={game.id}>
                <li>{game.name}</li>
            </ul>
        ))
    )
}

export default GameGrid