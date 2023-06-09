import Navbar from "@/components/Navbar";
import { AdressContextProvider } from "@/context/AdressContext";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<AdressContextProvider>
					<Component {...pageProps} />
				</AdressContextProvider>
			</AuthContextProvider>
			<Script
				src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
				integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
				crossorigin="anonymous"
			/>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
				integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD"
				crossorigin="anonymous"
			/>
		</>
	);
}
