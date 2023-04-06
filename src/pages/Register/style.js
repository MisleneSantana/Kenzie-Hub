import styled from "styled-components";

export const StyledHeaderRegisterPageContainer = styled.div`
  width: 99vw;
  height: auto;
  display: flex;
  justify-content: center;

  header {
    width: 18.5rem;
    justify-content: space-between;

    img {
      height: 1.0625rem;
      width: 6.0994rem;
    }

    div {
      width: 4.9375rem;
      height: 2rem;
      background-color: var(--grey-3);
      border: 1px solid var(--grey-3);
      border-radius: var(--border-radius);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.625rem;
      font-weight: 600;

      a {
        color: var(--grey-0);
      }
    }
  }

  @media (min-width: 768px) {
    header {
      width: 23.125rem;
    }
  }
`;

export const StyledRegisterMainContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;
