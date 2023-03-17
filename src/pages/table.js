import Paginate from "@/components/Paginate";
import { AdressContext } from "@/context/AdressContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const table = () => {
	const [forAdres, setForAdres] = useState(false);
	const { adres, getAdres, deletAdres } = useContext(AdressContext);

	const [currentPage, setCurrentPage] = useState(1);
	const [adresPerPage] = useState(10);
	const indexOfLastAdres = currentPage * adresPerPage;
	const indexOfFirstAdres = indexOfLastAdres - adresPerPage;
	const currentAdres = adres.slice(indexOfFirstAdres, indexOfLastAdres);
	const totalPages = Math.ceil(adres.length / adresPerPage);

	// console.log("currentPage", currentPage);
	// console.log("indexOfLastAdres", indexOfLastAdres);
	// console.log("indexOfFirstAdres", indexOfFirstAdres);
	// console.log("currentAdres", currentAdres);
	// console.log("totalPages", totalPages);

	const handleDelete = (id) => {
		deletAdres(id);
		setForAdres(!forAdres);
		getAdres();
	};

	const router = useRouter();

	const handleUpdate = (item) => {
		router.push({
			pathname: "/adresUpdate",
			query: { state: JSON.stringify(item) },
		});
	};

	useEffect(() => {
		getAdres();
	}, [forAdres]);
	// console.log("forAdres", forAdres);
	// console.log("adres", adres);
	return (
		<>
			<div className="mt-5 ms-5">
				<Paginate pages={totalPages} setCurrentPage={setCurrentPage} />
			</div>
			<table className="container table table-hover border align-middle mt-2 mx-auto">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Owner</th>
						<th scope="col">Başlık</th>
						<th scope="col">Ülke</th>
						<th scope="col">İl</th>
						<th scope="col">İlçe</th>
						<th scope="col">Mahalle/Köy</th>
						<th scope="col">Adres</th>
						<th scope="col">Adı</th>
						<th scope="col">Soyadı</th>
						<th scope="col">Telefon</th>
						<th scope="col">TC No</th>
						<th scope="col">Vergi Kimlik No</th>
						<th scope="col">Şirket Adı</th>
						<th scope="col">Vergi Dairesi</th>
						<th scope="col">E-Fatura Mukellefiyim</th>
						<th scope="col">Pasaport No</th>
						<th scope="col">Aktif Mi?</th>
						<th scope="col">is_current</th>
						<th scope="col">Posta Kodu</th>
						<th scope="col">Fatura Tipi</th>
						<th scope="col" colSpan={2}>
							<Link
								className="btn btn-primary btn-lg ms-2"
								type="button"
								href="/adresAdd"
							>
								Adres Ekle
							</Link>
						</th>
					</tr>
				</thead>
				<tbody>
					{currentAdres?.length > 0 &&
						currentAdres?.map((item, id) => (
							<>
								<tr key={id}>
									<th scope="row">{item.id}</th>
									<td>{item.owner}</td>
									<td>{item.title}</td>
									<td>{item.country?.name}</td>
									<td>{item.il?.name}</td>
									<td>{item.ilce?.name}</td>
									<td>{item.mahalle_koy?.name}</td>
									<td>{item.street_address}</td>
									<td>{item.first_name}</td>
									<td>{item.last_name}</td>
									<td>{item.mobile_phone}</td>
									<td>{item.tckn}</td>
									<td>{item.vkn}</td>
									<td>{item.company_name}</td>
									<td>{item.vergi_dairesi?.name}</td>
									<td>{item.e_fatura_mukellefiyim ? "Evet" : "Hayır"}</td>
									<td>{item.pasaport_no}</td>
									<td>{item.is_active ? "Evet" : "Hayır"}</td>
									<td>{item.is_current ? "Evet" : "Hayır"}</td>
									<td>{item.posta_kodu}</td>
									<td>{item.fatura_type}</td>
									<th scope="col">
										<button
											type="button"
											className="btn btn-success"
											onClick={() => handleUpdate(item)}
										>
											Güncelle
										</button>
									</th>
									<th scope="col">
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => handleDelete(item.id)}
										>
											Sil
										</button>
									</th>
								</tr>
							</>
						))}
				</tbody>
			</table>
		</>
	);
};

export default table;
