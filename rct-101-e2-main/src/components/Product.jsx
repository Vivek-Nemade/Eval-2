import React from "react";

import { Text,Image,Box,Stack,Heading,Tag,TagLabel } from "@chakra-ui/react";

const Product = ({item}) => {
  // TODO: Remove below const and instead import them from chakra
  //  Text = () => (
  //       <p>{item.category}</p>
  //   );
  //  Image = () =>(

  //  )
  //  Box = () => <div />;
  //  Stack = () => <div />;
  //  Heading = () => <div />;
  //  Tag = () => <div />;
  //  TagLabel = () => <div />;
  return (
    <Stack data-cy="product" direction={['column']} spacing='24px' key={item.id}>
      <Image data-cy="product-image" src="https://picsum.photos/seed/picsum6/420/260" alt='Dan Abramov' 
  boxSize='150px'/>
      <Text fontSize='md' data-cy="product-category">{item.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{item.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{item.title}</Heading>
      <Box data-cy="product-price">Rs {item.price}/unit</Box>
    </Stack>
  );
};

export default Product;
