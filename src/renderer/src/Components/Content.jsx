import React from 'react'
import { Flex } from '@chakra-ui/react'

const Content = ({ children }) => (
  <Flex direction="column" color="gray.800" minH="100vh">
    {children}
  </Flex>
)

export default Content
