import { createBrowserRouter } from "react-router-dom"
import Login from "../Components/Login"
import Navbar from "../Components/Navbar"
import AdmissionInfo from "../Components/AdmissionInfo"
import LoginContainer from "../Components/Login/LoginContainer"
import RootLayout from "../Components/RootLayout/RootLayout"
import Dashboard from "../Components/Dashboard"


export const routers = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Login />,
    // },
    {
        path: "/",
        element: <RootLayout />,
        children: [
   
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
   
    {
        path: "/admission",
        element: <AdmissionInfo />,
    },
    {
        path: "/login",
        element: <LoginContainer />,
    }
]
    }


])