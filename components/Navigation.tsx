import { Button, SimpleGrid } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <SimpleGrid columns={2} spacing={5}>
      <Button variant="ghost">Masuk</Button>
      <Button variant="outline">Gabung</Button>
    </SimpleGrid>
  );
};

export default Navigation;
