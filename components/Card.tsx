import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface CardProps {
  title: string;
  amount: string;
  limit: string;
}

const Card: React.FC<CardProps> = ({ title, amount, limit }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Text fontWeight="600" fontSize={20}>
        {title}
      </Text>
      <Text>{amount}</Text>
      <Text>{limit}</Text>
    </Box>
  );
};

export default Card;
