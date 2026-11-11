"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const SIZE = 12;

// '#' = olive, '*' = cream highlight, '.' = empty
const HEART = [
  "............",
  "..#*#..###..",
  ".#*########.",
  "############",
  "############",
  "############",
  ".##########.",
  "..########..",
  "...######...",
  "....####....",
  ".....##.....",
  "............",
];

const STARTER = HEART.flatMap((row) =>
  [...row].map((ch) => (ch === "#" ? 1 : ch === "*" ? 2 : 0)),
);
const EMPTY = Array(SIZE * SIZE).fill(0);

// Cell value = palette index + 1 (0 means empty). All colors come from globals.css.
const PALETTE = [
  { label: "Olive", color: "var(--emphasis)" },
  { label: "Cream", color: "var(--foreground)" },
  {
    label: "Mid tone",
    color: "color-mix(in srgb, var(--foreground) 45%, var(--background))",
  },
];

const EMPTY_CELL = "color-mix(in srgb, var(--foreground) 10%, transparent)";

const textButtonProps = {
  fontWeight: "medium",
  fontSize: "md",
  textDecoration: "underline",
  textDecorationColor: "var(--emphasis)",
  textDecorationThickness: "2px",
  textUnderlineOffset: "5px",
  transition: "color 0.2s ease",
  _hover: { color: "var(--emphasis)" },
  _focusVisible: { outline: "2px solid var(--emphasis)", outlineOffset: "4px" },
} as const;

export default function PatternGrid() {
  const [cells, setCells] = useState<number[]>(EMPTY);
  const [tool, setTool] = useState(1);
  const [intro, setIntro] = useState(true);
  const mode = useRef<number | null>(null); // value being painted during a drag

  // One orchestrated moment: the heart is "stitched" in row by row on load.
  useEffect(() => {
    const start = setTimeout(() => setCells(STARTER), 400);
    const end = setTimeout(() => setIntro(false), 400 + SIZE * 70 + 600);
    return () => {
      clearTimeout(start);
      clearTimeout(end);
    };
  }, []);

  const cellFromPoint = (x: number, y: number) => {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    const i = el?.dataset.cell;
    return i === undefined ? null : Number(i);
  };

  const paint = (i: number) =>
    setCells((prev) => {
      if (prev[i] === mode.current) return prev;
      const next = [...prev];
      next[i] = mode.current ?? 0;
      return next;
    });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const i = cellFromPoint(e.clientX, e.clientY);
    if (i === null) return;
    setIntro(false);
    // Clicking a cell that already has the selected color erases it.
    mode.current = cells[i] === tool ? 0 : tool;
    paint(i);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (mode.current === null) return;
    const i = cellFromPoint(e.clientX, e.clientY);
    if (i !== null) paint(i);
  };

  const stopPainting = () => {
    mode.current = null;
  };

  return (
    <Box>
      <Box
        p={{ base: 3, md: 5 }}
        borderRadius="22px"
        bgColor="var(--surface)"
        border="1px solid var(--line)"
      >
        <Box
          display="grid"
          gridTemplateColumns={`repeat(${SIZE}, 1fr)`}
          gap="4px"
          touchAction="none"
          userSelect="none"
          aria-hidden="true"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={stopPainting}
          onPointerCancel={stopPainting}
        >
          {cells.map((value, i) => (
            <Box
              key={i}
              data-cell={i}
              aspectRatio={1}
              borderRadius="4px"
              bgColor={value ? PALETTE[value - 1].color : EMPTY_CELL}
              transition="background-color 0.3s ease, transform 0.15s ease"
              style={{
                transitionDelay: intro
                  ? `${Math.floor(i / SIZE) * 70}ms`
                  : "0ms",
              }}
              _hover={{ transform: "scale(1.15)" }}
              _motionReduce={{ transition: "none" }}
            />
          ))}
        </Box>
      </Box>

      <Flex mt="4" justify="space-between" align="center" gap="4">
        <Flex gap="3" role="group" aria-label="Stitch color">
          {PALETTE.map((swatch, i) => (
            <Box
              as="button"
              key={swatch.label}
              aria-label={swatch.label}
              aria-pressed={tool === i + 1}
              boxSize="28px"
              borderRadius="full"
              bgColor={swatch.color}
              border="1px solid var(--line)"
              outline={tool === i + 1 ? "2px solid var(--foreground)" : "none"}
              outlineOffset="3px"
              onClick={() => setTool(i + 1)}
            />
          ))}
        </Flex>
        <Flex gap="5">
          <Box
            as="button"
            {...textButtonProps}
            onClick={() => setCells(STARTER)}
          >
            Reset
          </Box>
          <Box as="button" {...textButtonProps} onClick={() => setCells(EMPTY)}>
            Clear
          </Box>
        </Flex>
      </Flex>

      <Text mt="4" fontSize="md" opacity={0.7} maxW="40ch">
        Click or drag to draw a stitch pattern. It&rsquo;s a sneak peek of the
        pattern app I&rsquo;m building.
      </Text>
    </Box>
  );
}
