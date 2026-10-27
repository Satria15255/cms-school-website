import { FaUsers } from "react-icons/fa";

const Organization = () => {
	return (
		<main className="bg-[#EBF1FF] h-auto flex flex-col items-center space-y-3 py-12 px-4 lg:px-12">
			<section className="w-full flex flex-col gap-3 justify-center items-center">
				<p className="text-sm lg:text-lg text-[#B8890B] font-semibold">
					TATA KELOLA SEKOLAH
				</p>
				<h1 className="text-3xl text-center lg:text-5xl font-moda text-[#021B3E]">
					Bagan Struktur Organisasi
				</h1>
				<p className="text-sm lg:text-lg max-w-2xl text-center text-gray-600">
					Hierarki kepemimpinan yang transparan untuk menjamin
					efektivitas tata kelola akademik, transparansi layanan, dan
					pembinaan kesiswaan yang akuntabel.
				</p>
			</section>
			<section className="w-full flex justify-center">
				<div className="bg-white w-full lg:w-2/5 rounded-xl py-6 flex flex-col items-center justify-center gap-3">
					<p className="text-sm text-[#B8890B]">DEWAN PERTIMBANGAN</p>
					<h1 className="text-2xl text-center lg:text-4xl text-[#021B3E] font-semibold">
						Komite Sekolah & Pembina Yayasan
					</h1>
					<p className="text-sm text-gray-600">
						Pengawasan Kualitas & Kemitraan Orang Tua
					</p>
				</div>
			</section>
			<div className="w-1 h-20 bg-gray-500 rounded-sm"></div>
			<section className="w-full flex justify-center  ">
				<div className="bg-[#021B3E] w-full lg:w-2/5 rounded-xl px-3 py-6 flex flex-col items-center justify-center gap-3">
					<p className="text-sm text-[#F4BF46]">
						PENANGGUNG JAWAB UTAMA
					</p>
					<h1 className="text-2xl text-center lg:text-4xl text-white lg:font-bold font-moda">
						Dra. Sri Rahayu, M.Pd.
					</h1>
					<p className="text-sm text-gray-200">
						Kepala Sekolahh SMP Nusantara
					</p>
				</div>
			</section>
			<div className="w-1 h-20 bg-gray-500 rounded-sm"></div>

			<section className="w-full flex flex-col lg:flex-row justify-center gap-4">
				<div className="bg-white w-full lg:w-2/5 rounded-xl p-6 flex flex-col  justify-center gap-3">
					<div className="flex gap-2  items-center">
						<div className="w-10 h-10 bg-[#EBF1FF] rounded-xl"></div>
						<div className="flex flex-col gap2">
							<p className="text-sm text-[#B8890B]">BIDANG 1</p>
							<p className="text-2xl text-[#021B3E]">
								Waka Kurikulum
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-2 p-2 bg-[#EBF1FF] rounded-xl">
						<p className="text-[#021B3E] text-lg">
							Drs. Bambang Sudiro, M.Si
						</p>
						<p className="text-sm">
							Manajemen Pengajaran & Evaluasi Capaian
						</p>
					</div>
					<div className="text-sm flex flex-col space-y-2">
						<p>- Tim Pengembang Kurikulum Mandiri</p>
						<p>- Laboratorium & Riset Pengajaran</p>
					</div>
				</div>
				<div className="bg-white  w-full lg:w-2/5 rounded-xl p-6 flex flex-col  justify-center gap-3">
					<div className="flex gap-2  items-center">
						<div className="w-10 h-10 bg-[#EBF1FF] rounded-xl"></div>
						<div className="flex flex-col gap2">
							<p className="text-sm text-[#B8890B]">BIDANG 2</p>
							<p className="text-2xl text-[#021B3E]">
								Waka Kesiswaan
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-2 p-2 bg-[#EBF1FF] rounded-xl">
						<p className="text-[#021B3E] text-lg">
							Siti Nurhaliza , S.Pd
						</p>
						<p className="text-sm">Karakter Siswa & Kepemimpinan</p>
					</div>
					<div className="text-sm flex flex-col space-y-2">
						<p>- Pembina OSIS & MPK (Dewi Lestari, S.Pd)</p>
						<p>- Unit Konseling Siswa (Maya Indah, S.Sos)</p>
					</div>
				</div>
				<div className="bg-white  w-full lg:w-2/5 rounded-xl p-6 flex flex-col  justify-center gap-3">
					<div className="flex gap-2  items-center">
						<div className="w-10 h-10 bg-[#EBF1FF] rounded-xl"></div>
						<div className="flex flex-col gap2">
							<p className="text-sm text-[#B8890B]">BIDANG 3</p>
							<p className="text-2xl text-[#021B3E]">
								Kepala Tata Usaha
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-2 p-2 bg-[#EBF1FF] rounded-xl">
						<p className="text-[#021B3E] text-lg">
							Tri Wahyuni, A.Md
						</p>
						<p className="text-sm">
							Pelayanan Administrasi & Operasional
						</p>
					</div>
					<div className="text-sm flex flex-col space-y-2">
						<p>- Pengelola Perpustakaan (Bagus Prasetyo)</p>
						<p>- Koord. Srana & Prasana(Eko Supriyadi)</p>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col lg:flex-row gap-4 rounded-lg items-center justify-between bg-white p-3">
				<div className="flex items-center gap-2">
					<span className="p-3 rounded-full bg-[#F4BF46]">
						<FaUsers />
					</span>
					<div className="flex flex-col gap-1">
						<p className="text-lg lg:text-xl text-[#021B3E] font-semibold">
							Koordinator Jenjang & Wali Kelas (VII, VIII, IX)
						</p>
						<p className="text-sm">
							Membawahi seluruh bimbingan kelas reguler dan
							komunikasi langsung dengan wali murid.
						</p>
					</div>
				</div>
				<div className="flex gap-3">
					<p className="py-2 px-4 bg-[#EBF1FF] text-sm rounded-lg">
						Kelas VII (4 Rombel)
					</p>
					<p className="py-2 px-4 bg-[#EBF1FF] text-sm rounded-lg">
						Kelas VIII (4 Rombel)
					</p>
					<p className="py-2 px-4 bg-[#EBF1FF] text-sm rounded-lg">
						Kelas IX (4 Rombel)
					</p>
				</div>
			</section>
		</main>
	);
};
export default Organization;
