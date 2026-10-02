import { PiStudentDuotone } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoShieldOutline } from "react-icons/io5";
import { GiBookmarklet } from "react-icons/gi";

const summary = [
	{
		icon: <PiStudentDuotone />,
		title: "Pendidikan Holistik",
		description:
			"Membina akhlak, intelektual, dan ketangguhan mental siswa SMP secara seimbang dan berkelanjutan.",
	},
	{
		icon: <FaHandHoldingHeart />,
		title: "Pendidik Berdedikasi",
		description:
			"Guru berkualifikasi yang mendampingi dengan teliti, menginspirasi, dan penuh empati pada tiap fase tumbuh kembang.",
	},
	{
		icon: <IoShieldOutline />,
		title: "Lingkungan Aman & Nyaman",
		description:
			"Sarana belajar kondusif, inklusif, ramah anak, dan mengutamakan kesejahteraan mental para pelajar.",
	},
	{
		icon: <GiBookmarklet />,
		title: "Pembelajaran Adaptif",
		description:
			"Kurikulum nasional yang diperkaya literasi digital, sains terapan, serta kepemimpinan masa depan.",
	},
];

const Summary = () => {
	return (
		<main className="bg-[#1B3054] h-120 flex items-center">
			<div className="grid grid-cols-4 space-x-4 px-12">
				{summary.map((s) => (
					<div className="bg-[#021B3E] flex flex-col space-y-1 p-5 rounded-lg h-70">
						<div className="bg-[#1B3054] p-2 w-15 h-15 flex justify-center rounded-lg items-center">
							<p className=" text-[#F4BF46] text-4xl">{s.icon}</p>
						</div>
						<p className=" text-white text-3xl font-semibold">
							{s.title}
						</p>
						<p className="text-lg text-gray-300">{s.description}</p>
					</div>
				))}
			</div>
		</main>
	);
};

export default Summary;
