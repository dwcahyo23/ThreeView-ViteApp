import { useState, useEffect } from 'react'
import { Center, HStack, Box } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { getStatus } from '../store/liveStatus/LiveStatusSlice'

function Home() {
  const dispatch = useDispatch()
  const [data, setData] = useState(null)

  function handleGetStatus() {
    dispatch(getStatus()).then((action) => {
      if (action.payload) {
        setData(action.payload)
      }
    })
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <PhoneIcon />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Center>
      </HStack>
    </Box>
  )
}

export default Home
