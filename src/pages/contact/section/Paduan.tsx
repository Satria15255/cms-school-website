import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";

const PaduanDetail = [
	{
		id: 1,
		icon: <FaRegCalendarAlt />,
		title: "Konfirmasi Jadwal H-1",
		description:
			"Sangat dianjurkan untuk menghubungi Tata Usaha atau wali kelas melalui WhatsApp resmi minimal H-1 sebelum hadir, guna memastikan staf terkait berada di tempat.",
	},
	{
		id: 2,
		icon: <FaRegClock />,
		title: "Datang Sesuai Jadwal",
		description:
			"Datang sesuai jadwal yang telah dikonfirmasi dan di setujui pihak sekolah, informasikan bila ada keharusan untuk merubah jadwal kedatangan ",
	},
	{
		id: 3,
		icon: <GiClothes />,
		title: "Etika Berbusana Sopan",
		description:
			"Menghormati lingkungan akademik dengan mengenakan pakaian formal/rapi berkerah, bersepatu, serta menjaga ketenangan saat melintasi koridor ruang kelas.",
	},
];

const Paduan = () => {
	return (
		<main className="bg-[#021B3E] py-12 px-14 flex flex-col gap-6 justify-center items-center">
			<section className="flex flex-col items-center gap-2 text-white">
				<span className="text-sm  text-[#F4BF46]">TERTIB & AMAN</span>
				<h1 className="text-4xl font-serif">
					Paduan & Prosedur Kunjungan Tamu{" "}
				</h1>
				<p className="text-sm max-w-lg text-center">
					Demi kenyamanan proses belajar mengajar serta keamanan
					seluruh peserta didik, mohon memperhatikan tata tertib
					kunjungan berikut.
				</p>
			</section>
			<section className="w-full flex gap-4">
				{PaduanDetail.map((p) => (
					<div className="bg-[#1B3054] w-full min-h-70 p-5 rounded-2xl flex flex-col justify-around gap-4">
						<div className="w-full flex justify-between items-center">
							<span className="w-10 h-10 text-center flex items-center justify-center text-xl rounded-full bg-[#F4BF46]">
								{p.id}
							</span>
							<span className="text-[#F4BF46] text-3xl">
								{p.icon}
							</span>
						</div>
						<div className="flex flex-col gap-3 text-white">
							<h1 className="text-2xl">{p.title}</h1>
							<p className="text-lg text-gray-300">
								{p.description}
							</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
};

export default Paduan;
