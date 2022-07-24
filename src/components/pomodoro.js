import React, { useState, useEffect } from "react";
import { Box, HStack, Text, Input } from "@chakra-ui/react"

const styles = {
  listHead: {
    borderRadius: "8px",
    color: "#008000",
    border: "1px solid #008000",
    width: "6rem",
    padding: "8px",
    marginBottom: "1rem"
  }
}

function Pomodoro() {

  const [cycles, setCycles] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [cycleTimer, setCycleTimer] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    if (cycles) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, cycles]);


  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  useEffect(() => {
    if (cycles && timerMinutes === "00" && cycleTimer) {
      setCycles(cycles - 1);
      console.log(cycles);
      setCycleTimer(false);
    } else if (timerMinutes === "00") {
      setCycleTimer(true);
    }
  }, [timerMinutes]);
  const onChangeHandler = (e) => {
    setCycles(e.target.value);
  };


  return (
    <Box fontSize="2rem" h="27.5rem" width="fit-content" mt="4.5rem">
      <HStack spacing={4} mt="2rem">
        <Input
          mt="1rem"
          htmlSize={20}
          width='auto'
          variant='flushed'
          type="text"
          onChange={(e) => onChangeHandler(e)}
          focusBorderColor="#008000"
        />
      </HStack>
      {
        cycles
          ?
          <>
            <Box fontSize="2rem" font="sec">
              <Box
                color="green"
                fontSize="2.5rem"
                mt="1rem"
              >
                {displayMessage ? "Break time! New session starts in:" : "Greatness is within sight!"}
              </Box>
            </Box>
            <Box
              color="green"
              fontSize={{ sm: "8rem", md: "8rem", lg: "6rem", xl: "8rem" }}
              pt="6rem"
            >
              {timerMinutes}:{timerSeconds}
            </Box>
          </>
          :
          <Box
            color="green"
            fontSize="2.5rem"
            mt="1rem"
          >kindly set cycle to proceed!</Box>
      }
    </Box>
  );
}
export default Pomodoro