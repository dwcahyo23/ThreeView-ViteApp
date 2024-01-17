import React from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'

const Content = ({ children }) => (
  <Flex
    direction="column"
    color="gray.800"
    bg={useColorModeValue('gray.300', 'gray.800')}
    minH="100vh"
  >
    {children}
  </Flex>
)

export default Content
