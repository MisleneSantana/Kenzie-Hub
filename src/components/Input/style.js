import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 90%;

  label {
    font-size: 0.7612rem;
    font-weight: 400;
    color: var(--grey-0);
  }

  p {
    font-size: 0.625rem;
    font-weight: 400;
    line-height: 0.625rem;
    color: var(--grey-1);
  }
`;
