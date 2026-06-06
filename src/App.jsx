import { Routes, Route } from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
import MainFooter from "./components/MainFooter";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";

const App = () => {

    return (

        <>

            <MainNavigation />

            <Routes>

                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/menu"
                    element={<MenuPage />}
                />

                <Route
                    path="/about-us"
                    element={<AboutPage />}
                />

            </Routes>

            <MainFooter />

        </>

    )

}

export default App