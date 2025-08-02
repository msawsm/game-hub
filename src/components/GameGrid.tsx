import useGames from '@/hooks/useGames';

const GameGrid = () => {
    const {games, error} = useGames();
    
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