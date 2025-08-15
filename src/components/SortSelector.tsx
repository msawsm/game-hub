import useGameQueryStore from "@/store";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortOptions = [
    {value:'', label: "Relevance"},
    {value:'-added', label: "Date added"},
    {value:'name', label: "Name"},
    {value:'-released', label: "Release date"},
    {value:'-metacritic', label: "Popularity"},
    {value:'-rating', label: "Average rating"},
  ];

  const sortOption = useGameQueryStore(s => s.gameQuery.sortOption);

  const sortOrder = sortOptions.find(o => o.value === sortOption)?.label

  const setSortOption = useGameQueryStore(s => s.setSortOption);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((sortOption) => (
          <MenuItem key={sortOption.value} onClick={() => setSortOption(sortOption.value)}>{sortOption.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
