import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";
import Skeleton from "./skeleton";

export const checkboxWrapperVariants = cva(`
    inline-flex items-center justify-center relative group
`);

export const checkboxVariants = cva(`
    appearence-none peer flex items-center cursor-pointer
    transition overflow-hidden
`, {
    variants: {
        variant: {
            none: "",
            default: `
                border-2 border-solid
                border-green-base hover:border-green-dark hover:bg-green-dark/20
                checked:border-green-base checked:bg-green-base
                group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
            `
        },
        size: {
            md: "w-5 h-5 rounded-sm"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        disabled: false
    }
});

export const checkboxIconVariants = cva(`
    absolute top-1/2 left-1 -translate-y-1/2
    hidden peer-checked:block fill-white
`, {
    variants: {
        size: {
            md: "w-3 h-3"
        }
    },
    defaultVariants: {
        size: "md"
    }
});

interface CheckboxProps extends VariantProps<typeof checkboxVariants>,
                                Omit<React.ComponentProps<"input">, "size" | "disabled"> {
    loading?: boolean;
}

export default function Checkbox({ variant, size, disabled, className, loading, ...props } : CheckboxProps) {
    if(loading) {
        return <Skeleton rounded="sm" 
                         className={checkboxVariants({ variant: "none", size })} />
    }
    return(
        <label className={checkboxWrapperVariants({className})}>
            <input type="checkbox" className={checkboxVariants({variant, size, disabled})} {...props} />
            <Icon svg={CheckIcon} className={checkboxIconVariants({size})} />
        </label>
    )
}