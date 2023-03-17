import React, { useContext, useEffect, useState } from "react";
import { AdressContext } from "@/context/AdressContext";
import { useRouter } from "next/router";

const adresAdd = ({ item }) => {
	const {
		putAdres,
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

	const [oneitem, setOneitem] = useState(JSON.parse(item));
	const adresData = {
		id: oneitem.id,
		owner: oneitem.owner,
		title: oneitem.title,
		country: oneitem.country.id,
		il: oneitem.il.id,
		ilce: oneitem.ilce.id,
		mahalle_koy: oneitem.mahalle_koy.id,
		street_address: oneitem.street_address,
		first_name: oneitem.first_name,
		last_name: oneitem.last_name,
		mobile_phone: oneitem.mobile_phone,
		tckn: oneitem.tckn,
		vkn: oneitem.vkn,
		company_name: oneitem.company_name,
		vergi_dairesi: oneitem.vergi_dairesi.id,
		e_fatura_mukellefiyim: oneitem.e_fatura_mukellefiyim,
		pasaport_no: oneitem.pasaport_no,
		is_active: oneitem.is_active,
		is_current: oneitem.is_current,
		posta_kodu: oneitem.posta_kodu,
		fatura_type: oneitem.fatura_type,
	};
	// console.log(adresData);
	const handleChange = (e) => {
		const { id, type, value, checked } = e.target;
		const newValue = type === "checkbox" ? checked : value;
		setOneitem({ ...oneitem, [id]: newValue });
	};

	const router = useRouter();
	const handleSubmit = (e) => {
		e.preventDefault();
		putAdres(adresData);
		router.push("/table");
	};

	// console.log(JSON.parse(item));

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
							value={oneitem.owner}
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
							value={oneitem.first_name}
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
							value={oneitem.last_name}
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
							value={oneitem.mobile_phone}
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
							value={oneitem.tckn}
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
							value={oneitem.pasaport_no}
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
							value={oneitem.title}
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
							value={oneitem.country.name}
							onChange={handleChange}
						>
							<option selected>{oneitem.country?.name}</option>
							{countries?.map((item) => (
								<>
									<option value={oneitem.id} key={oneitem.id}>
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
							value={oneitem.il?.name}
							onChange={handleChange}
						>
							<option selected>{oneitem.il?.name}</option>
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
							value={oneitem.ilce?.name}
							onChange={handleChange}
						>
							<option selected>{oneitem.ilce?.name}</option>
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
							value={oneitem.mahalle_koy?.name}
							onChange={handleChange}
						>
							<option selected>{oneitem.mahalle_koy?.name}</option>
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
							value={oneitem.street_address}
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
							value={oneitem.posta_kodu}
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
							value={oneitem.company_name}
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
							value={oneitem.vergi_dairesi?.name}
							onChange={handleChange}
						>
							<option selected>{oneitem.vergi_dairesi?.name}</option>
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
							value={oneitem.vkn}
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
							value={oneitem.e_fatura_mukellefiyim}
							checked={oneitem.e_fatura_mukellefiyim}
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
							value={oneitem.fatura_type}
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
							value={oneitem.is_active}
							checked={oneitem.is_active}
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
							value={oneitem.is_current}
							checked={oneitem.is_current}
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

export async function getServerSideProps({ query }) {
	return {
		props: {
			item: query.state,
		},
	};
}

export default adresAdd;
