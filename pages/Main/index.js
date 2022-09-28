import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import StyledButton from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";

export default function Main() {
  const [isBold, setIsBold] = useState(false);
  return (
    <Container>
      <StyledButton onPress={() => setIsBold((prevValue) => !prevValue)}>
        <Title color="white" bold={isBold}>
          Bold
        </Title>
      </StyledButton>
      <Title bold={isBold}>Main Screen</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
