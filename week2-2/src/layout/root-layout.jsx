import {createBrowserRouter, RouterProvider} from "react-router-dom";

// 1. 만든 페이지들을 import
import HomePage from "../pages/MoviesPage.jsx";
import NotFound from "../pages/not-found.jsx";

// 2. 연결
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.jsx";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default RootLayout;
