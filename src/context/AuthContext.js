import axios from "axios";
import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
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
				sessionStorage.setItem("refreshToken", rest.data.refresh);
				setUserData(rest.data.access);
				router.push("/table");
			}
			console.log(rest);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		const token = sessionStorage.getItem("accessToken");
		const refToken = sessionStorage.getItem("refreshToken");
		try {
			const config = {
				method: "post",
				maxBodyLength: Infinity,
				headers: {
					Authorization: `Bearer ${token}`,
				},
				data: { refresh: `${refToken}` },
			};
			console.log(config);
			// tokenlar silinir
			const res = await axios(`${baseUrl}/logout/`, config);
			if (res.status === 205) {
				sessionStorage.removeItem("accessToken");
				sessionStorage.removeItem("refreshToken");
			}
			console.log(res);
			// kullanıcıyı login sayfasına yönlendiriyoruz
			window.location.href = "/login";
		} catch (error) {
			console.log(error);
		}
	};

	const value = {
		register,
		login,
		logout,
		userData,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
