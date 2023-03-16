import React, { useContext, useState } from "react";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";

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
	console.log(loginData);
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
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
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

export default login;

// access
// :
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4OTU2Mzg3LCJpYXQiOjE2Nzg4Njk5ODcsImp0aSI6IjI1ODJlMTAyMTc4MDRlYWZiNTEyYWRkNzZiOGNmNjBlIiwidXNlcl9pZCI6MzA0LCJ1c2VybmFtZSI6InRlc3QxMkB0ZXN0MTIuY29tIiwiZW1haWwiOiJ0ZXN0MTJAdGVzdDEyLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9.8sXkSoBs_BzH4sy02wvrcymCW1GHE3Y57SKrSnpNCzE"
// refresh
// :
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3ODk1NjM4NywiaWF0IjoxNjc4ODY5OTg3LCJqdGkiOiI2NjA0NDE2ZmYyNzU0NTQzOGY2ZDU0NGJlN2JiZmE5NiIsInVzZXJfaWQiOjMwNCwidXNlcm5hbWUiOiJ0ZXN0MTJAdGVzdDEyLmNvbSIsImVtYWlsIjoidGVzdDEyQHRlc3QxMi5jb20iLCJyb2xlIjoiY3VzdG9tZXIifQ.nKcr8-7Cmid4GWX05SWlG43lNfTKtNA2YMJHaxuCD7Q"
// [

access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4OTczNDMwLCJpYXQiOjE2Nzg4ODcwMzAsImp0aSI6ImRkZmY5NmFkNTgxZTQ5MGNiODQ1MjAyNDM3MjAwNzQwIiwidXNlcl9pZCI6MzA0LCJ1c2VybmFtZSI6InRlc3QxMkB0ZXN0MTIuY29tIiwiZW1haWwiOiJ0ZXN0MTJAdGVzdDEyLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9.kzLGV_ivEqm3Zpf-P_sZhL6ruNxJCHO_46E85zCTr8Q";
refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3ODk3MzQzMCwiaWF0IjoxNjc4ODg3MDMwLCJqdGkiOiJjNmZiYzEwNTA0Y2E0NWI5YTgzMGI4MTgwYTM3YzNiMiIsInVzZXJfaWQiOjMwNCwidXNlcm5hbWUiOiJ0ZXN0MTJAdGVzdDEyLmNvbSIsImVtYWlsIjoidGVzdDEyQHRlc3QxMi5jb20iLCJyb2xlIjoiY3VzdG9tZXIifQ.bpwfjhu-i2F2yP2QeCYyPukb2x8ILoiu7DB4ID2EL9c";
