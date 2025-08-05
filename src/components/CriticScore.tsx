import { Badge } from "@chakra-ui/react"

interface Props {
    criticScore: number
}

const CriticScore = ({criticScore} : Props) => {
    const color = criticScore > 90 ? 'green' : 'yellow'
  return (
    <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={color} >{criticScore}</Badge >
  )
}

export default CriticScore