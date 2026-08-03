'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import NextLink from "next/link"

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from '@/components/animate-ui/primitives/buttons/button';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "ff-title inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md px-6 font-semibold whitespace-nowrap transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] outline-none hover:shadow-xl focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-primary/35 hover:bg-primary/90",
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
        destructive:
          "bg-destructive text-white shadow-destructive/35 hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-muted-foreground/5 hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 rounded-full px-5 py-2 text-sm has-[>svg]:px-3 md:h-14 md:px-7 md:text-base",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// `link` variant only needs plain ReactNode children (text, icons, etc.)
// `ButtonPrimitive`'s own children stay exactly as it declares them, // required, since it likely clones/animates a single child internally.
type ButtonProps = Omit<ButtonPrimitiveProps, "children"> &
  VariantProps<typeof buttonVariants> & {
    link?: string
    children?: React.ReactNode
  };

function Button({
  className,
  variant,
  size,
  link,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (link) {
    return (
      <NextLink href={link} className={classes}>
        {children}
      </NextLink>
    )
  }

  const primitiveProps = {
    ...props,
    className: classes,
    children,
  } as ButtonPrimitiveProps

  return <ButtonPrimitive {...primitiveProps} />
}

export { Button, buttonVariants, type ButtonProps }