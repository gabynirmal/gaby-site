import { Heading, Flex, type HeadingProps } from "@chakra-ui/react";
import { nameColors } from "../lib/constants";

type HeaderProps = HeadingProps & {
  title: string;
};

export const Header = ({ title, ...props }: HeaderProps) => {
  return (
    <Flex as="main" h="100vh" alignItems="center" justifyContent="center">
      <Heading
        as="h1"
        fontSize="7xl"
        fontWeight="bold"
        fontFamily="kablammo-variable"
        letterSpacing=".25rem"
        fontVariationSettings={`'MORF' ${0}`}
        color={nameColors[title[0]]}
        transition={"font-variation-settings 500ms ease"}
        _hover={{ fontVariationSettings: `'MORF' ${60}` }}
        cursor="pointer"
        {...props}
      >
        {title}
      </Heading>
    </Flex>
  );
};
