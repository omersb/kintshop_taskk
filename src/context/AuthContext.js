import axios from "axios";
import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [adres, setAdres] = useState("");

	const isClient = typeof window === "object";

	const [userData, setUserData] = useState(
		isClient && sessionStorage.getItem("accessToken")
			? sessionStorage.getItem("accessToken")
			: false
	);

	const router = useRouter();

	const baseUrl = "https://apidev.kintshop.com/api";

	const register = async (registerData) => {
		try {
			const rest = await axios.post(`${baseUrl}/register`, registerData);
			if (
				rest.data.message ===
				"User was created successfully and an email verification was sent registered email address."
			) {
				router.push("/login");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (loginData) => {
		try {
			const rest = await axios.post(`${baseUrl}/login/`, loginData);
			if (rest.status === 200) {
				sessionStorage.setItem("accessToken", rest.data.access);
				// sessionStorage.setItem("refreshToken", rest.data.refresh);
				setUserData(rest.data.access);
				router.push("/table");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const value = {
		register,
		login,
		userData,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
