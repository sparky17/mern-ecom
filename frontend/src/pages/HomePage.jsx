import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'

export default function HomePage() {
  const {fetchProduct,products}=useProductStore();
  
  useEffect(()=>{
    fetchProduct();
  },[fetchProduct]);
  console.log(products)


  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={0}>
      <Text
        fontSize={{ base: "22px", sm: "28px" }}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
        bgGradient="linear(to-r, cyan.400, blue.500)"
        bgClip="text"
      >
          Current Product 
        </Text>

      <SimpleGrid 
      column={{
        base:1,
        md:2,
        lg:3
      }}
      spacing={10}
      w={"full"}
      >
        {products.map((product)=>{
          <PR
        })}
      </SimpleGrid>

        <Text fontSize={'xl'} textAlign={"center"} fontWeight={"bold"} color={"gray.500"}>
          No Product found{" "}
          <Link to={"/create"}>
          <Text as='span' color={"blue.400"} _hover={{textDecoration:"underline"}}>
          Create a Product 
          </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}
