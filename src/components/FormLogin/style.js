import styled from "styled-components";

export const StyledLoginForm = styled.form`
  width: 18.5rem;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 0.2006rem;

  h3 {
    font-size: 0.9375rem;
    line-height: 1.4038rem;
    color: var(--grey-0);
    font-weight: 700;
    margin-top: 2rem;
  }

  button {
    height: var(--button-height);
    width: 90%;
    background-color: var(--color-primary);
    border: 0.0762rem solid var(--color-primary);
    border-radius: var(--border-radius);
    font-size: var(--text-default);
    line-height: 1.625rem;
    color: var(--white);
    font-weight: 500;
    margin-top: 0.5rem;
  }

  p {
    margin-top: 1rem;
    font-size: var(--text-12);
    line-height: 1.125rem;
    font-weight: 600;
    color: var(--grey-1);
  }

  a {
    height: 3rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
    font-size: var(--text-default);
    font-weight: 500;
    line-height: 1.625rem;
    color: var(--grey-0);
  }

  @media (min-width: 768px) {
    width: 23.0625rem;
  }
`;
