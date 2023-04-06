import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 6.3125rem;
    height: 0.875rem;
  }

  @media (min-width: 768px){
    img{
      width:9rem;
      height: 1.25rem
      margin-top: 1rem;
    }
}

`;
