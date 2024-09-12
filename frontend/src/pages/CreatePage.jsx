import { Box, Button, Container, Heading, Input,  VStack, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

export default function CreatePage() {
    const toast = useToast();
    const [newProduct,setNewProduct]=useState({
        name:"",
        price:"",
        image:"",
    });
    const {createProduct}=useProductStore();
    const CreateButton= async ()=>{
        const {success,message}=await createProduct(newProduct);
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error",
                isClosable:true,
            })
        }else{
            toast({
            title:"Success",
            description:message,
            status:"success",
            isClosable:true,
            })
        }
        setNewProduct({name:"",price:"",image:""});
    }

    return <Container maxW={"container.sm"}>
        <VStack spacing={0}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>Create New Product </Heading>

        <Box w='full' bg={useColorModeValue("white","gray.700")} p={6} rounded={"lg"} shadow={"md"}>

        <VStack spacing={4} >
            <Input 
            placeholder='Product Name'
            name='name'
            value={newProduct.name}
            onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}
            />

            <Input 
            placeholder='Product Price'
            type='number'
            name='price'
            value={newProduct.price}
            onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}
            />

             <Input 
                placeholder='Product URL'
                name='image'
                value={newProduct.image}
                onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}
            />

    <Button onClick={CreateButton} colorScheme='blue' w='full' name='Button'>Add new Product</Button>
        </VStack>



        </Box>
        </VStack>
    </Container>
}
