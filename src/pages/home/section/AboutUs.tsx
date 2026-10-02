import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const AboutUs = () => {
	return (
		<main className="grid grid-cols-2 h-screen place-items-center">
			<div className="p-2 w-4/5">
				<img
					src="/aboutUsImage.png"
					alt="aboutUs"
					className="rounded-t-xl w-full"
				/>
				<div className="flex justify-between p-5 text-sm font rounded-b-lg shadow-xl">
					<p className="font-semibold">SMPN 2 Tambakrejo</p>
					<p className="text-gray-600">Tambakrejo</p>
				</div>
			</div>
			<div className="space-y-3 ">
				<p className="text-sm font-semibold flex items-center gap-3">
					<span className="flex text-[#D5A32C] text-3xl">
						<TfiLayoutLineSolid />
						<TfiLayoutLineSolid />
					</span>
					PROFIL SEKOLAH
				</p>
				<h1 className="text-7xl font-serif">
					<span className="text-[#021B3E]">
						Membangun Karakter Luhur dan
					</span>
					<span className="text-[#B8890B]">Kecakapan abad 21</span>
				</h1>
				<p className="text-xl text-gray-700 max-w-">
					SMP Nusantara didirikan dengan komitmen menyelenggarakan
					pendidikan menengah pertama yang berfokus pada kemandirian
					berpikir, budi pekerti, dan penguasaan sains serta
					teknologi.
				</p>
				<div className="space-y-2">
					<ul className="flex gap-1 items-center">
						<div className="p-1 flex items-center justify-center bg-[#FFEFD5] rounded-full">
							<IoCheckmarkSharp />
						</div>
						Kurikulum Terpadu & Penguatan Karakter Profil Pelajar
					</ul>
					<ul className="flex gap-1 items-center">
						<div className="p-1 flex items-center justify-center bg-[#FFEFD5] rounded-full">
							<IoCheckmarkSharp />
						</div>
						Pendampingan Konseling & Pengembangan Minat Siswa
						Terstruktur
					</ul>
					<ul className="flex gap-1 items-center">
						<div className="p-1 flex items-center justify-center bg-[#FFEFD5] rounded-full">
							<IoCheckmarkSharp />
						</div>
						Fasilitas Belajar Lengkap & Nyaman
					</ul>
				</div>
				<div>
					<button className="flex gap-2 items-center px-6 py-3 bg-[#021B3E] text-lg text-white rounded-lg font-semibold">
						Baca Profil Sekolah <HiOutlineArrowSmallRight />
					</button>
				</div>
			</div>
		</main>
	);
};

export default AboutUs;
