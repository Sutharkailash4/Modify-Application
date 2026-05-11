import { login } from "../services/auth.api";
import { register } from "../services/auth.api";
import { getMe } from "../services/auth.api";
import { logout } from "../services/auth.api";
import { useContext } from "react";
import { AuthContext } from "../auth.context/auth.context";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const {user, setUser, loading, setLoading} = context;

    const handleRegister = async ({username, email, password}) => {
        try {
            setLoading(true);
            const data = await register;
            setUser(data);
            setLoading(false);
        } catch(error) {
            console.log(error.message);
        }
    } 

    const handleLogin = async ({ email, password}) => {
        try {
            setLoading(true);
            const data = await login;
            setUser(data)
            setLoading(false)
        } catch(error) {
            console.log(error.message);
        }
    }

    const handleGetMe = async () => {
        try {
            setLoading(true)
            const data = await getMe;
            setUser(data)
            setLoading(false)
        } catch(error) {
            console.log(error.message);
        }
    }

    const handleLogout = async () => {
        try {
            setLoading(true)
            const data = await logout;
            setUser(data)
            setLoading(false)
        } catch(error) {    
            console.log(error.message)
        }
    }

    return {user, loading, handleRegister, handleLogin, handleGetMe, handleLogout};
}
