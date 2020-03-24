import React from 'react'
import { Heading, Text, Flex, Divider } from '@chakra-ui/core'

export default () => (
    <Flex m="auto">
        <Heading as="h4">Error</Heading>
        <Divider orientation="vertical" />
        <Text>Page not found</Text>
    </Flex>
)
