import { forwardRef } from "react";
import { StyledInputContainer } from "./style";

export const Input = forwardRef(({ label, placeholder, id, ...rest }, ref) => {
  return (
    <>
      <StyledInputContainer>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          label={label}
          placeholder={placeholder}
          id={id}
          {...rest}
          ref={ref}
        />
      </StyledInputContainer>
    </>
  );
});
