import React from "react";
import { Flex, Box, Text, ButtonCircle } from "rebass";

const HouseView = props => (
  <Flex wrap mx={-2} my={0}>
    <Box px={1} py={1} width={1} my={0} >
      <Text p={1} color="white" bg={[ 'blue', 'green' ]} >
        Double Cove
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3} my={0}>
      <Text p={1} color="white" bg="blue">
        Name
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3} my={0} />
    <Box px={2} py={1} width={1 / 3} my={0}>
      <Text p={1} color="white" bg="blue">
        Gordon
      </Text>
    </Box>

    <Box px={2} py={1} width={1 / 3}>
      <Text p={1} color="white" bg="blue">
        Date Post:
      </Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3}>
      <Text p={1} color="white" bg="blue">
        Trade Day:
      </Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3}>
      <Text p={1} color="white" bg="blue">
        View Day:
      </Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3}>
    <Text p={1} color="white" bg="blue">Date Post:</Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3}>
      <Text p={1} color="white" bg="blue">
        Trade Day:
      </Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3}>
      <Text p={1} color="white" bg="blue">
        View Day:
      </Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1/5} width={1 / 3}>
    <Text p={1} color="white" bg="blue">Date Post:</Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3}>
      <Text p={1} color="white" bg="blue">
        Trade Day:
      </Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={2} py={1} width={1 / 3}>
      <Text p={1} color="white" bg="blue">
        View Day:
      </Text>
      <Text p={1} color="white" bg="blue">
        2nd Jan, 2017
      </Text>
    </Box>
    <Box px={1} py={2} width={1}>
      <ButtonCircle width={1} children="96181448" />
    </Box>
    <Box px={1} py={2} width={1}>
      <ButtonCircle width={1} children="Whatsapp" />
    </Box>
    <Box px={1} py={2} width={1}>
      <ButtonCircle width={1} children="Exit" />
    </Box>
  </Flex>
);

export default HouseView;
