import {
  Box,
  Text,
  Flex,
  Input,
  Container,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HouseRent = () => {
  const navigate = useNavigate();
  const [da, setDA] = useState(null);
  const [hra, setHRA] = useState(null);
  const [rent, setRent] = useState(null);
  const [tick, setTick] = useState(false);
  const [commision, setCommision] = useState(null);
  const [basicSalary, setBasicSalary] = useState(null);
  const [exemptedHouseRent, setExemptedHouseRent] = useState(0);
  const [taxableHouseRent, setTaxableHouseRent] = useState(0);

  const handleReset = () => {
    setBasicSalary("");
    setDA("");
    setCommision("");
    setHRA("");
    setRent("");
    setTick(false);
    window.location.reload();
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleCalculate = () => {
    let salary = basicSalary * 12 + da * 12 + Number(commision);
    // console.log("ActualSalary: ", salary);

    var actualHRA = hra * 12;
    // console.log("ActualHRA: ", actualHRA);

    var actualRent = rent * 12;
    // console.log("ActualRent: ", actualRent);

    var afterLess10PercentOfSalary = actualRent - salary * 0.1; // exemption
    // console.log("AfterLess10PercentOfSalary: ", afterLess10PercentOfSalary);

    let halfSalary = 0;
    if (tick === true) {
      halfSalary = salary * 0.5;
      // console.log("halfSalary: ", halfSalary);
    } else {
      halfSalary = salary * 0.4;
      // console.log("halfSalary: ", halfSalary);
    }

    let exemption = 0;
    if (actualHRA < afterLess10PercentOfSalary && actualHRA < halfSalary) {
      exemption = actualHRA;
    } else if (
      afterLess10PercentOfSalary < actualHRA &&
      afterLess10PercentOfSalary < halfSalary
    ) {
      exemption = afterLess10PercentOfSalary;
    } else {
      exemption = halfSalary;
    }

    // console.log("Exemption: ", exemption);
    setExemptedHouseRent(exemption);

    var taxable = actualHRA - afterLess10PercentOfSalary; // taxable
    // console.log("ActualTexable: ", taxable);
    setTaxableHouseRent(taxable);
  };

  return (
    <Box padding={"10px"}>
      <Container
        bgColor={"teal"}
        color={"whiteAlpha.800"}
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight={"bold"}
      >
        HOUSE RENT ALLOWANCE CALCULATOR
      </Container>

      {/* ------------------------- Form ----------------------------- */}
      <Box width={{ base: "90%", md: "68%" }} margin={"auto"}>
        {/* -------------- Basic salary ---------------- */}
        <Flex
          bgColor="gray.600"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            Basic Salary
          </Text>
          <Input
            type="number"
            width={{ base: "", md: "30%" }}
            bgColor={"white"}
            border={"1px solid black"}
            onChange={(e) => setBasicSalary(e.target.value)}
          />
        </Flex>

        {/* ---------------- DA forming part of salary ------------------------ */}
        <Flex
          bgColor="gray"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            DA forming part of salary
          </Text>
          <Input
            type="number"
            width={{ base: "", md: "30%" }}
            bgColor={"white"}
            border={"1px solid black"}
            onChange={(e) => setDA(e.target.value)}
          />
        </Flex>

        {/* -------------- Commission (as % of turnover achieved by the employee) ---------------- */}
        <Flex
          bgColor="gray.600"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            Commission (as % of turnover achieved by the employee)
          </Text>
          <Input
            type="number"
            width={{ base: "", md: "30%" }}
            bgColor={"white"}
            border={"1px solid black"}
            onChange={(e) => setCommision(e.target.value)}
          />
        </Flex>

        {/* ---------------- HRA Received ------------------------ */}
        <Flex
          bgColor="gray"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            HRA Received
          </Text>
          <Input
            type="number"
            width={{ base: "", md: "30%" }}
            bgColor={"white"}
            border={"1px solid black"}
            onChange={(e) => setHRA(e.target.value)}
          />
        </Flex>

        {/* -------------- Rent Paid ---------------- */}
        <Flex
          bgColor="gray.600"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            Rent Paid
          </Text>
          <Input
            type="number"
            width={{ base: "", md: "30%" }}
            bgColor={"white"}
            border={"1px solid black"}
            onChange={(e) => setRent(e.target.value)}
          />
        </Flex>

        {/* ---------------- Tick if residing in metro city. ------------------------ */}
        <Flex
          bgColor="gray"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            Tick if residing in metro city.
          </Text>
          <Flex>
            <Checkbox onChange={() => setTick(!tick)} />
            <Text color={"white"} ml={"10px"}>
              (Tick if yes)
            </Text>
          </Flex>
        </Flex>

        {/* -------------- Exempted House Rent Allowance ---------------- */}
        <Flex
          bgColor="gray.600"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            Exempted House Rent Allowance
          </Text>
          <Input
            type="number"
            width={{ base: "", md: "30%" }}
            bgColor={"white"}
            border={"1px solid black"}
            value={exemptedHouseRent}
          />
        </Flex>

        {/* ---------------- Taxable House Rent Allowance ------------------------ */}
        <Flex
          bgColor="gray"
          padding={"3px 10px"}
          margin={"2px"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
            Taxable House Rent Allowance
          </Text>
          <Input
            type="number"
            width={{ base: "", md: "30%" }}
            bgColor={"white"}
            border={"1px solid black"}
            value={taxableHouseRent}
          />
        </Flex>
      </Box>
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
  );
};

export default HouseRent;
