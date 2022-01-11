import ELEVATIONS from "../elevations";
import styled from "styled-components";
import Box from "./Box";

export const SubtleBox = styled(Box)`
  width: 50px;
  height: 50px;
  box-shadow: ${ELEVATIONS.small};
`;
