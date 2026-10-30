import { IoIosPeople } from "react-icons/io";
import { IoShieldHalfOutline } from "react-icons/io5";
import { LuChartNoAxesCombined, LuClock } from "react-icons/lu";
import { TbMessages } from "react-icons/tb";

const StandarPoint = [
	{
		icon: <IoIosPeople />,
		title: "Penyambung Komunikasi",
		description:
			"Memfasilitasi dialog konstruktif mengenai capaian proses belajar, catatan disiplin, pembentukan kepribadian, serta kesehatan mental peserta didik.",
		description2: "Membina akhlak mulia, intelektual, dan mental tangguh.",
	},
	{
		icon: <IoShieldHalfOutline />,
		title: "Perlindungan Privasi  Data",
		description:
			"Sesuai panduan kepatuhan, nama lengkap terinci, nomor induk (NISN), alamat rumah, dan nilai rapor tidak dipublikasikan secara terbuka pada portal publik demi keamanan anak.",
		description2: "Pendidik profesional yang mengasuh secara personal.",
	},
	{
		icon: <LuChartNoAxesCombined />,
		title: "Rekapitulasi Kehadiran",
		description:
			"Pemantauan persentase kehadiran harian, keterlambatan, dan keikutsertaan kegiatan kokurikuler dilaporkan berkala langsung kepada wali murid resmi.",
		description2: "Kampus hijau, ramah anak, dan bebas perundungan.",
	},
	{
		icon: <TbMessages />,
		title: "Etika Konsultasi Terjadwal",
		description:
			"Konsultasi khusus dilakukan di area ruang penerimaan tamu Tata Usaha pada jam operasional kerja demi kelancaran proses pembelajaran di dalam kelas.",
		description2: "Integrasi literasi sains, teknologi, dan kepemimpinan.",
	},
];

const StandardPembinaan = () => {
	return (
		<main className="flex flex-col md:flex-row bg-[#021B3E] p-4 py-12 md:p-12">
			<section className="flex flex-col  gap-5   text-white">
				<div>
					<p className="text-sm text-[#F4BF46]">
						STANDAR PEMBINAAN SISWA
					</p>
				</div>
				<div>
					<h1 className="text-4xl 2xl:text-5xl font-serif">
						Peran Wali Kelas & Komitmen Privasi Siswa
					</h1>
				</div>
				<div>
					<p className="text-md ">
						Wali kelas merupakan pendamping sentral yang
						menghubungkan kebutuhan belajar peserta didik dengan
						keluarga. Sesuai kebijakan institusi, seluruh data
						pribadi anak senantiasa kami lindungi dengan integritas
						tertinggi.
					</p>
				</div>
				<div className="flex gap-2 items-center  bg-[#1B3054] rounded-lg w-full   p-3">
					<span className="text-4xl text-[#F4BF46]">
						<LuClock />
					</span>
					<div>
						<p className="font-semibold  text-lg">
							Jadwal Konsultasi Rutin Orang Tua
						</p>
						<p className="text-sm">
							Setiap Sabtu, Pukul 08.00 - 11.30 WIB (dengan
							reservasi)
						</p>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 md:grid-cols-2  gap-3 py-3 md:p-3">
				{StandarPoint.map((s) => (
					<div className="bg-[#1B3054] flex flex-col space-y-1 lg:space-y-3 p-5 rounded-lg h-55 md:h-60 lg:h-70">
						<div className="flex gap-4 items-center">
							<div className="bg-[#021B3E]  p-2 w-15 h-15 xl:w-20 xl:h-20 flex justify-center rounded-lg items-center">
								<p className=" text-[#F4BF46] text-2xl lg:text-4xl">
									{s.icon}
								</p>
							</div>
							<p className=" text-white text-lg flex items-center md:text-sm md:h-9 lg:text-2xl 2xl:text-3xl font-semibold">
								{s.title}
							</p>
						</div>
						<p className="block text-sm md:text-xs lg:text-lg 2xl:text-xl text-gray-300">
							{s.description}
						</p>
					</div>
				))}
			</section>
		</main>
	);
};

export default StandardPembinaan;
