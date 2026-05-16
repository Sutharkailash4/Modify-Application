import {createBrowserRouter} from "react-router"
import Register from "./features/authentication/pages/register"
import Login from "./features/authentication/pages/login"
import Protected from "./features/authentication/components/protected"
import Home from "./features/home/pages/home"

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/register",
        element : <Register />
    },
])