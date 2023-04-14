import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
from{
  transform: rotate(0deg);
}

to{
  transform: rotate(360deg);
}
`;

export const StyledLoading = styled.div.attrs({
  className: "loading",
})`
  display: flex;
  height: 12.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;

  h1 {
    color: var(--grey-2);
    font-size: var(--text-18);
    font-weight: 700;
  }

  img {
    animation: ${rotateAnimation} 3s linear infinite;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
