import { cva } from "class-variance-authority";
import React from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  disabled?: boolean;
  isClicked?: boolean;
};

const Button = ({
  className,
  disabled = false,
  isClicked,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={buttonVariants({ variant, disabled, isClicked })}
      onClick={onClick}
      {...props}
    />
  );
};

const buttonVariants = cva(
  "py-2 px-4 rounded-md font-semibold bg-black text-white transition-transform",
  {
    variants: {
      variant: {
        primary: "hover:bg-red-500",
        secondary: "bg-grayscale-700 text-white",
      },

      disabled: {
        true: "cursor-not-allowed bg-green-500",
        false: "bg-blue-500",
      },

      isClicked: {
        true: "scale-125 ease-in duration-1000",
      },

      defaultVariants: {
        variant: "primary",
      },
    },
  }
);

export default Button;
