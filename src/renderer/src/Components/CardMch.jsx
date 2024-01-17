import React from 'react'
import { Card, CardBody, CardHeader, Text, Heading, useColorModeValue } from '@chakra-ui/react'

export default function CardMch({ params }) {
  function handleColor() {
    if (params.operation == 'false') {
      return useColorModeValue('red.500', 'red.700')
    }
    return useColorModeValue('green.400', 'green.600')
  }

  return (
    <Card className="flex flex-col shadow rounded-md" variant="outline">
      <CardHeader className="rounded-t-md" bg={handleColor} color={'white'}>
        <Heading size="sm"> {params.mchCode}</Heading>
      </CardHeader>
      <CardBody>
        <Text> TEXT1</Text>
        <Text> TEXT1</Text>
        <Text> TEXT1</Text>
      </CardBody>
    </Card>
  )
}
