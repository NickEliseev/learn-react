import { Box, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react";

export const Count = ({ start, timeOut }: any) => {
    const [count, setCount] = useState(start);
    const [timeOutState, setTimeOutState] = useState(false)
    useEffect(() => {
        if (timeOutState) {
            setTimeout(
                () => {
                    setCount(start)
                    setTimeOutState(false)
                },
                timeOut * 3000
            )
        }
    }, [timeOutState])


    return (
        <Box>
            <Button size="xs" mr='2.5' onClick={() => setCount(count - 1)}>-</Button>
            {count}
            <Button size="xs" ml='2.5' onClick={() => {
                setCount(count + 1)
                setTimeOutState(true)
            }}>+</Button>
            <Button size="xs" onClick={() => setCount(start)}>reset</Button>
        </Box>
    )
}