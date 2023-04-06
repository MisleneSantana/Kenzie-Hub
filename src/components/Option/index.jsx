import { forwardRef } from "react";
import { StyledOption } from "./style";

export const Option = forwardRef(({ value, text, ...rest }, ref) => {
  return (
    <StyledOption value={value} {...rest} ref={ref}>
      {text}
    </StyledOption>
  );
});
