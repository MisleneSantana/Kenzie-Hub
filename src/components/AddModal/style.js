import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color:var(--grey-3);
  border-radius:0.2006rem;
  position: fixed;
  top: 150px;
  margin: auto;
  z-index:0;

  
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background-color: var(--grey-2);
    border-radius:0.2006rem 0.2006rem 0 0;

    h3 {
        margin-left: 1rem;
        font-size: 0.6875rem;
        font-weight: 700;
        line-height:1.25rem;
        color:var(--grey-0);
    }

    button{
      display: flex;
        background-color:transparent;
        border: none;
        margin-right: 1rem;
    }
  }

  form{
    margin-top:0.5rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 1.5rem;
    width: 100%;

    div>input{
        color: var(--grey-1);
        height:2.4063rem; 
        margin-bottom:1rem;

        :focus{
          color: var(--grey-0);
        }
    }

    label{
      font-size: 0.625rem;
      font-weight:400;
      color: var(--grey-0);
      width: 90%;
    }
    
    select{
        width:90%;
        height:2.4063rem; 
        background-color: var(--grey-2);
        border: 0.0762rem solid var(--grey-2);
        border-radius: var(--border-radius);
        color: var(--grey-1);
        padding: 0px 1rem;
        margin: 0.5rem 0 1.5rem 0;

        :focus{
          border: 0.0762rem solid var(--grey-0);
          color: var(--grey-0);
          font-size: var(--text-default);
          line-height: 1.625rem;
          font-weight:400;
        }
    }

    button{
        width: 90%;
        height:2.4063rem;
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: var(--border-radius);
        color: var(--white);
        font-size:0.8125rem;
        line-height:1.3125rem;
        font-weight:500;
    }
  }

  @media (min-width: 768px){
    width:23.0625rem;
    inset: 0;
    height: 290px;
    z-index:0;
  }
`;
