"use client";

import { Flex, Icon, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MenuButton() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = ["Experience", "Projects", "Crochet", "Contact"];

  // The same button toggles the menu, so it never moves between states.
  // When the overlay is open the colors flip to stay visible against it.
  const hoverStyles = isMenuOpen
    ? { color: "var(--link-hover-opp)", bgColor: "var(--background)" }
    : { color: "var(--link-hover)", bgColor: "var(--foreground)" };

  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        position="fixed"
        top="0"
        left="0"
        bgColor="blackAlpha.600"
        backdropFilter="blur(10px)"
        opacity={isMenuOpen ? 1 : 0}
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap="6"
        zIndex="1000"
        visibility={isMenuOpen ? "visible" : "hidden"}
        pointerEvents={isMenuOpen ? "auto" : "none"}
        transition="opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"
      >
        {navigation.map((link: string) => (
          <Link
            href={`/${link.toLowerCase()}`}
            key={link}
            onClick={() => setIsMenuOpen(false)}
          >
            <Heading
              size="5xl"
              color={
                pathname.includes(link.toLowerCase())
                  ? "var(--emphasis)"
                  : "var(--background)"
              }
              _hover={
                pathname.includes(link.toLowerCase())
                  ? { color: "var(--emphasis)" }
                  : { color: "var(--link-hover-opp)" }
              }
              transition="color 0.2s ease-in-out"
            >
              {link}
            </Heading>
          </Link>
        ))}
      </Flex>

      <Button
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        position="relative"
        zIndex="1001" // sits above the overlay (1000)
        boxSize="44px"
        minW="0"
        p="0"
        borderRadius="full"
        bgColor={isMenuOpen ? "var(--link-hover-opp)" : "var(--link-hover)"}
        color={isMenuOpen ? "var(--background)" : "var(--foreground)"}
        _hover={hoverStyles}
        _active={hoverStyles}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <Icon boxSize="7">{isMenuOpen ? <IoIosClose /> : <IoIosMenu />}</Icon>
      </Button>
    </>
  );
}
