
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import GameGrid from './components/GameGrid'
import GameHeading from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

export interface GameQuery {
  genreId? : number,
  platformId? : number,
  sortOption: string,
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} >
      <GridItem area='nav'>
        <NavBar onSearchInput={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre) => setGameQuery({...gameQuery,  genreId: genre.id})}/>
        </GridItem>
      </Show>
      <GridItem padding={"10px"} area='main'>
        <GameHeading gameQuery={gameQuery}/>
        <HStack marginY={5}>
          <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
          <SortSelector selectedSortOption={gameQuery.sortOption} onSelectSortOption={(sortOption) => setGameQuery({...gameQuery, sortOption})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
