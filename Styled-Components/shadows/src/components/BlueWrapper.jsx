import styled from "styled-components";
import Wrapper from "./Wrapper";

const BlueWrapper = styled(Wrapper)`
  --shadow-color: 220deg 60% 50%;
  background-color: hsl(220deg 100% 80%);
  padding: 32px;
  flex-grow: 1;
`;

export default BlueWrapper;
