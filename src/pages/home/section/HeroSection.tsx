import { TfiLayoutLineSolid } from "react-icons/tfi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { MdOutlineMessage } from "react-icons/md";
import { PiBookOpenUserBold } from "react-icons/pi";

const HeroSection = () => {
	return (
		<main className="grid grid-cols-2 h-screen place-items-center">
			<div className="h-full  flex flex-col justify-center space-y-4 w-4/5">
				<p className="text-sm font-semibold flex items-center gap-3">
					<span className="flex text-[#D5A32C] text-3xl">
						<TfiLayoutLineSolid />
						<TfiLayoutLineSolid />
					</span>
					PENDIDIKAN BERKARAKTER & BERPRESTASI
				</p>
				<h1 className="text-7xl font-serif">
					<span className="text-[#021B3E]">
						Membimbing Generasi Muda,
					</span>
					<span className="text-[#B8890B]">
						Membentuk Masa Depan Mulia
					</span>
				</h1>
				<p className="text-lg max-w-lg ">
					Lingkungan belajar yang hangat, suportif, dan adaptif untuk
					menggali potensi setiap siswa jenjang SMP menuju karakter
					unggul dan berdaya saing.
				</p>
				<div className="flex gap-3">
					<button className="flex gap-2 items-center px-6 py-3 bg-[#021B3E] text-lg text-white rounded-lg font-semibold">
						Kenali Sekolah <HiOutlineArrowSmallRight />
					</button>
					<button className="flex gap-2 items-center px-6 py-3 bg-[#F4BF46] text-lg text-black rounded-lg font-semibold">
						Hubungi Sekolah <MdOutlineMessage />
					</button>
				</div>
			</div>
			<div className="relative p-5 w-4/5 bg-white">
				<img
					src="/heroImage.png"
					alt="heroImage"
					className="rounded-lg w-full"
				/>
				<div className="absolute  bottom-8 left-8 bg-white  w-1/2 rounded-lg flex items-center gap-5 p-5">
					<div className="text-[#F4BF46] text-3xl">
						<PiBookOpenUserBold />
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-xl text-[#021B3E]">
							Ruang Belajar Kolaboratif
						</p>
						<p className="text-sm text-gray-400">
							Mendukung eksplorasi literasi dan diskusi kelompok
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HeroSection;
