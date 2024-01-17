import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [myTime, setMyTime] = useState(dayjs().format('HH:mm:ss DD MMMM YYYY'))

  useEffect(() => {
    setInterval(() => {
      setMyTime(dayjs().format('HH:mm:ss DD MMMM YYYY'))
    }, 1000)
  })

  return (
    <>
      <Box
        bg={useColorModeValue('teal.400', 'teal.800')}
        color={useColorModeValue('white', 'white')}
        px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading size="md">Three View API</Heading>

          <Heading size="sm">{myTime}</Heading>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
