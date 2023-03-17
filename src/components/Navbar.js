import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useContext } from "react";
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
	// const { logout, userData } = useContext(AuthContext);
	// const router = useRouter();
	// const handleLogout = () => {
	// 	logout();
	// 	// router.push("/login");
	// };
	return (
		<nav className="navbar navbar-expand-lg bg-dark text-white ">
			<div className="container-fluid d-flex">
				<Link
					className="navbar-brand ms-5 p-2 w-100 text-white fs-1"
					href="/login"
				>
					kintshop
				</Link>
				<li className="nav-item dropdown collapse navbar-collapse me-5 p-2 flex-shrink-1">
					<a
						className="nav-link"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<HiUserCircle size="30" />
					</a>
					<ul className="dropdown-menu">
						<li>
							<Link className="dropdown-item" href="/login">
								Giriş Yap
							</Link>
						</li>
						<li>
							<Link className="dropdown-item" href="/register">
								Kayıt Ol
							</Link>
						</li>
					</ul>
					{/* {userData ? (
						<ul className="dropdown-menu">
							<li className="dropdown-item text-center p-2">Hoşgeldiniz</li>
							<li>
								<button className="dropdown-item" onClick={handleLogout}>
									Çıkış
								</button>
							</li>
						</ul>
					) : (
						<ul className="dropdown-menu">
							<li>
								<Link className="dropdown-item" href="/login">
									Giriş Yap
								</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="/register">
									Kayıt Ol
								</Link>
							</li>
						</ul>
					)} */}
				</li>
			</div>
		</nav>
	);
};

export default Navbar;
