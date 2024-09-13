import { Box, HStack, Heading, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function productCard({product}) {
    const textColor=useColorModeValue("gray.500","gray.100");
    const bg=useColorModeValue("white","gray.500")
  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{transform:"translateY(-5px)",shadow:"xl"}}
    bg={bg}
    >
        <Image src={product.Image} alt={product.name} h={48} w="full" objectFile='cover'/>
        <Box p={4}>
        <Heading as={"h3"} size={'md'} mb={3}>
            {product.name}
        </Heading>
        <Text  color={textColor} mb={4} fontWeight={"bold"} fontSize={"xl"}  >
            ${product.price}
        </Text>
        <HStack spacing={2}>
            <IconButton icon={<EditIcon/>} colorScheme='blue'/>
            <IconButton icon={<DeleteIcon/>} colorScheme='red'/>

        </HStack>
        </Box>
    </Box> 
  )
}
