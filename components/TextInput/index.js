import styled from "styled-components/native";

const StyledTextInput = styled.TextInput`
  border: 1px solid #000;
  width: 50%;
  height: 40px;
  margin-top:${({ mt }) => mt || 2}px;)}
  margin-bottom:${({ mb }) => mb || 2}px;)}
  padding: 10px;
  border-radius: 5px;
`;

export default StyledTextInput;
