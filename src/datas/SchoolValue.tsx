import { PiStudentDuotone } from "react-icons/pi";
import { IoShieldHalfOutline } from "react-icons/io5";
import { GiBookmarklet } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import type { schoolValueItem } from "./types/schoolValue";

export const schoolValue: schoolValueItem[] = [
	{
		id: "SV-01",
		icon: <PiStudentDuotone />,
		title: "Pendidikan Holistik",
		description:
			"Membina akhlak, intelektual, dan ketangguhan mental siswa SMP secara seimbang dan berkelanjutan.",
		description2: "Membina akhlak mulia, intelektual, dan mental tangguh.",
	},
	{
		id: "SV-02",
		icon: <HiUserGroup />,
		title: "Pendidik Berdedikasi",
		description:
			"Guru berkualifikasi yang mendampingi dengan teliti, menginspirasi, dan penuh empati pada tiap fase tumbuh kembang.",
		description2: "Pendidik profesional yang mengasuh secara personal.",
	},
	{
		id: "SV-03",
		icon: <IoShieldHalfOutline />,
		title: "Lingkungan Aman & Nyaman",
		description:
			"Sarana belajar kondusif, inklusif, ramah anak, dan mengutamakan kesejahteraan mental para pelajar.",
		description2: "Kampus hijau, ramah anak, dan bebas perundungan.",
	},
	{
		id: "SV-04",
		icon: <GiBookmarklet />,
		title: "Pembelajaran Adaptif",
		description:
			"Kurikulum nasional yang diperkaya literasi digital, sains terapan, serta kepemimpinan masa depan.",
		description2: "Integrasi literasi sains, teknologi, dan kepemimpinan.",
	},
];
