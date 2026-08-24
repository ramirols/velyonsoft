import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition-[transform,background-color,border-color,box-shadow] outline-none focus-visible:ring-4 focus-visible:ring-velyon-mint/25 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-velyon-deep bg-velyon-deep px-5 text-white shadow-sm hover:-translate-y-0.5 hover:bg-velyon-deep-dark hover:shadow-lg",
        light:
          "border-white bg-white px-5 text-velyon-deep hover:-translate-y-0.5 hover:bg-velyon-mint-soft",
        outline:
          "border-border bg-white px-5 text-foreground hover:border-velyon-deep hover:bg-velyon-mint-soft hover:text-velyon-deep",
        ghost:
          "border-transparent bg-transparent px-3 text-velyon-deep hover:bg-velyon-mint-soft",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-10 rounded-lg px-4 text-xs",
        lg: "h-13 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      data-slot="button"
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
