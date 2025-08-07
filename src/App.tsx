
import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import type { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import type { Platform } from './hooks/useGames'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setselectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }} >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem padding={"10px"} area='main'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setselectedPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
      </GridItem>
    </Grid>
  )
}

export default App
