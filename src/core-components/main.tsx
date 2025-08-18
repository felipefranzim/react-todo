import { cx } from "class-variance-authority";

interface MainProps extends React.ComponentProps<"main"> {

}

export default function Main({ children, className }: MainProps ) {
    return (
        <main className={cx("mt-4 md:mt-8", className)}>
            { children }
        </main>
    )
}