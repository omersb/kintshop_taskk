import React, { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";

const login = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const { login } = useContext(AuthContext);

	const handleChange = (e) => {
		e.preventDefault();
		const { id, value } = e.target;
		setLoginData({ ...loginData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login(loginData);
	};
	// console.log(loginData);
	return (
		<>
			<div className="d-flex">
				<div className="w-50 ">
					<Image
						className="img-responsive"
						src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg"
						width={1066}
						height={970}
						alt=""
					/>
				</div>
				<form className="p-5 m-auto card" method="post" onSubmit={handleSubmit}>
					<h1>Giriş Yap</h1>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email Adresi
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							aria-describedby="emailHelp"
							value={loginData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Şifre
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={loginData.password}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary ">
						Giriş
					</button>
					<p>
						Kayıtlı değilseniz {" "}
						<Link
							type="button"
							href="/register"
							className="btn-outline-light text-primary"
						>
							 lütfen burayı tıklayın
						</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default login;
