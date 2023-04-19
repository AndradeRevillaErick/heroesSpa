import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { HeroesApp } from "../HeroesApp";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MarvelPage />,
    },
    {
        path: "MarvelPage",
        element: <MarvelPage />,
    },
    {
        path: "DcPage",
        element: <DcPage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={ router } />;
}
