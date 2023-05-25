import React from 'react'
import { Box, Center, Container } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
export default function BoxAndContainer() {
  return (<Box>
<Box bg='tomato' p={4} color='white'>
        This is the Box
      </Box>
      <Center w="40px" h="40px" bg="gold" color="green">
        <PhoneIcon />
      </Center>
      <Container maxW="container.md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam in id nisi voluptas enim? Hic ad eum labore quas dolorem totam maiores voluptas, provident sit eaque praesentium optio repellat aliquam.
        Et beatae rerum, laborum corporis illo magnam? Tempore similique, dolorum fugit quisquam eum eos adipisci obcaecati ratione nulla in reprehenderit suscipit sed cumque, a iusto accusamus ipsum amet excepturi inventore!
        Exercitationem necessitatibus, libero optio quod omnis praesentium eaque perspiciatis explicabo. Ullam, neque aut praesentium perspiciatis sapiente inventore repudiandae nemo architecto veniam. Sapiente cum est quod officia, sequi animi aliquid necessitatibus.

      </Container>
      </Box>
  )
}

