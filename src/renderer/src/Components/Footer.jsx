import { Box, Container, Stack, Text, useColorModeValue, Flex } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('teal.300', 'teal.800')}
      color={useColorModeValue('gray.900', 'gray.200')}
      position="absolute"
      bottom={0}
      left={0}
      width="100%"
      px={4}
    >
      <Flex h={10} alignItems={'center'} justifyContent={'space-between'}>
        <Text>© 2024 yusuf dwi</Text>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}></Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
