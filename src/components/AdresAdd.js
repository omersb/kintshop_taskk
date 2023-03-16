import { AdressContext } from "@/context/AdressContext";
import React, { useContext, useState } from "react";

const AdresAdd = ({ setOpenTab }) => {
	const {
		getAdres,
		postAdres,
		countries,
		il,
		ilce,
		mahallekoyler,
		vergidairesi,
	} = useContext(AdressContext);

	const [adresData, setAdresData] = useState({
		owner: "",
		title: "",
		country: "",
		il: "",
		ilce: "",
		mahalle_koy: "",
		street_address: "",
		first_name: "",
		mobile_phone: "",
		tckn: "",
		vkn: "",
		company_name: "",
		vergi_dairesi: "",
		e_fatura_mukellefiyim: "",
		pasaport_no: "",
		is_active: "",
		is_current: "",
		posta_kodu: "",
		fatura_type: "",
	});

	const handleChange = (e) => {
		e.preventDefault();
		const { id, value } = e.target;
		setAdresData({ ...adresData, [id]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		postAdres(adresData);
		getAdres();
		setOpenTab(false);
	};	

	return (
		<div className="tab-content" id="pills-tabContent ">
			<div
				className="tab-pane fade show active"
				id="pills-home"
				role="tabpanel"
				aria-labelledby="pills-home-tab"
				tabindex="0"
			>
				<h1 className="text-center">Adres Ekle</h1>
				<form className="d-flex" method="post" onSubmit={handleSubmit}>
					<div className="container">
						<div className="mb-3">
							<label htmlFor="owner" className="form-label">
								Owner
							</label>
							<input
								type="text"
								className="form-control"
								id="owner"
								name="owner"
								aria-describedby="emailHelp"
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
								type="text"
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
								type="text"
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
								type="text"
								className="form-control"
								id="pasaport_no"
								name="pasaport_no"
								value={adresData.pasaport_no}
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
								class="form-select"
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
								class="form-select"
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
								class="form-select"
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
								class="form-select"
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
								class="form-select"
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
							<label
								className="form-check-label"
								htmlFor="e_fatura_mukellefiyim"
							>
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
				;
			</div>
		</div>
	);
};

export default AdresAdd;

// <div
// 	className="modal fade modal-xl "
// 	id="staticBackdrop"
// 	data-bs-backdrop="static"
// 	data-bs-keyboard="false"
// 	aria-labelledby="staticBackdropLabel"
// 	aria-hidden="true"
// >
// 	<div className="modal-dialog">
// 		<div className="modal-content">
// 			<div className="modal-header">
// 				<h1 className="modal-title fs-3 mx-auto" id="staticBackdropLabel">
// 					Adres Ekle
// 				</h1>
// 				<button
// 					type="button"
// 					className="btn-close"
// 					data-bs-dismiss="modal"
// 					aria-label="Close"
// 				></button>
// 			</div>
// 			<div className="modal-body">
// 				<form className="d-flex" method="post" onSubmit={handleSubmit}>
// 					<div className="container">
// 						<div className="mb-3">
// 							<label htmlFor="owner" className="form-label">
// 								Owner
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="owner"
// 								name="owner"
// 								aria-describedby="emailHelp"
// 								value={adresData.owner}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="first_name" className="form-label">
// 								Adı
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="first_name"
// 								name="first_name"
// 								value={adresData.first_name}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="last_name" className="form-label">
// 								Soyadı
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="last_name"
// 								name="last_name"
// 								value={adresData.last_name}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="mobile_phone" className="form-label">
// 								Telefon
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="mobile_phone"
// 								name="mobile_phone"
// 								value={adresData.mobile_phone}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="tckn" className="form-label">
// 								TC No
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="tckn"
// 								name="tckn"
// 								value={adresData.tckn}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="pasaport_no" className="form-label">
// 								Pasaport No
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="pasaport_no"
// 								name="pasaport_no"
// 								value={adresData.pasaport_no}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 					</div>
// 					<div className="container">
// 						<div className="mb-3">
// 							<label htmlFor="country" className="form-label">
// 								Ülke
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="country"
// 								name="country"
// 								aria-describedby="emailHelp"
// 								value={adresData.country}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="il" className="form-label">
// 								İl
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="il"
// 								name="il"
// 								aria-describedby="emailHelp"
// 								value={adresData.il}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="ilce" className="form-label">
// 								İlçe
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="ilce"
// 								name="ilce"
// 								value={adresData.ilce}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="mahalle_koy" className="form-label">
// 								Mahalle/Köy
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="mahalle_koy"
// 								name="mahalle_koy"
// 								value={adresData.mahalle_koy}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="street_address" className="form-label">
// 								Adres
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="street_address"
// 								name="street_address"
// 								value={adresData.street_address}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="posta_kodu" className="form-label">
// 								Posta Kodu
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="posta_kodu"
// 								name="posta_kodu"
// 								value={adresData.posta_kodu}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 					</div>
// 					<div className="container">
// 						<div className="mb-3">
// 							<label htmlFor="title" className="form-label">
// 								Başlık
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="title"
// 								name="title"
// 								aria-describedby="emailHelp"
// 								value={adresData.title}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="company_name" className="form-label">
// 								Şirket Adı
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="company_name"
// 								name="company_name"
// 								value={adresData.company_name}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="vergi_dairesi" className="form-label">
// 								Vergi Dairesi
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="vergi_dairesi"
// 								name="vergi_dairesi"
// 								value={adresData.vergi_dairesi}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="vkn" className="form-label">
// 								Vergi No
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="vkn"
// 								name="vkn"
// 								value={adresData.vkn}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="form-check mb-3">
// 							<label
// 								className="form-check-label"
// 								htmlFor="e_fatura_mukellefiyim"
// 							>
// 								E-Fatura Mükellefiyim
// 							</label>
// 							<input
// 								className="form-check-input"
// 								type="checkbox"
// 								id="e_fatura_mukellefiyim"
// 								name="e_fatura_mukellefiyim"
// 								value={adresData.e_fatura_mukellefiyim}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="mb-3">
// 							<label htmlFor="fatura_type" className="form-label">
// 								Fatura Tipi
// 							</label>
// 							<input
// 								type="text"
// 								className="form-control"
// 								id="fatura_type"
// 								name="fatura_type"
// 								value={adresData.fatura_type}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="form-check mb-3">
// 							<label className="form-check-label" htmlFor="is_active">
// 								Aktif Mi?
// 							</label>
// 							<input
// 								className="form-check-input"
// 								type="checkbox"
// 								id="is_active"
// 								name="is_active"
// 								value={adresData.is_active}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 						<div className="form-check mb-3">
// 							<label className="form-check-label" htmlFor="is_current">
// 								Current
// 							</label>
// 							<input
// 								className="form-check-input"
// 								type="checkbox"
// 								id="is_current"
// 								name="is_current"
// 								value={adresData.is_current}
// 								onChange={handleChange}
// 							/>
// 						</div>
// 					</div>
// 				</form>
// 			</div>

// 			<div className="modal-footer">
// 				<button
// 					type="button"
// 					className="btn btn-secondary"
// 					data-bs-dismiss="modal"
// 				>
// 					Close
// 				</button>
// 				<button type="button" className="btn btn-primary">
// 					Ekle
// 				</button>
// 			</div>
// 		</div>
// 	</div>
// </div>
