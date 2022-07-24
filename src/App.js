import React from 'react'
import { Box, HStack, Divider, Stack } from "@chakra-ui/react"
import Pomodoro from './components/pomodoro'
import ListDifferences from './components/List_differences'

function App() {
  return (
    <Box pl="5rem" pr="5rem">
      <Box display={{ sm: "none", md: "none", lg: "block", xl: "block" }}>
        <HStack spacing={30} p="3.5rem">
          <Box align="center">
            <Box
              borderRadius="8px"
              color="#fff"
              bg="#008000"
              width="fit-content"
              p="8px"
              fontSize="1.4rem"
              font="sec"
            >
              List Differences
            </Box>
            <ListDifferences />
          </Box>
          <Stack direction='row' h='600px' p={3}>
            <Divider orientation='vertical' />
          </Stack>
          <Box align="center">
            <Box
              borderRadius="8px"
              color="#fff"
              bg="#008000"
              width="fit-content"
              p="8px"
              fontSize="1.4rem"
              mb="3rem"
              font="sec"
            >
              Pomodoro Timer
            </Box>
            <Pomodoro />
          </Box>
        </HStack>
      </Box>
      <Box display={{ sm: "block", md: "block", lg: "none", xl: "none" }}>
        <vStack spacing={30} p="3.5rem" >
          <Box align="center" pt="3rem">
            <Box
              borderRadius="8px"
              color="#fff"
              bg="#008000"
              width="fit-content"
              p="8px"
              fontSize="1.4rem"
              font="sec"
            >List Differences</Box>
            <ListDifferences />
          </Box>
          <Stack direction='row' p={3} mt="5rem" mb="2rem">
            <Divider orientation='horizontal' />
          </Stack>
          <Box align="center">
            <Box
              borderRadius="8px"
              color="#fff"
              bg="#008000"
              width="fit-content"
              p="8px"
              fontSize="1.4rem"
              mb="3rem"
              font="sec"
            >
              Pomodoro Timer
            </Box>
            <Pomodoro />
          </Box>
        </vStack>
      </Box>
    </Box>
  )
}

export default App
