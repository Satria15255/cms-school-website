import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaTrainSubway } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { PiSealCheckBold } from "react-icons/pi";
import LocationMap from "@/components/maps/LocationMap";

const Address = () => {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 lg:px-14 py-12">
			<section className="space-y-6">
				<div className="flex flex-col gap-4">
					<p className="text-[#021B3E] text-sm">
						LOKASI & JAM KEHADIRAN
					</p>
					<h1 className="text-5xl font-serif text-[#021B3E] ">
						Alamat Sekolah & Jam Operasional
					</h1>
					<p className="text-lg text-gray-600">
						SMP Nusantara berkomitmen menjaga transparansi informasi
						dan kemudahan akses bagi seluruh pemangku kepentingan
						pendidikan.
					</p>
				</div>

				<div className="flex flex-col md:flex-row w-full gap-2 rounded-xl border items-start border-gray-200 p-8 shadow-lg">
					<span className="bg-blue-100 p-4 rounded-xl text-5xl">
						<HiOutlineBuildingOffice2 />
					</span>
					<div className="space-y-3">
						<h1 className="text-2xl lg:text-4xl font-serif text-[#021B3E] ">
							Gedung SMP Nusantara
						</h1>
						<p className="text-sm  lg:text-lg text-gray-600">
							Jl. Pendidikan Karakter No. 12, Kelurahan Cilandak,
							Jakarta Selatan, DKI Jakarta 10110
						</p>
						<div className="flex items-center gap-2 bg-gray-100 rounded-xl p-4">
							<FaTrainSubway />
							<p className="text-sm lg:text-lg">
								Akses mudah via MRT Stasiun Fatmawati (10 menit)
								dan TransJakarta Koridor 6/7.
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full gap-3 rounded-xl border   border-gray-200 p-4 lg:p-8 shadow-lg">
					<div className="flex items-center gap-4 text-4xl">
						<LuCalendarClock />
						<h1 className="text-2xl lg:text-4xl font-serif text-[#021B3E] ">
							Jadwal Pelayanan Administrasi & Tamu
						</h1>
					</div>
					<div className="space-y-3">
						<div className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-4">
							<div>
								<p className="text-lg lg:text-xl text-[#021B3E]">
									Senin - Kamis
								</p>
							</div>
							<p className="text-sm lg:text-lg">
								07.00 - 15.30 WIB
							</p>
						</div>
						<div className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-4">
							<div className="flex flex-col gap-1">
								<p className="text-lg lg:text-xl text-[#021B3E]">
									Jumat
								</p>
								<p className="text-sm text-gray-600">
									Jadwal Sholat Jumat : 11.30 - 13.00
								</p>
							</div>
							<p className="text-sm lg:text-lg">
								07.00 - 15.30 WIB
							</p>
						</div>
						<div className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-4">
							<div>
								<p className="text-lg lg:text-xl text-[#021B3E]">
									Jumat
								</p>
								<p className="text-sm text-gray-600">
									Jadwal Sholat Jumat : 11.30 - 13.00
								</p>
							</div>
							<p className="text-sm lg:text-lg">
								08.00 - 12.00 WIB
							</p>
						</div>
						<div className="flex items-center justify-between gap-2 bg-red-100 rounded-xl p-4">
							<div>
								<p className="text-lg lg:text-xl">
									Minggu & Libur Nasional
								</p>
							</div>
							<p className="text-sm lg:text-lg">
								Libur Operasional
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full gap-3 rounded-xl border   border-gray-200 p-4 lg:p-8 shadow-lg">
					<div className="flex items-center gap-4 text-4xl">
						<LuCalendarClock />
						<h1 className="text-2xl lg:text-4xl font-serif text-[#021B3E] ">
							Unit Pelayanan Khusus
						</h1>
					</div>
					<div className="space-y-3">
						<div className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-4">
							<div className="flex flex-col gap-1">
								<p className="text-xl text-[#021B3E]">
									Layanan Tata Usaha & Legalisir
								</p>
								<p className="text-sm text-gray-600">
									Gedung A , Lantai 1 - Penanggung Jawab : Tri
									Wahyuni, A.Md
								</p>
							</div>
							<p className="text-lg w-1/4">Ext.101</p>
						</div>
						<div className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-4">
							<div className="flex flex-col gap-1">
								<p className="text-xl text-[#021B3E]">
									Bimbingan & Konseling Siswa (BK)
								</p>
								<p className="text-sm text-gray-600">
									Gedung B, Lantai 2 — Penanggung Jawab: Ibu
									Maya Indah, S.Sos
								</p>
							</div>
							<p className="text-lg w-1/4">Ext.101</p>
						</div>
						<div className="flex items-center justify-between gap-2 bg-gray-100 rounded-xl p-4">
							<div className="flex flex-col gap-1">
								<p className="text-xl text-[#021B3E]">
									Kehumasan, Tamu Dinas & Kemitraan
								</p>
								<p className="text-sm text-gray-600">
									Gedung A, Lantai 2 — Tim Hubungan Masyarakat
									(Humas)
								</p>
							</div>
							<p className="text-lg w-1/4">Ext.108</p>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col space-y-6 md:pl-3">
				<div className=" w-full">
					<div className="relative">
						<img
							src="/aboutUsImage.png"
							alt="aboutUs"
							className="rounded-t-xl w-full"
						/>
						<div
							className="
    absolute   bottom-0 left-0 w-full h-[50%] z-0
    bg-gradient-to-t
    from-black/75
    via-black/30
    to-transparent
    pointer-events-none
  "
						/>
					</div>
					<div className="flex items-center justify-between p-3 lg:p-5 text-sm lg:text-lg font-semibold rounded-b-lg shadow-xl">
						<p className="font-semibold flex items-center gap-2">
							<PiSealCheckBold size={30} />
							Lingkungan Asri, Bersetifikasi Sekolah Ramah Anak
						</p>
						<p className="text-[#021B3E] bg-blue-100 p-3 rounded-xl">
							Gedung A & B
						</p>
					</div>
				</div>

				<div className="w-full z-0">
					<LocationMap
						lat={-6.48220915595435}
						lng={106.72857206193093}
						name="SMP Nusantara"
					/>
				</div>
			</section>
		</main>
	);
};

export default Address;
