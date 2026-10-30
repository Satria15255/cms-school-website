import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { MdOutlineMessage } from "react-icons/md";
import { PiBookOpenUserBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
	const navigate = useNavigate();
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 h-auto pt-12 md:mt-12  md:py-12 lg:h-screen place-items-center">
			<div className="h-full  flex flex-col justify-center space-y-4 w-full p-5">
				<p className="text-xs lg:text-sm font-semibold flex items-center gap-1 lg:gap-3">
					<span className="flex text-[#D5A32C] text-xs lg:text-3xl">
						<TfiLayoutLineSolid />
						<TfiLayoutLineSolid />
					</span>
					PENDIDIKAN BERKARAKTER & BERPRESTASI
				</p>
				<h1 className="text-3xl xl:text-6xl 2xl:text-7xl font-serif">
					<span className="text-[#021B3E]">
						Membimbing Generasi Muda,
					</span>
					<span className="text-[#B8890B]">
						Membentuk Masa Depan Mulia
					</span>
				</h1>
				<p className="text-sm lg:text-lg max-w-2xl ">
					Lingkungan belajar yang hangat, suportif, dan adaptif untuk
					menggali potensi setiap siswa jenjang SMP menuju karakter
					unggul dan berdaya saing.
				</p>
				<div className="flex flex-col text-sm md:text-xs lg:text-lg md:flex-row gap-3">
					<button
						onClick={() => navigate("/about-us")}
						className="flex gap-2 justify-center items-center px-6 py-3 bg-[#021B3E]  text-white rounded-lg font-semibold"
					>
						Kenali Sekolah <HiOutlineArrowSmallRight />
					</button>
					<button
						onClick={() => navigate("/contact")}
						className="flex gap-2 justify-center items-center px-6 py-3 bg-[#F4BF46]  text-black rounded-lg font-semibold"
					>
						Hubungi Sekolah <MdOutlineMessage />
					</button>
				</div>
			</div>
			<div className="relative p-5  bg-white">
				<img
					src="/heroImage.png"
					alt="heroImage"
					className="rounded-lg w-full"
				/>
				<div className="absolute  bottom-8 left-8 bg-white w-full lg:w-1/2  2xl:w-full rounded-lg flex items-center max-w-xs lg:max-w-3xl gap-5 p-3 lg:p-5">
					<div className="text-[#F4BF46] text-3xl">
						<PiBookOpenUserBold />
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-sm xl:text-lg 2xl:text-3xl text-[#021B3E]">
							Ruang Belajar Kolaboratif
						</p>
						<p className="text-xs  xl:text-sm 2xl:text-lg text-gray-400">
							Mendukung eksplorasi literasi dan diskusi kelompok
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HeroSection;
