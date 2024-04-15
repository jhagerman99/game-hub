import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text _firstLetter={{ textTransform: "uppercase" }}>
        {colorMode + " Mode"}
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
