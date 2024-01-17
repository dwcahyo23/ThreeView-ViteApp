import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStatus } from '../store/liveStatus/LiveStatusSlice'
import { Box, Stack, useColorModeValue, Button, useBoolean } from '@chakra-ui/react'
import { Select } from 'chakra-react-select'
import { RepeatIcon } from '@chakra-ui/icons'
import {
  selectLines,
  selectStatus,
  setLines,
  filteredStatus
} from '../store/liveStatus/LiveStatusSlice'
import CardMch from '../Components/CardMch'

export default function MainStatus() {
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const useLines = useSelector(selectLines)
  const useFilter = useSelector(filteredStatus)
  const [options, setOptions] = useState([])
  const [value, setValue] = useState([])
  const [useInterval, setUseInterval] = useBoolean()

  useEffect(() => {
    if (useLines && useLines.length > 0) {
      setOptions(useLines.map((label) => ({ label, value: label.toLowerCase() })))
    }
  }, [useLines])

  useEffect(() => {
    dispatch(setLines(value.map((label) => label.label)))
  }, [value])

  useEffect(() => {
    console.log(useFilter)
    let interval
    let i = 0
    if (useInterval) {
      interval = setInterval(() => {
        setData(useFilter.slice(i, i + 32))
        i += 32

        if (i > useFilter.length) {
          dispatch(getStatus())
          i = 0
        }
        console.log(i)
      }, 5000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [useInterval, useFilter])

  // useEffect(() => {
  //   let intervalPatch
  //   if (useInterval) {
  //     intervalPatch = setInterval(() => {
  //       dispatch(getStatus())
  //     }, 20000)
  //   }
  //   return () => {
  //     clearInterval(intervalPatch)
  //   }
  // }, [useInterval])

  function withInterval() {
    if (useInterval) {
      return 'red'
    }
    return 'green'
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
        <Button leftIcon={<RepeatIcon />} color={withInterval} onClick={setUseInterval.toggle}>
          Interval
        </Button>
      </Stack>
      {useMemo(() => {
        return (
          data &&
          (data.length > 0 ? (
            <div className="flex grid xs:grid-cols-1 sm:grid-cols-4 lg:grid-cols-8 gap-4 m-2">
              {data.map((val, i) => {
                return <CardMch key={i} params={val} />
              })}
            </div>
          ) : (
            <div></div>
          ))
        )
      }, [data])}
    </Box>
  )
}
