import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOption: (sortOption : string) => void
}

const SortSelector = ({onSelectSortOption} : Props) => {
  const sortOptions = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By
      </MenuButton>
      <MenuList>
        {sortOptions.map((sortOption) => (
          <MenuItem >{sortOption}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
