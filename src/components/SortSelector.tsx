import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectSortOption: (sortOption : string) => void,
    selectedSortOption : string
}

const SortSelector = ({onSelectSortOption, selectedSortOption} : Props) => {
  const sortOptions = [
    {value:'', label: "Relevance"},
    {value:'-added', label: "Date added"},
    {value:'name', label: "Name"},
    {value:'-released', label: "Release date"},
    {value:'-metacritic', label: "Popularity"},
    {value:'-rating', label: "Average rating"},
  ];

  const sortOrder = sortOptions.find(o => o.value === selectedSortOption)?.label

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((sortOption) => (
          <MenuItem key={sortOption.value} onClick={() => onSelectSortOption(sortOption.value)}>{sortOption.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
