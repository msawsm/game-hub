import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import useGenres from "@/hooks/useGenres";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {

  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  return (
    <Heading as="h1">
      {genre?.name} {platform?.name} Games
    </Heading>
  );
};

export default GameHeading;
