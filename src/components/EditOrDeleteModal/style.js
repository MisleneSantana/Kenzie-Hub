import styled from "styled-components";

export const StyledModalPreviewTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--grey-3);
  border-radius: var(--border-radius);
  width: 90%;
  position: fixed;
  margin: auto;
  inset: 0;
  height: 290px;
  z-index:1000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
  rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
  rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  // box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  span {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);
    border-radius: 0.2006rem 0.2006rem 0 0;

    h3 {
      font-size: var(--text-12);
      font-weight: 700;
      line-height: 1.25rem;
      margin-left: 1rem;
    }

    button {
      height: 1.3125rem;
      width: 1.3125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      margin-right: 1rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    // gap: 1rem;
    width: 90%;

    div {
      width: 100%;
      margin-bottom:1rem;

      input {
        height: 2.3981rem;
        cursor: not-allowed;
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
        margin-bottom: 1.5rem;
        cursor: pointer;
  
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

        :hover{
          background-color: var(--color-primary-focus);
          border: 2px solid var(--color-primary-focus);
        }
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

        :hover{
          background-color: var(--grey-4);
          border: 2px solid var(--grey-4);
        }
      }
    }
  }

  @media (min-width: 768px){
    width:23.0625rem;
    inset: 0;
    height: 290px;
  }
`;
