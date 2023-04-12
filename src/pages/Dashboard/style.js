import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const StyledHeaderDashboardPageContainer = styled.div`
  width: 99vw;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--grey-3);

  header {
    width: 90%;
    display: flex;
    justify-content: space-between;

    img {
      height: 0.9375rem;
      width: 6.625rem;
    }
  }

  button {
    width: 3.5rem;
    height: 2rem;
    background: var(--grey-3);
    border: 2px solid var(--grey-3);
    border-radius: var(--border-radius);
    font-size: var(--text-12);
    font-weight: 600;
    color: var(--grey-0);
  }

  @media (min-width: 768px) {
    header {
      width: 60%;
    }
  }
`;

export const StyledMainDashboardContainer = styled.main`
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  section:nth-child(1),
  section:nth-child(2) {
    width: 100%;
    height: 8.1875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid var(--grey-3);

    p:nth-child(1) {
      width: 90%;
      font-size: var(--text-18);
      color: var(--grey-0);
      font-weight: 700;
    }

    p:nth-child(2) {
      width: 90%;
      font-size: var(--text-12);
      font-weight: 400;
      color: var(--grey-1);
    }
  }

  section:nth-child(2) {
    margin-top: 1rem;
    border-bottom: none;
    height: auto;

    p:nth-child(1) {
      font-size: var(--text-16);
    }

    p:nth-child(2) {
      color: var(--white);
    }
  }

  @media (min-width: 768px) {
    section:nth-child(1),
    section:nth-child(2) {
      p:nth-child(1),
      p:nth-child(2) {
        width: 60%;
      }
    }

    section:nth-child(1) {
      flex-direction: row;
      p:nth-child(1),
      p:nth-child(2) {
        width: 30%;
      }

      p:nth-child(2) {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
