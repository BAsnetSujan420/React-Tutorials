import ELEVATIONS from "../elevations";
import styled from "styled-components";
import Box from "./Box";

export const MeduimBox = styled(Box)`
  width: 100px;
  height: 100px;
  box-shadow: ${ELEVATIONS.medium};
`;
