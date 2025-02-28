import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setshowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const loadCreditsData = async () => {
        if (!token) return;
        
        try {
            const headers = { headers: { token } };
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, headers);
            
            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Failed to load credits.");
        }
    };

    const genrateImage = async (prompt) => {
        if (!token) {
            toast.error("Unauthorized! Please log in.");
            return;
        }

        try {
            const headers = { headers: { token } };
            const { data } = await axios.post(
                `${backendUrl}/api/image/generate-image`,
                { prompt },
                headers
            );

            if (data?.success) {
                loadCreditsData();
                return data.resultImage;
            } else {
                toast.error(data?.message || "An error occurred.");
                loadCreditsData();

                if (data?.creditBalance === 0) {
                    navigate('/buy');
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    useEffect(() => {
        if (token) loadCreditsData();
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setshowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        genrateImage
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
