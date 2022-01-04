import styled from "styled-components";

export const CalendarWrapper = styled.div`
  border: 3px solid;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, 3rem);
  gap: 0.5em;
  width: max-content;
  padding: 1.5em;
  margin: 2em;
`;
