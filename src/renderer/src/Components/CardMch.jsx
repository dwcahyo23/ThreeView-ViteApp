import React from 'react'
import { Card, CardBody, Text } from '@chakra-ui/react'

export default function CardMch({ params }) {
  return (
    <Card>
      <CardBody>
        <Text> {params.mchCode}</Text>
      </CardBody>
    </Card>
  )
}
