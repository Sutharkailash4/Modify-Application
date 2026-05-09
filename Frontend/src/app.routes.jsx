import {createBrowserRouter} from "react-router"
import Register from "./features/authentication/pages/register"
import Login from "./features/authentication/pages/login"

export const router = createBrowserRouter([
    {
        path : "/",
        element : <h1>Home</h1>
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