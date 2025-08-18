import { NavLink } from "react-router";
import Text from "../components/text";

export default function Footer() {
    return (
        <footer className="my-5 md:my-10">
            <nav className="flex justify-center items-center gap-4">
                <NavLink to="/">
                    <Text variant="body-sm-bold" className="text-gray-300">
                        Home
                    </Text>
                </NavLink>
                <NavLink to="/saved-tasks">
                    <Text variant="body-sm-bold" className="text-gray-300">
                        Saved Tasks
                    </Text>
                </NavLink>
            </nav>
        </footer>
    )
}