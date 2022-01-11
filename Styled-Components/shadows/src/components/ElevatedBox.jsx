import ELEVATIONS from "../elevations";
import styled from "styled-components";
import Box from "./Box";

export const ElevatedBox = styled(Box)`
  width: 150px;
  height: 150px;
  box-shadow: ${ELEVATIONS.large};
`;
