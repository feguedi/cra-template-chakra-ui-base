import React from 'react'
import { Heading, Text, Flex, Stack } from '@chakra-ui/core'

export default () => (
    <Flex alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
        <Stack align="center">
            <Heading as="h2">Welcome</Heading>
            <Text>Using Chakra-UI for web application</Text>
        </Stack>
    </Flex>
)
