"use client";

import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import * as db from "../data";

export default function Crochet() {
  const crochet = db.crochet;
  const [active, setActive] = useState(0);

  return (
    <Box
      id="gn-crochet"
      px={{ base: 6, md: 10 }}
      pt={{ base: 4, lg: 18 }}
      pb="24"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="flex-start"
        gap={{ base: 0, lg: "80px" }}
      >
        {/* Piece index */}
        <Box
          as="ul"
          flex="1"
          minW="0"
          w={{ base: "100%", lg: "auto" }}
          listStyleType="none"
          m="0"
          p="0"
          borderBottom="1px solid var(--line)"
        >
          {crochet.map((item, i) => (
            <Box
              as="li"
              key={item.title}
              pb="16"
              opacity={{ base: 1, lg: i === active ? 1 : 0.65 }}
              transition="opacity 0.25s ease"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              {/* Mobile only: the preview panel is hidden below lg */}
              <Image
                src={`/crochet/${item.image}`}
                alt={item.title}
                display={{ base: "block", lg: "none" }}
                w="100%"
                objectFit="cover"
                borderRadius="14px"
                mb="5"
              />
              <Heading
                as="h2"
                fontSize={{ base: "3xl", xl: "5xl" }}
                lineHeight="1.08"
                letterSpacing="-0.025em"
                fontWeight="semibold"
                textWrap="balance"
              >
                {item.title}
              </Heading>
              <Flex mt="5">
                <Link href={item.link} target="_blank" className="text-link">
                  Instagram
                </Link>
              </Flex>
            </Box>
          ))}
        </Box>

        {/* Sticky preview: desktop only, centered in the right column */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          flex="1"
          minW="0"
          justify="center"
          alignSelf="stretch"
        >
          <Box
            display="grid"
            w="100%"
            maxW="560px"
            position="sticky"
            top="10"
            alignSelf="flex-start"
            aria-hidden="true"
          >
            {crochet.map((item, i) => (
              <Image
                key={item.title}
                src={`/crochet/${item.image}`}
                alt=""
                gridArea="1 / 1"
                alignSelf="start"
                w="100%"
                h="auto"
                maxH="calc(100vh - 80px)"
                objectFit="contain"
                objectPosition="top center"
                borderRadius="22px"
                border="1px solid var(--line)"
                opacity={i === active ? 1 : 0}
                transition="opacity 0.35s ease"
              />
            ))}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
