import styled from "styled-components";

export const StyledRegisterForm = styled.form`
  width: 18.5rem;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.2006rem;
  margin-bottom: 1rem;

  h3 {
    font-size: 0.8994rem;
    line-height: 1.375rem;
    font-weight: 700;
    color: var(--grey-0);
    margin-top: 1rem;
  }

  h4 {
    margin-top: 1rem;
    font-size: 0.5994rem;
    font-weight: 400;
    line-height: 1.125rem;
    color: var(--grey-1);
  }

  label {
    font-size: 0.625rem;
  }

  input {
    font-size: 0.8125rem;
    font-weight: 400;
    line-height: 1.3188rem;
    height: 2.3988rem;
  }

  span {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 0.5rem;

    label {
      font-size: 0.625rem;
      font-weight: 400;
      color: var(--grey-0);
    }

    select {
      height: 3rem;
      width: 100%;
      background-color: var(--grey-2);
      border: 0.97px solid var(--grey-2);
      border-radius: var(--border-radius);
      color: var(--grey-1);
      font-size: 0.8125rem;
      font-weight: 400;
      padding: 1rem 1rem;
    }
  }

  button {
    width: 90%;
    height: 2.3988rem;
    margin: 0.5rem 0 1rem 0;
    background-color: var(--color-primary-negative);
    border: 1.22px solid var(--color-primary-negative);
    border-radius: var(--border-radius);
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--white);

    :hover {
      background-color: var(--color-primary-focus);
      border: 1.22px solid var(--color-primary-focus);
    }
  }

  @media (min-width: 768px) {
    width: 23.125rem;

    input,
    button {
      height: 3rem;
    }
  }
`;
