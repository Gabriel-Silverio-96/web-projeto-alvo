import * as React from "react";

const Button = React.forwardRef<HTMLButtonElement, any>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

export { Button };
