import { Outlet } from "react-router";
import Header from "../core-components/header";
import Main from "../core-components/main";
import Footer from "../core-components/footer";

export function MainLayout() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    )
}