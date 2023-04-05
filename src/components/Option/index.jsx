import { forwardRef } from "react";
import {StyledOption} from "./style";

export const Option = forwardRef(({ value, innerText, ...rest }, ref) => {
  return (
    <StyledOption value={value} {...rest} ref={ref}>
      {innerText}
    </StyledOption>
  );
});
