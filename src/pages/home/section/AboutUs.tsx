import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
	const navigate = useNavigate();
	return (
		<main className="grid grid-cols-1 lg:grid-cols-2 h-auto  md:py-12 lg:py-2 lg:h-screen place-items-center">
			<div className="p-5 w-full">
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
			<div className="space-y-3 p-5">
				<p className="text-sm font-semibold flex items-center gap-3">
					<span className="flex text-[#D5A32C] text-xs lg:text-3xl">
						<TfiLayoutLineSolid />
						<TfiLayoutLineSolid />
					</span>
					PROFIL SEKOLAH
				</p>
				<h1 className=" text-3xl xl:text-5xl 2xl:text-7xl font-serif">
					<span className="text-[#021B3E]">
						Membangun Karakter Luhur dan
					</span>
					<span className="text-[#B8890B]">Kecakapan abad 21</span>
				</h1>
				<p className="text-sm lg:text-lg 2xl:text-xl text-gray-600">
					SMP Nusantara didirikan dengan komitmen menyelenggarakan
					pendidikan menengah pertama yang berfokus pada kemandirian
					berpikir, budi pekerti, dan penguasaan sains serta
					teknologi.
				</p>
				<div className="space-y-3 lg:space-y-2 text-sm">
					<ul className="flex gap-3 border lg:border-none border-gray-200 rounded-lg p-3 items-center">
						<div className="p-1 flex items-center justify-center bg-[#FFEFD5] rounded-full">
							<IoCheckmarkSharp />
						</div>
						<div className="flex flex-col gap1">
							<p className="text-sm lg:text-xl font-semibold">
								Kurikulum Terpadu & Penguatan Karakter Profil
								Pelajar
							</p>
							<p className="text-xs lg:text-sm">
								Fokus pembentukan karakter moral dan penalaran
								kritis terarah.
							</p>
						</div>
					</ul>
					<ul className="flex gap-3 border lg:border-none border-gray-200 rounded-lg p-3 items-center">
						<div className="p-1 flex items-center justify-center bg-[#FFEFD5] rounded-full">
							<IoCheckmarkSharp />
						</div>
						<div className="flex flex-col gap1">
							<p className="text-sm lg:text-xl font-semibold">
								Pendampingan Konseling & Pengembangan Minat
								Siswa Terstruktur
							</p>
							<p className="text-xs  lg:text-sm">
								Wali kelas dan guru BK memantau dinamika
								psikososial remaja.
							</p>
						</div>
					</ul>
					<ul className="flex gap-3 border lg:border-none  border-gray-200 rounded-lg p-3 items-center">
						<div className="p-1 flex items-center justify-center bg-[#FFEFD5] rounded-full">
							<IoCheckmarkSharp />
						</div>
						<div className="flex flex-col gap1">
							<p className="text-sm   lg:text-xl font-semibold">
								Fasilitas Belajar Lengkap & Nyaman
							</p>
							<p className="text-xs  lg:text-sm">
								Laboratorium sains mutakhir, studio komputer,
								dan e-library.
							</p>
						</div>
					</ul>
				</div>
				<div className="w-full lg:w-1/2">
					<button
						onClick={() => navigate("/about-us")}
						className="w-full justify-center flex gap-2 items-center px-6 py-3 bg-[#EBF1FF] text-sm lg:text-lg  rounded-lg font-semibold"
					>
						Baca Profil Sekolah <HiOutlineArrowSmallRight />
					</button>
				</div>
			</div>
		</main>
	);
};

export default AboutUs;
