import usePlatforms, { type Platform } from "@/hooks/usePlatforms";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectPlatform : (platform : Platform) => void,
    selectedPlatformId?: number
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId} : Props) => {
  const { data, error } = usePlatforms();

  const platFormName = data.results.find(p => p.id == selectedPlatformId)?.name;

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platFormName || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
