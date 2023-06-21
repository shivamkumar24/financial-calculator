import {
  Box,
  Text,
  Grid,
  Image,
  Button,
  GridItem,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box padding={"10px"}>
      <Container
        bgColor={"GrayText"}
        color={"whiteAlpha.800"}
        fontSize={{ base: "xl", md: "3xl" }}
        fontWeight={"bold"}
      >
        FINANCIAL CALCULATORS
      </Container>
      <Grid
        margin="auto"
        width={{ base: "80%", md: "67%" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={"auto"}
      >
        {/* ---------------- First GridItem ------------------- */}
        <GridItem
          margin={"10px"}
          mt={{ base: "15px", md: "30px" }}
          padding={"20px"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <Image
            display={"block"}
            margin={"auto"}
            src="https://img.etimg.com/photo/56667995.cms"
            alt="advanceTaxImage"
          />
          <Text
            color={"#f07241"}
            m={{ base: "8px", md: "15px" }}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={"bold"}
          >
            Home Rent Allowance
          </Text>
          <Button
            bgColor={"#f07241"}
            color={"white"}
            onClick={() => navigate("/houserent")}
          >
            FIND OUT NOW
          </Button>
        </GridItem>

        {/* ---------------------- Second GridItem ------------------- */}
        <GridItem
          margin={"10px"}
          mt={{ base: "15px", md: "30px" }}
          padding={"20px"}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        >
          <Image
            display={"block"}
            margin={"auto"}
            src="https://img.etimg.com/photo/55875114.cms"
            alt="advanceTaxImage"
          />
          <Text
            color={"#f07241"}
            m={{ base: "8px", md: "15px" }}
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={"bold"}
          >
            Advance Tax Calculator
          </Text>
          <Button
            bgColor={"#f07241"}
            color={"white"}
            onClick={() => navigate("/advancetax")}
          >
            FIND OUT NOW
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
