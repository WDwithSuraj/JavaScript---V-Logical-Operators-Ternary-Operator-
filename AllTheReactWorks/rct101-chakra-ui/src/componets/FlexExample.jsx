import {Flex, Spacer, Box} from '@chakra-ui/react'

function FlexExample(){
    return ( 
           <Flex>
                    <Box p="4" bg="res.400" w="100px">
                Box1
                    </Box>
                    <Spacer/>
                    <Box p="4" bg="yellow.400">
        Box2
                    </Box>
                    <Spacer/>
                    <Box >
                    Box3
                    </Box>
            </Flex>
    )
}

export default FlexExample