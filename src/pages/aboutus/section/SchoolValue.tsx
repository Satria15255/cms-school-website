import { PiStudentDuotone } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoShieldHalfOutline } from "react-icons/io5";
import { GiBookmarklet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";

const summary = [
	{
		icon: <PiStudentDuotone />,
		title: "Pendidikan Holistik",
		description:
			"Membina akhlak, intelektual, dan ketangguhan mental siswa SMP secara seimbang dan berkelanjutan.",
		description2: "Membina akhlak mulia, intelektual, dan mental tangguh.",
	},
	{
		icon: <HiUserGroup />,
		title: "Pendidik Berdedikasi",
		description:
			"Guru berkualifikasi yang mendampingi dengan teliti, menginspirasi, dan penuh empati pada tiap fase tumbuh kembang.",
		description2: "Pendidik profesional yang mengasuh secara personal.",
	},
	{
		icon: <IoShieldHalfOutline />,
		title: "Lingkungan Aman & Nyaman",
		description:
			"Sarana belajar kondusif, inklusif, ramah anak, dan mengutamakan kesejahteraan mental para pelajar.",
		description2: "Kampus hijau, ramah anak, dan bebas perundungan.",
	},
	{
		icon: <GiBookmarklet />,
		title: "Pembelajaran Adaptif",
		description:
			"Kurikulum nasional yang diperkaya literasi digital, sains terapan, serta kepemimpinan masa depan.",
		description2: "Integrasi literasi sains, teknologi, dan kepemimpinan.",
	},
];

const SchoolValue = () => {
	return (
		<main className="px-14 py-12">
			<div className="space-y-3 pb-4">
				<p className="text-[#B8890B] text-lg">PRINSIP PENUNTUN</p>
				<h1 className="text-5xl text-[#021B3E] font-serif">
					Empat Pilar SMP 2 Nusantara
				</h1>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3  lg:space-x-4  ">
				{summary.map((s) => (
					<div className="bg-[#EBF1FF] flex flex-col space-y-1 lg:space-y-3 p-5 rounded-lg h-55 md:h-60 lg:h-80">
						<div className="bg-[#021B3E] p-2 w-15 h-15 xl:w-20 xl:h-20 flex justify-center rounded-lg items-center">
							<p className=" text-[#F4BF46] text-2xl lg:text-4xl">
								{s.icon}
							</p>
						</div>
						<p className=" text-[#021B3E] text-md md:text-sm  h-9 lg:text-3xl font-semibold">
							{s.title}
						</p>
						<p className="hidden md:block text-sm md:text-xs  lg:text-lg xl:text-xl text-black">
							{s.description}
						</p>
						<p className="text-sm lg:text-lg md:hidden text-black">
							{s.description2}
						</p>
					</div>
				))}
			</div>
		</main>
	);
};

export default SchoolValue;
