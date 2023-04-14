import styled from "styled-components";

export const StyledContainerSectionTechs = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const StyledContainerTitle = styled.span`
  display: flex;
  justify-content: space-between;

  h3 {
    color: var(--grey-0);
    font-size: var(--text-default);
    font-weight: 600;
    line-height: 1.125rem;
  }

  button {
    background-color: transparent;
    border: none;
    height: 2rem;
    width: 2rem;

    img {
      height: 2rem;
      width: 2rem;
      object-fit: cover;
    }
  }
`;

export const StyledContainerTechList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--grey-3);
  gap: 1rem;
  justify-content: center;
  border-radius: var(--border-radius);
  color: var(--grey-0);
  font-weight: 700;
  line-height: 1.5625rem;
  padding: 1.375rem 0.7rem;
  cursor: pointer;
`;

