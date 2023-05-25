import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
export default function GridExample() {
  return (
//    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
//   <GridItem w='100%' h='10' bg='blue.500' />
//   <GridItem w='100%' h='10' bg='blue.500' />
//   <GridItem w='100%' h='10' bg='blue.500' />
//   <GridItem w='100%' h='10' bg='blue.500' />
//   <GridItem w='100%' h='10' bg='blue.500' />
//   <GridItem w='100%' h='10' bg='blue.500' />
//   <GridItem w='100%' h='10' bg='blue.500' />
//   <GridItem w='100%' h='10' bg='blue.500' />
// </Grid>
<Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
  )
}
