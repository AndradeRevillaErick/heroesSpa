import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";


export const AppRouter = () => {

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
      
    return <RouterProvider router={router} />;

}
