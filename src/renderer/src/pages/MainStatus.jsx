import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStatus } from '../store/liveStatus/LiveStatusSlice'
import { Box, Stack, useColorModeValue, Button, Container, Flex } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { RepeatIcon } from '@chakra-ui/icons'
import {
  selectLines,
  selectStatus,
  setLines,
  filteredStatus
} from '../store/liveStatus/LiveStatusSlice'
import { useVirtualizer } from '@tanstack/react-virtual'
import CardMch from '../Components/CardMch'

export default function MainStatus() {
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const useLines = useSelector(selectLines)
  const useFilter = useSelector(filteredStatus)
  const [options, setOptions] = useState([])
  const [value, setValue] = useState([])

  useEffect(() => {
    if (useLines && useLines.length > 0) {
      setOptions(useLines.map((label) => ({ label, value: label.toLowerCase() })))
    }
  }, [useLines])

  useEffect(() => {
    dispatch(setLines(value.map((label) => label.label)))
    // console.log(value)
  }, [value])

  function handleGetStatus() {
    dispatch(getStatus())
  }
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')}>
      <Stack direction={['column', 'row']} spacing={4} p={4}>
        <Select
          isMulti
          name="colors"
          options={options}
          placeholder="Select some colors..."
          closeMenuOnSelect={false}
          onChange={setValue}
          className="chakra-react-select"
          classNamePrefix="chakra-react-select"
        />
        <Button leftIcon={<RepeatIcon />} onClick={handleGetStatus}>
          Reload
        </Button>
      </Stack>
      <Container>
        <Stack direction={['column', 'row']} spacing={4} p={4}>
          {useMemo(() => {
            return (
              useFilter &&
              (useFilter.length > 0 ? (
                <div>
                  {useFilter.map((data, i) => {
                    return <CardMch key={i} params={data} />
                  })}
                </div>
              ) : (
                <div></div>
              ))
            )
          }, [useFilter])}
        </Stack>
      </Container>
    </Box>
  )
}
