import type { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width='300px' borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          ></PlatformIconList>
          <CriticScore criticScore={game.metacritic}/>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
