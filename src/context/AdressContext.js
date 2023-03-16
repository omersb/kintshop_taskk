import axios from "axios";
import { createContext, useState } from "react";

export const AdressContext = createContext();

export const AdressContextProvider = ({ children }) => {
	const [adres, setAdres] = useState("");
	const [countries, setCountries] = useState([]);
	const [il, setIl] = useState([]);
	const [ilce, setIlce] = useState([]);
	const [mahallekoyler, setMahallekoyler] = useState([]);
	const [vergidairesi, setVergidairesi] = useState([]);

	const baseUrl = "https://apidev.kintshop.com/api";

	const isClient = typeof window === "object";

	const getCountries = async () => {
		const token = sessionStorage.getItem("accessToken");
		try {
			const config = {
				method: "get",
				url: `${baseUrl}/countries/`,
				headers: { Authorization: `Bearer ${token}` },
			};
			console.log(config);

			await axios(config)
				.then(function (res) {
					console.log(res);
					setCountries(res.data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const getIl = async () => {
		const token = sessionStorage.getItem("accessToken");
		try {
			const config = {
				method: "get",
				url: `${baseUrl}/iller/`,
				headers: { Authorization: `Bearer ${token}` },
			};
			console.log(config);

			await axios(config)
				.then(function (res) {
					console.log(res);
					setIl(res.data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const getIlce = async () => {
		const token = sessionStorage.getItem("accessToken");
		try {
			const config = {
				method: "get",
				url: `${baseUrl}/ilceler/`,
				headers: { Authorization: `Bearer ${token}` },
			};
			console.log(config);

			await axios(config)
				.then(function (res) {
					console.log(res);
					setIlce(res.data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const getMahallekoyler = async () => {
		const token = sessionStorage.getItem("accessToken");
		try {
			const config = {
				method: "get",
				url: `${baseUrl}/mahallekoyler/`,
				headers: { Authorization: `Bearer ${token}` },
			};
			console.log(config);

			await axios(config)
				.then(function (res) {
					console.log(res);
					setMahallekoyler(res.data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const getVergidairesi = async () => {
		const token = sessionStorage.getItem("accessToken");
		try {
			const config = {
				method: "get",
				url: `${baseUrl}/vergi-dairesi/`,
				headers: { Authorization: `Bearer ${token}` },
			};
			console.log(config);

			await axios(config)
				.then(function (res) {
					console.log(res);
					setVergidairesi(res.data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};


	const getAdres = async () => {
		const token = sessionStorage.getItem("accessToken");
		try {
			const config = {
				method: "get",
				url: `${baseUrl}/address/`,
				headers: { Authorization: `Bearer ${token}` },
			};

			await axios(config)
				.then(function (res) {
					setAdres(res.data.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	const postAdres = async (data) => {
		const token = sessionStorage.getItem("accessToken");
		try {
			const config = {
				headers: { Authorization: `Bearer ${token}` },
				data: data,
			};
			const res = await axios.post(`${baseUrl}/address/`, config);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const value = {
		getAdres,
		adres,
		postAdres,
		getCountries,
		countries,
		getIl,
		il,
		getIlce,
		ilce,
		getMahallekoyler,
		mahallekoyler,
		getVergidairesi,
		vergidairesi,
	};

	return (
		<AdressContext.Provider value={value}>{children}</AdressContext.Provider>
	);
};
