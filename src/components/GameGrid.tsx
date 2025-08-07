import useGames, { type Platform } from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre : Genre | null,
  selectedPlatform: Platform | null
}

const GameGrid = ({selectedGenre, selectedPlatform} : Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <div>Error: {error}</div>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={3}
      marginY={2}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
