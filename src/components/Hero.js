import { Heading, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <VStack>
      <Heading
        size="4xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
        fontWeight="bold"
        p={2}
        w="70%"
        textAlign="center"
      >
        Your Organization’s Road to Web3.
      </Heading>
      <Text
        p={4}
        textAlign="center"
        color="gray.600"
        fontSize="20px"
        fontWeight="medium"
        w="50%"
        alignItems="left"
      >
        Manage ETH donations and explore unique fundraising opportunities as
        part of a transparent, future-forward giving community.
      </Text>
    </VStack>
  );
};

export default Hero;
