import { useState, useEffect } from 'react'
import { Center, Heading, Button, Box } from '@chakra-ui/react'
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
      <Heading>HOME</Heading>
    </Box>
  )
}

export default Home
