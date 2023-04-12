import styled from "styled-components";

export const StyledContainerTech = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey-4);
  height: 3.0625rem;
  border-radius: var(--border-radius);
  padding: 0 0.75rem;

  small{
    font-size:0.7612rem;
    font-weight: 400;
    line-height:1.375rem;
    color: var(--grey-1);
  }

  :hover{
    background-color: var(--grey-2);

    small{
      color: var(--grey-0);
    }
  }
`;
