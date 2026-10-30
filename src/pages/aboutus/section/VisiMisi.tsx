import { BsStars } from "react-icons/bs";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { VscTasklist } from "react-icons/vsc";
import { IoCheckmarkSharp } from "react-icons/io5";

const misi = [
	{
		desc: "Penyelenggaraan kurikulum adaptif serta penguatan Profil Pelajar Pancasila yang aplikatif dan berbasis pemecahan masalah nyata.",
	},
	{
		desc: "Pembinaan akhlak karimah, etika pergaulan, dan kapasitas kepemimpinan mandiri melalui kegiatan kokurikuler terpadu.",
	},
	{
		desc: "Penyediaan fasilitas belajar sains, teknologi informatika, dan literasi multimedia yang aman, modern, dan inklusif.",
	},
	{
		desc: "Membangun kolaborasi sinergis dan berkelanjutan antara para pendidik, komite orang tua, dan pemangku kepentingan masyarakat.",
	},
];

const VisiMisi = () => {
	return (
		<main className="flex flex-col md:flex-row items-center min-h-120 py-12 px-4 md:px-14">
			<section className="bg-[#021B3E] h-full w-full md:w-3/7 p-7 rounded-lg flex flex-col gap-4">
				<p className="flex gap-2 items-center text-lg text-[#F4BF46]">
					{" "}
					<span>
						<BsStars />
					</span>
					VISI SEKOLAH
				</p>
				<h1 className="text-lg md:text-4xl 2xl:text-5xl text-white italic">
					“Menjadi lembaga pendidikan menengah pertama unggulan yang
					mencetak generasi bertakwa, berakhlak mulia, berprestasi
					global, dan berakar pada kearifan budaya bangsa.”
				</h1>

				<p className="flex text-sm md:text-lg items-center text-white gap-2">
					<span className="flex text-[#F4BF46] text-2xl">
						<TfiLayoutLineSolid />
					</span>
					FOKUS PEMBANGUNAN KARAKTER 2022 - RECENT
				</p>
			</section>
			<section className="'flex flex-col  h-full w-full md:w-4/7 p-7 xl:space-y-4 2xl:space-y-7">
				<p className="flex gap-2 items-center text-lg text-[#B8890B]">
					{" "}
					<span>
						<VscTasklist />
					</span>
					MISI SEKOLAH
				</p>
				<h1 className="text-lg md:text-4xl 2xl:text-5xl font-serif text-[#021B3E]">
					Langkah Strategis Pembinaan Pendidikan
				</h1>
				<div className="space-y-3 2xl:space-y-4">
					{misi.map((m) => (
						<div className="flex gap-4 items-center md:max-w-2xl">
							<div className="p-1 flex items-center justify-center bg-[#FFEFD5] rounded-full">
								<IoCheckmarkSharp />
							</div>
							<p className="text-sm md:text-xl">{m.desc}</p>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default VisiMisi;
