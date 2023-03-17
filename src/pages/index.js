import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { userData } = useContext(AuthContext);

	const router = useRouter();
	useEffect(() => {
		if (!userData) {
			router.push("/login");
		} else {
			router.push("/table");
		}
	}, []);

	return (
		<>
			<Head>
				<title>Kintshop Task</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<p>Anasayfa</p>
			</main>
		</>
	);
}
