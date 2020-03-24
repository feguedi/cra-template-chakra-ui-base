import React from 'react'
import { Heading, Text, Flex, Divider } from '@chakra-ui/core'

export default () => (
    <Flex direction="column">
        <Flex alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
            <Heading as="h4">Error</Heading>
            <Divider 
                mx="12px"
                borderColor="#000" 
                orientation="vertical" 
                h="3.5rem" 
                borderWidth="2px" 
            />
            <Text>Page not found</Text>
        </Flex>
    </Flex>
)
