import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((g) => g.id === gameQuery.genreId);

  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);

  return (
    <Heading as="h1">
      {genre?.name} {platform?.name} Games
    </Heading>
  );
};

export default GameHeading;
