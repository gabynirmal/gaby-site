"use client";

import { Flex, Heading, Box, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuButton from "./MenuButton";

export default function Navigation(props: FlexProps) {
  const pathname = usePathname();
  const navigation = ["Projects", "Crochet", "Contact"];
  return (
    <Flex
      id="gn-navigation"
      px={{ base: "10", md: "20" }}
      p="10"
      justifyContent="space-between"
      {...props}
    >
      <Link href="/">
        <Heading
          size="4xl"
          color={pathname === "/" ? "var(--emphasis)" : "var(--foreground)"}
          _hover={
            pathname === "/"
              ? { color: "var(--emphasis)" }
              : { color: "var(--link-hover)" }
          }
          transition="color 0.2s ease-in-out"
        >
          Gabriela Nirmal
        </Heading>
      </Link>
      <Flex gap="10" display={{ base: "none", md: "flex" }}>
        {navigation.map((link: string) => (
          <Link href={`/${link.toLowerCase()}`} key={link}>
            <Heading
              size="2xl"
              color={
                pathname.includes(link.toLowerCase())
                  ? "var(--emphasis)"
                  : "var(--foreground)"
              }
              _hover={
                pathname.includes(link.toLowerCase())
                  ? { color: "var(--emphasis)" }
                  : { color: "var(--link-hover)" }
              }
              transition="color 0.2s ease-in-out"
            >
              {link}
            </Heading>
          </Link>
        ))}
      </Flex>
      <Box display={{ base: "block", md: "none" }}>
        <MenuButton />
      </Box>
    </Flex>
  );
}
