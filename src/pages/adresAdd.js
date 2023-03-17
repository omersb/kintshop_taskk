import React, { useContext, useEffect, useState } from "react";
import { AdressContext } from "@/context/AdressContext";
import { useRouter } from "next/router";

const adresAdd = () => {
	const {
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
	} = useContext(AdressContext);

	const [adresData, setAdresData] = useState({
		owner: 306,
		title: "",
		country: "",
		il: "",
		ilce: "",
		mahalle_koy: "",
		street_address: "",
		first_name: "",
		last_name: "",
		mobile_phone: "",
		tckn: "",
		vkn: "",
		company_name: "",
		vergi_dairesi: "",
		e_fatura_mukellefiyim: false,
		pasaport_no: "",
		is_active: false,
		is_current: false,
		posta_kodu: "",
		fatura_type: "",
	});

	const handleChange = (e) => {
		const { id, type, value, checked } = e.target;
		const newValue = type === "checkbox" ? checked : value;
		setAdresData({ ...adresData, [id]: newValue });
	};

	const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		postAdres(adresData);
		router.push("/table");
	};

	// console.log(adresData);

	useEffect(() => {
		getCountries();
		getIl();
		getIlce();
		getMahallekoyler();
		getVergidairesi();
	}, []);

	return (
		<div className="card container m-auto mt-5">
			<h1 className="text-center mt-4">Adres Ekle</h1>
			<form className="d-flex m-2" method="post" onSubmit={handleSubmit}>
				<div className="container">
					<div className="mb-3 d-none">
						<label htmlFor="owner" className="form-label">
							Owner
						</label>
						<input
							type="text"
							className="form-control"
							id="owner"
							name="owner"
							value={adresData.owner}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="first_name" className="form-label">
							Adı
						</label>
						<input
							type="text"
							className="form-control"
							id="first_name"
							name="first_name"
							value={adresData.first_name}
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
							value={adresData.last_name}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="mobile_phone" className="form-label">
							Telefon
						</label>
						<input
							type="number"
							className="form-control"
							id="mobile_phone"
							name="mobile_phone"
							value={adresData.mobile_phone}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="tckn" className="form-label">
							TC No
						</label>
						<input
							type="number"
							className="form-control"
							id="tckn"
							name="tckn"
							value={adresData.tckn}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="pasaport_no" className="form-label">
							Pasaport No
						</label>
						<input
							type="number"
							className="form-control"
							id="pasaport_no"
							name="pasaport_no"
							value={adresData.pasaport_no}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Başlık
						</label>
						<input
							type="text"
							className="form-control"
							id="title"
							name="title"
							aria-describedby="emailHelp"
							value={adresData.title}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="container">
					<div className="mb-3">
						<label htmlFor="country" className="form-label">
							Ülke
						</label>
						<select
							className="form-select"
							aria-label="Default select example "
							id="country"
							name="country"
							value={adresData.country}
							onChange={handleChange}
						>
							<option selected>Ülke seçiniz</option>
							{countries?.map((item) => (
								<>
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								</>
							))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="il" className="form-label">
							İl
						</label>
						<select
							className="form-select"
							aria-label="Default select example "
							id="il"
							name="il"
							value={adresData.il}
							onChange={handleChange}
						>
							<option selected>İl seçiniz</option>
							{il?.map((item) => (
								<>
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								</>
							))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="ilce" className="form-label">
							İlçe
						</label>
						<select
							className="form-select"
							aria-label="Default select example "
							id="ilce"
							name="ilce"
							value={adresData.ilce}
							onChange={handleChange}
						>
							<option selected>İlçe seçiniz</option>
							{ilce?.map((item) => (
								<>
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								</>
							))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="mahalle_koy" className="form-label">
							Mahalle/Köy
						</label>
						<select
							className="form-select"
							aria-label="Default select example "
							id="mahalle_koy"
							name="mahalle_koy"
							value={adresData.mahalle_koy}
							onChange={handleChange}
						>
							<option selected>Mahalle/Köy seçiniz</option>
							{mahallekoyler?.map((item) => (
								<>
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								</>
							))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="street_address" className="form-label">
							Adres
						</label>
						<input
							type="text"
							className="form-control"
							id="street_address"
							name="street_address"
							value={adresData.street_address}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="posta_kodu" className="form-label">
							Posta Kodu
						</label>
						<input
							type="text"
							className="form-control"
							id="posta_kodu"
							name="posta_kodu"
							value={adresData.posta_kodu}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="container">
					<div className="mb-3">
						<label htmlFor="company_name" className="form-label">
							Şirket Adı
						</label>
						<input
							type="text"
							className="form-control"
							id="company_name"
							name="company_name"
							value={adresData.company_name}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="vergi_dairesi" className="form-label">
							Vergi Dairesi
						</label>
						<select
							className="form-select"
							aria-label="Default select example "
							id="vergi_dairesi"
							name="vergi_dairesi"
							value={adresData.vergi_dairesi}
							onChange={handleChange}
						>
							<option selected>Vergi Dairesi seçiniz</option>
							{vergidairesi?.map((item) => (
								<>
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								</>
							))}
						</select>
					</div>
					<div className="mb-3">
						<label htmlFor="vkn" className="form-label">
							Vergi No
						</label>
						<input
							type="text"
							className="form-control"
							id="vkn"
							name="vkn"
							value={adresData.vkn}
							onChange={handleChange}
						/>
					</div>
					<div className="form-check mb-3">
						<label className="form-check-label" htmlFor="e_fatura_mukellefiyim">
							E-Fatura Mükellefiyim
						</label>
						<input
							className="form-check-input"
							type="checkbox"
							id="e_fatura_mukellefiyim"
							name="e_fatura_mukellefiyim"
							value={adresData.e_fatura_mukellefiyim}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="fatura_type" className="form-label">
							Fatura Tipi
						</label>
						<input
							type="text"
							className="form-control"
							id="fatura_type"
							name="fatura_type"
							value={adresData.fatura_type}
							onChange={handleChange}
						/>
					</div>
					<div className="form-check mb-3">
						<label className="form-check-label" htmlFor="is_active">
							Aktif Mi?
						</label>
						<input
							className="form-check-input"
							type="checkbox"
							id="is_active"
							name="is_active"
							value={adresData.is_active}
							onChange={handleChange}
						/>
					</div>
					<div className="form-check mb-3">
						<label className="form-check-label" htmlFor="is_current">
							Current
						</label>
						<input
							className="form-check-input"
							type="checkbox"
							id="is_current"
							name="is_current"
							value={adresData.is_current}
							onChange={handleChange}
						/>
					</div>
					<div className="d-flex gap-2">
						<button type="submit" className="btn btn-primary">
							Ekle
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default adresAdd;
