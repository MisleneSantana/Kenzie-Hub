import styled from "styled-components";

export const StyledModalPreviewTech = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--grey-3);
  border-radius: var(--border-radius);
  width: 100%;

  span {
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.625rem;
    background-color: var(--grey-2);
    border-radius: 0.2006rem 0.2006rem 0 0;

    h3 {
      font-size: var(--text-12);
      font-weight: 700;
      line-height: 1.25rem;
    }

    button {
      height: 1.3125rem;
      width: 1.3125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    div {
      width: 100%;

      input {
        height: 2.3981rem;
      }
    }

    label {
      font-size: 0.625rem;
      font-weight: 400;
      color: var(--grey-0);
    }

    select {
      height: 2.4063rem;
      background-color: var(--grey-2);
      border: 0.0762rem solid var(--grey-2);
      border-radius: var(--border-radius);
      color: var(--grey-1);
      padding: 0px 1rem;

      :focus {
        border: 0.0762rem solid var(--grey-0);
        color: var(--grey-0);
        font-size: var(--text-default);
        line-height: 1.625rem;
        font-weight: 400;
      }
    }

    div {
      display: flex;
      justify-content: space-between;

      button:nth-of-type(1) {
        height: 2.3981rem;
        width: 10.1875rem;
        background-color: var(--color-primary-negative);
        border: 2px solid var(--color-primary-negative);
        border-radius: var(--border-radius);
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--white);
      }

      button:nth-of-type(2) {
        height: 2.3981rem;
        width: 4.8969rem;
        background-color: var(--grey-1);
        border: 2px solid var(--grey-1);
        border-radius: var(--border-radius);
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--white);
      }
    }
  }
`;
