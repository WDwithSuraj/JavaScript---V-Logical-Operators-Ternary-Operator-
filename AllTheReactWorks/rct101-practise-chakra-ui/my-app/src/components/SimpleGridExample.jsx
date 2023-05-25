import React from 'react'
import {SimpleGrid, Box} from '@chakra-ui/react';
export default function SimpleGridExample() {
  const items = new Array(12).fill(0).map((_, i)=> i+1)
  return (
   <>
   <SimpleGrid columns={{base : 1, md:2, lg:3, xl:4, '2xl': 5}} spacing={4} >
  {/* <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box> */}
  {items.map((el)=> <Box key={el} bg="tomato" height="80px">{el}</Box>)}
</SimpleGrid>
   </>
  )
}
