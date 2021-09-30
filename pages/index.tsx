import { Box, Container, Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import SearchBar from '@components/SearchBar';
import LastMinutesList from '@components/LastMinutesList';
import Navigation from '@components/Navigation';

export default function Home() {
  return (
    <Box bg="#fcfcfc">
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          <Box marginY={4}>
            <Heading>JastipBagasi</Heading>
          </Box>
          <Navigation />
        </Flex>

        <Container maxW="container.sm" py={40}>
          <SearchBar />
        </Container>

        <LastMinutesList />
      </Container>
    </Box>
  );
}
