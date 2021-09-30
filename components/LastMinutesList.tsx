import { Box, Text } from '@chakra-ui/react';
import Card from '@components/Card';

const LastMinutesList = () => {
  return (
    <>
      <Text fontSize="2xl" fontWeight="700">
        Butuh Bagasi Cepat?
      </Text>

      <Card title="Bagasi Berlin" amount="15€" limit="25kg" />
    </>
  );
};

export default LastMinutesList;
