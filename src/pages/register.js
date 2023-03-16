import React, { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";

const register = () => {
	const [registerData, setRegisterData] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		password: "",
	});

	const { register } = useContext(AuthContext);

	const handleChange = (e) => {
		e.preventDefault();
		const { id, value } = e.target;
		setRegisterData({ ...registerData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		register(registerData);
	};
	console.log(registerData);

	return (
		<>
			<div className="d-flex">
				<div className="w-50">
					<Image
						src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg"
						width={1066}
						height={970}
						alt=""
					/>
				</div>
				<form
					className="p-2 flex-shrink-1 m-auto"
					method="post"
					onSubmit={handleSubmit}
				>
						<h1>Kayıt Ol</h1>
					<div className="mb-3">
						<label htmlFor="first_name" className="form-label">
							Adı
						</label>
						<input
							type="text"
							className="form-control"
							id="first_name"
							name="first_name"
							aria-describedby="emailHelp"
							value={registerData.first_name}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="last_name" className="form-label">
							Soyadı
						</label>
						<input
							type="text"
							className="form-control"
							id="last_name"
							name="last_name"
							aria-describedby="emailHelp"
							value={registerData.last_name}
							onChange={handleChange}
						/>
					</div>
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
							value={registerData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="phone" className="form-label">
							Telefon Numarası
						</label>
						<input
							type="text"
							className="form-control"
							id="phone"
							name="phone"
							aria-describedby="emailHelp"
							value={registerData.phone}
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
							value={registerData.password}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" htmlFor="exampleCheck1">
							Beni hatırla
						</label>
					</div>
					<button type="submit" className="btn btn-primary">
						Onayla
					</button>
				</form>
			</div>
		</>
	);
};

export default register;
