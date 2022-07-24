import React, { useState } from 'react'
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

function List_differences() {

    const [Item, setItem] = useState("")
    const [showDifference, setShowDifference] = useState(false)
    const [Difference, setDifference] = useState("")

    const ListA = [
        "Bananas",
        "Blueberries",
        "Cherry",
        "Grapes",
        "Apple",
        "Pineapple",
        "Strawberry",
        "Almonds",
        "Orange",
        "Mango",
        "Coconut"
    ]
    const ListB = [
        "Cherry",
        "Kiwi",
        "Apricot",
        "Grapes",
        "Jackfruit",
        "Lime",
        "Papaya",
        "Pear",
        "Strawberry",
        "Pomegranate",
        "Avocado"
    ]

    const handleInput = (e) => {
        setItem(e.target.value)
    }
    const ListDifference = () => {
        setShowDifference(true)
        if (ListA.includes(Item) && !ListB.includes(Item)) {
            setDifference("Items present only in A")
        } else if (ListB.includes(Item) && !ListA.includes(Item)) {
            setDifference("Items present only in B")
        } else if (ListA.includes(Item) && ListB.includes(Item)) {
            setDifference("Items present in both A and B")
        }
        else {
            setDifference("Items combining both A and B (unique)")
        }
        setItem("")
    }

    return (
        <>
            <HStack spacing={20} pt="4rem">
                <Box
                    width={{ sm: "15rem", md: "15rem", lg: "fit-content", xl: "15rem" }}
                    border="1px solid #000"
                    borderRadius="8px"
                    p="2rem"
                    align="center"
                >
                    <Text
                        style={styles.listHead}
                    >List A</Text>
                    {
                        ListA.map((i) => {
                            return <div>{i}</div>
                        })
                    }
                </Box>
                <Box
                    width={{ sm: "15rem", md: "15rem", lg: "fit-content", xl: "15rem" }}
                    border="1px solid #000"
                    borderRadius="8px"
                    p="2rem"
                    align="center"
                >
                    <Text style={styles.listHead} align="center">List B</Text>
                    {
                        ListB.map((i) => {
                            return <div>{i}</div>
                        })
                    }
                </Box>
            </HStack>
            <HStack mt="1rem" spacing={4}>
                <Text style={{ ...styles.listHead, border: "none", width: "fit-content" }}>Enter an Item:</Text>
                <Input
                    mt="1rem"
                    htmlSize={20}
                    width='auto'
                    variant='flushed'
                    value={Item}
                    focusBorderColor="#008000"
                    onChange={handleInput}
                />
                <Box
                    as="button"
                    borderRadius="8px"
                    mt="1rem"
                    color="#008000"
                    border="1px solid #008000"
                    width="fit-content"
                    p="4px"
                    onClick={ListDifference}
                >Difference</Box>
            </HStack>
            {
                showDifference &&
                <Box
                    mt="1rem"
                    fontSize="1.4rem"
                    font="sec"
                    color="green"
                >{Difference}</Box>
            }
        </>
    )
}

export default List_differences