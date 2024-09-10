import { Container,Button,Text ,Flex, HStack, useColorMode} from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    const {colorMode,toggleColorMode}=useColorMode('white', 'gray.800')
  return (
    <Container maxW="1140px" px={4}>
    <Flex 
      as="nav" 
      h="60px" 
      align="center" 
      justify="space-between"
      direction={{ base: "column", sm: "row" }}
    >
      <Text
        fontSize={{ base: "22px", sm: "28px" }}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
        bgGradient="linear(to-r, cyan.400, blue.500)"
        bgClip="text"
      >
        <Link to="/">Product Store</Link>
      </Text>
  
        <HStack spacing={2} alignItems={"center"}>
            
      <Link to="/create">
        <Button
          aria-label="Create new product"
          size="md"
          px={4}
          py={2}
          colorScheme="blue"
          variant="solid"
          >
          +
        </Button>
      </Link>
      <Button onClick={toggleColorMode}>
        {colorMode==="light"?"🌙":"☀️ "}
      </Button>
      </HStack>
    </Flex>
  </Container>
  
  )
}
