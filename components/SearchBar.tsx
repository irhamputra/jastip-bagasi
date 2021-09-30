import * as React from 'react';
import { useFormik } from 'formik';
import useValidation from '@hooks/useValidation';
import { Box, Button, Flex, FormControl, FormLabel, IconButton, Input, SimpleGrid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      from: '',
    },
    validationSchema: useValidation({ from: '' }),
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  return (
    <form onSubmit={handleSubmit}>
      <Flex align="end">
        <FormControl id="from">
          <FormLabel>Lokasi</FormLabel>
          <Input name="from" value={values.from} onChange={handleChange} placeholder="Cari Bagasi Dari Kota Mana?" />
        </FormControl>
        <Box ml="4">
          <IconButton aria-label="Cari bagasi" type="submit" icon={<SearchIcon />} />
        </Box>
      </Flex>
    </form>
  );
};

export default SearchBar;
