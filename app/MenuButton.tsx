"use client";

import {
  Flex,
  Icon,
  Drawer,
  Portal,
  CloseButton,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MenuButton() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = ["Projects", "Crochet", "Contact"];
  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        position="fixed"
        top="0"
        left="0"
        bgColor="var(--link-hover)"
        justifyContent="center"
        alignItems="center"
        direction="column"
        gap="6"
        backdropFilter="blur(5px)"
        zIndex="1000"
        opacity={isMenuOpen ? 1 : 0}
        pointerEvents={isMenuOpen ? "auto" : "none"}
        transition="opacity 0.3s ease-in-out"
      >
        <Button
          alignItems="center"
          justifyContent="center"
          position="fixed"
          top="10"
          right="10"
          boxSize="60px"
          borderRadius="full"
          bgColor="var(--foreground)"
          color="var(--link-hover)"
          _active={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
          transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out opacity 0.3s ease-in-out"
          opacity={isMenuOpen ? 1 : 0}
          pointerEvents={isMenuOpen ? "auto" : "none"}
          onClick={() => setIsMenuOpen(false)}
        >
          <Icon boxSize="3rem">
            <IoIosClose />
          </Icon>
        </Button>
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

      <Button
        alignItems="center"
        justifyContent="center"
        boxSize="60px"
        borderRadius="full"
        bgColor="var(--link-hover)"
        color="var(--foreground)"
        _active={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out opacity 0.3s ease-in-out"
        opacity={isMenuOpen ? 0 : 1}
        pointerEvents={isMenuOpen ? "none" : "auto"}
        onClick={() => setIsMenuOpen(true)}
      >
        <Icon boxSize="3rem">
          <IoIosMenu />
        </Icon>
      </Button>
    </>
  );
}
