import { PiHouseDuotone } from "react-icons/pi";
import { FaRegNewspaper } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
	const catNews = [
		"Semua Berita",
		"Riset-Inovasi",
		"Lomba-Prestasi",
		"Aktivitas-Siswa",
		"Akademik-Literasi",
		"Karakter-Lingkungan",
		"Agenda-Kegiatan",
	];

	return (
		<main className="flex flex-col w-full md:pt-12">
			<section className="flex justify-between w-full bg-[#EBF1FF] px-4 md:px-14 py-3">
				<div className="flex gap-2 items-center">
					<span className="text-xl text-[#B8890B]">
						<PiHouseDuotone />
					</span>
					<p className="text-gray-500 text-sm lg:text-lg">
						Beranda{" "}
						<span className="text-[#021B3E] font-bold">
							/ Kabar & Warta Sekolah
						</span>
					</p>
				</div>
				<div className="hidden md:flex items-center gap-2">
					<span className="w-2 h-2 bg-[#F4BF46] flex items-center justify-center rounded-full"></span>

					<p className="text-lg">
						Kanal Publikasi Resmi SMP Nusantara
					</p>
				</div>
			</section>
			<section className="flex flex-col md:flex-row p-4 md:p-14">
				<div className="w-full    space-y-5">
					<div className="flex bg-[#EBF1FF] w-60 lg:w-70 px-2 py-1 rounded-sm gap-2 items-center">
						<p className=" text-[#021B3E] flex  items-center gap-2 font-semibold text-sm lg:text-lg">
							<span className="text-xl text-[#B8890B] font-bold">
								<FaRegNewspaper />
							</span>
							WARTA & INFORMASI RESMI
						</p>
					</div>
					<div className="space-y-4">
						<h1 className="text-3xl lg:text-7xl font-serif text-[#021B3E]">
							Kabar, Agenda, dan Prestasi SMP Nusantara
						</h1>
						<p className="text-sm lg:text-xl text-gray-700 max-w-4xl">
							Informasi terkini mengenai kegiatan belajar
							mengajar, pengumuman akademik terstandar, karya
							inovasi siswa, dan capaian membanggakan sivitas
							akademika sekolah.
						</p>
					</div>
					<div className="hidden lg:flex gap-3 w-auto grid grid-cols-5">
						{catNews.map((c) => (
							<>
								<span className="text-md border border-gray-200 w-auto py-1 px-3  text-[#021B3E]   flex justify-center items-center gap-2 rounded-2xl">
									{c}
									<span className="w-7 text-center h-7 bg-gray-200 text-[#021B3E] flex items-center justify-center rounded-full">
										2
									</span>
								</span>
							</>
						))}
					</div>
				</div>
				<div className="flex flex-col md:items-end md:justify-end gap-3 md:gap-15 w-full lg:w-3/5 md:p-5">
					<div className="bg-[#EBF1FF] hidden md:flex justify-end w-auto p-4 pl-8 gap-3 rounded-lg p-2 flex ">
						<div className="flex flex-col items-end">
							<p className="text-[#B8890B]  text-sm">
								STATUS DOKUMEN
							</p>
							<p className="text-lg lg:text-2xl  text-[#021B3E]">
								Edisi Semester Ganjil
							</p>
							<p className="text-sm text-gray-500 ">
								Tahun Ajaran 2026/2027
							</p>
						</div>
					</div>
					<div className="w-full lg:w-2/3 h-12 rounded-2xl bg-[#EBF1FF] flex justify-start items-center px-3">
						<span className="text-4xl">
							<CiSearch />
						</span>
					</div>
					<div className="flex flex-col gap-3">
						<p className="text-sm text-[#021B3E] font-semibold">
							KATEGORI BERITA
						</p>
						<div className="flex gap-3 max-w-lg overflow-x-auto pb-2">
							{catNews.map((c) => (
								<div className="text-md shrink-0 border border-gray-200 w-auto py-1 px-3  text-[#021B3E]   flex justify-center items-center gap-2 rounded-2xl">
									<p>{c}</p>
									<span className="w-7 text-center h-7 bg-gray-200 text-[#021B3E] flex items-center justify-center rounded-full">
										2
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Header;
