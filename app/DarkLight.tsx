"use client";

import { Flex, Icon } from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/cg";
import { useTheme } from "next-themes";

export default function DarkLight() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Flex
      as="button"
      position="fixed"
      right="10"
      bottom="10"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      boxSize="60px"
      borderRadius="full"
      bgColor="var(--link-hover)"
      _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
      transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Icon boxSize="3rem">
        <CgDarkMode />
      </Icon>
    </Flex>
  );
}
