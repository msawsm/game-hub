import useGames from "@/hooks/useGames";
import { Button, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "@/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <div>Error: {error?.message}</div>;
  return (
    <>
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      marginY={2}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results?.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
    </SimpleGrid>
    {hasNextPage && <Button onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading..' : 'Load More'}</Button>}
    </>
  );
};

export default GameGrid;
