import type { GameQuery } from "@/App"
import { Heading } from "@chakra-ui/react"

interface Props {
    gameQuery : GameQuery
}

const GameHeading = ({gameQuery} : Props) => {
  return (
    <Heading as='h1'>{gameQuery.genre?.name} {gameQuery.platform?.name} Games</Heading>
  )
}

export default GameHeading