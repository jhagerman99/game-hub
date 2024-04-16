import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hook/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genreID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  return (
    <List>
      {isLoading &&
        genreID.map((genre) => (
          <ListItem key={genre} paddingY="5px">
            <HStack>
              <Skeleton boxSize="32px" borderRadius={8} />{" "}
              <SkeletonText width={20} />
            </HStack>
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="Link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
