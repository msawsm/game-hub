
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {

  const genre = useGenre(useGameQueryStore(s => s.gameQuery.genreId));
  const platform = usePlatform(useGameQueryStore(s => s.gameQuery.platformId));

  return (
    <Heading as="h1">
      {genre?.name} {platform?.name} Games
    </Heading>
  );
};

export default GameHeading;
