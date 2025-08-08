import { HStack, Image } from '@chakra-ui/react'
import logo from '@/assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearchInput : (searchText: string) => void
}

const NavBar = ({onSearchInput} : Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput onSearchInput={onSearchInput}/>
        <ColorModeSwitch />
    </HStack>
  )
};

export default NavBar