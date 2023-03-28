import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 75%;
  margin: auto;
  height: 100%;
`;

export const Bounce = keyframes`
 from {
    transform: translate(0px);
  }

  to {
    transform: translateY(10px);
  }
`;

interface RowColumnProps {
  flexDirection?: string;
}

export const RowColumn = styled.div<RowColumnProps>`
  height: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  max-width: 75%;
  margin: auto;
`;

export const CenterView = styled.div`
  duration: 300ms;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
