import { StatusBar } from "expo-status-bar";
import React from "react";
import StyledButton from "../../components/Button";
import Container from "../../components/Container";
import Title from "../../components/Title";

export default function Login({ login }) {
  return (
    <Container>
      <Title bold={true}>Click the button to login</Title>
      <StyledButton onPress={() => login()}>
        <Title color="white" bold={true}>
          Login
        </Title>
      </StyledButton>
      <StatusBar style="auto" />
    </Container>
  );
}
