import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre : Genre) => void
}

const GenreList = ({onSelectGenre} : Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              ></Image>
              <Button onClick={() => onSelectGenre(genre)} variant="link" fontSize='lg'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
