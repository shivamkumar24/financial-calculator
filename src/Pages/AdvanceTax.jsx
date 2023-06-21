import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useToast,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdvanceTax = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [june, setJune] = useState(0);
  const [sept, setSept] = useState(0);
  const [dec, setDec] = useState(0);
  const [mar, setMar] = useState(0);
  const [previousTax, setPreviousTax] = useState(0);

  const handleBack = () => {
    navigate("/");
  };

  const handleReset = () => {
    setPreviousTax(0);
    setJune(0);
    setSept(0);
    setDec(0);
    setMar(0);
  };

  const handleCalculate = () => {
    if (previousTax === 0) {
      toast({
        title: `Please fill the amount first`,
        status: "info",
        isClosable: true,
      });
    } else if (previousTax > 0 && previousTax < 10000) {
      toast({
        title: `Amount should be greater than or equal to 10000`,
        status: "warning",
        isClosable: true,
      });
    } else {
      var juneTax = previousTax * 0.15;
      var septTax = previousTax * 0.3;
      var decTax = previousTax * 0.3;
      var marTax = previousTax * 0.25;

      setJune(juneTax);
      setSept(septTax);
      setDec(decTax);
      setMar(marTax);

      toast({
        title: `Your Advance Tax Calculated Successfully`,
        status: "success",
        isClosable: true,
      });
    }
  };

  return (
    <Box padding={"10px"}>
      <Container
        bgColor={"teal"}
        color={"whiteAlpha.800"}
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight={"bold"}
      >
        ADVANCE TAX CALCULATOR
      </Container>

      {/* ------------------------- Form ----------------------------- */}
      <Box width={{ base: "90%", md: "68%" }} margin={"auto"}>
        <Text fontWeight="bold">Fill Previous Year Tax Amount</Text>
        <Input
          type="number"
          bgColor={"white"}
          value={previousTax}
          width={{ base: "80%", md: "60%" }}
          margin={{ base: "10px", md: "20px" }}
          onChange={(e) => setPreviousTax(e.target.value)}
        />
        <Flex
          width={{ base: "90%", md: "68%" }}
          margin={"auto"}
          justifyContent={"center"}
        >
          <Button
            m={"5px"}
            bgColor={"#7b8f8a"}
            color={"white"}
            onClick={() => handleBack()}
          >
            Back
          </Button>
          <Button
            m={"5px"}
            bgColor={"#f07241"}
            color={"white"}
            onClick={() => handleCalculate()}
          >
            Calculate
          </Button>
          <Button
            m={"5px"}
            bgColor={"#7b8f8a"}
            color={"white"}
            onClick={() => handleReset()}
          >
            Reset
          </Button>
        </Flex>
      </Box>

      {/* --------------------------- Result ------------------------- */}
      <Box
        margin={"auto"}
        mt="30px"
        textAlign="center"
        fontWeight="bold"
        width={{ base: "90%", md: "68%" }}
      >
        <Text>For 15th June is (15%): {june} </Text>
        <Text>For 15th Sept is (45%): {sept} </Text>
        <Text>For 15th Dec is (75%): {dec} </Text>
        <Text>For 15th Mar is (100%): {mar} </Text>
      </Box>
    </Box>
  );
};

export default AdvanceTax;
