import {createBrowserRouter} from "react-router"
import Register from "./features/authentication/pages/register"
import Login from "./features/authentication/pages/login"
import Protected from "./features/authentication/components/protected"

export const router = createBrowserRouter([
    {
        path : "/",
        element : <Protected><h1>Home</h1></Protected>
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