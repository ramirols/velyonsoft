import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]",
  {
    variants: {
      variant: {
        default: "border-velyon-deep/15 bg-velyon-mint-soft text-velyon-deep",
        outline: "border-current bg-transparent text-current",
        lavender: "border-velyon-indigo/10 bg-velyon-lavender-soft text-velyon-indigo",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
