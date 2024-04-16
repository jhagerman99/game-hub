import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hook/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;
  // if (isLoading) return <Spinner />;
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
