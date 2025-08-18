import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import CheckIcon from "../assets/icons/check.svg?react";

export const chechboxWrapperVariants = cva(`
    inline-flex items-center justify-center relative group
`);

export const checkboxVariants = cva(`
    appearence-none peer flex items-center cursor-pointer
    border-2 border-solid transition overflow-hidden
    border-green-base hover:border-green-dark hover:bg-green-dark/20
    checked:border-green-base checked:bg-green-base
    group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
`, {
    variants: {
        size: {
            md: "w-5 h-5 rounded-sm"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
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
}

export default function Checkbox({ size, disabled, className, ...props } : CheckboxProps) {
    return(
        <label className={chechboxWrapperVariants({className})}>
            <input type="checkbox" className={checkboxVariants({size, disabled})} {...props} />
            <Icon svg={CheckIcon} className={checkboxIconVariants({size})} />
        </label>
    )
}