import { Flex, Icon, FlexProps } from "@chakra-ui/react";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export default function InfoButtons(props: FlexProps) {
  return (
    <Flex gap="4" {...props}>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="80px"
        borderRadius="full"
        bgColor="var(--link-hover)"
        _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
      >
        <Link
          href="https://drive.google.com/file/d/1wD7HQ_lt2xDcgPdkkGEqXFcRyG7N9sWF/view?usp=sharing"
          target="_blank"
        >
          <Icon boxSize="3rem">
            <IoDocumentTextOutline />
          </Icon>
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="80px"
        borderRadius="full"
        bgColor="var(--link-hover)"
        _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
      >
        <Link href="https://github.com/gabynirmal" target="_blank">
          <Icon boxSize="3rem">
            <IoLogoGithub />
          </Icon>
        </Link>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        boxSize="80px"
        borderRadius="full"
        bgColor="var(--link-hover)"
        _hover={{ bgColor: "var(--foreground)", color: "var(--link-hover)" }}
        transition="background-color 0.2s ease-in-out, color 0.2s ease-in-out"
      >
        <Link
          href="https://www.linkedin.com/in/gabriela-nirmal/"
          target="_blank"
        >
          <Icon boxSize="2rem">
            <FaLinkedinIn />
          </Icon>
        </Link>
      </Flex>
    </Flex>
  );
}
