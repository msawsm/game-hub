import type { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Props {
    game : Game
}


const GameCard = ({game} : Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}></PlatformIconList>
        </CardBody>
    </Card>
  )
}

export default GameCard