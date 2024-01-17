import React from 'react'
import { Card, CardBody, CardHeader, Text, Heading, useColorModeValue, Tag } from '@chakra-ui/react'

export default function CardMch({ params }) {
  function handleColor() {
    if (params.operation == 'false') {
      return useColorModeValue('red.500', 'red.700')
    }
    return useColorModeValue('green.400', 'green.600')
  }

  function handleTagColor(prop) {
    if (prop == true) {
      return useColorModeValue('red.400', 'red.700')
    }
    return useColorModeValue('blue.400', 'blue.600')
  }

  return (
    <Card className="flex flex-col shadow rounded-md" variant="outline">
      <CardHeader className="rounded-t-md" bg={handleColor} color={'white'}>
        <Heading size="sm">
          {params.mchCode} {params.mchName}
        </Heading>
      </CardHeader>
      <CardBody>
        <div className="flex grid xs:grid-cols-1 sm:grid-cols-2 gap-2 m-0">
          <Tag
            bg={handleTagColor(params.equipmentFail)}
            color="white"
            alignContent="center"
            justifyContent="center"
            className="flex flex-col"
          >
            MN
          </Tag>
          <Tag
            bg={handleTagColor(params.qualitySelfInspec)}
            color="white"
            alignContent="center"
            justifyContent="center"
            className="flex flex-col"
          >
            QC SELF
          </Tag>
          <Tag
            bg={handleTagColor(params.qualitySettingInspec)}
            color="white"
            alignContent="center"
            justifyContent="center"
            className="flex flex-col"
          >
            QC INSP
          </Tag>
        </div>
      </CardBody>
    </Card>
  )
}
