import { PiCityDuotone, PiTreeStructureDuotone } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";

const Header = () => {
	return (
		<main className="h-150 bg-[#EBF1FF] mt-16 pt-16 flex flex-col justify-center space-y-4  p-14">
			<div>
				<p className="text-sm">
					Beranda /{" "}
					<span className="text-[#021B3E] font-semibold">
						Tentang Sekolah
					</span>
				</p>
			</div>
			<div className="flex  gap-2 items-center">
				<div className="h-2 w-2 rounded-full bg-[#F4BF46]"></div>
				<p className="text-[#B8890B] font-semibold text-xl">
					TENTANG SEKOLAH
				</p>
			</div>
			<div>
				<h1 className="text-6xl font-serif text-[#021B3E]">
					Mengenal Lebih Dekat{" "}
					<span className="text-[#B8890B]">SMP Nusantara</span>
				</h1>
				<p className="text-xl text-gray-700 max-w-3xl">
					Mewujudkan ekosistem pendidikan menengah pertama yang
					memadukan keunggulan akademik, keteguhan budi pekerti, dan
					kesiapan kompetensi abad ke-21 berlandaskan kearifan
					karakter bangsa.
				</p>
			</div>
			<div className="flex gap-5 w-1/2">
				<div className="border w-60 py-2 bg-white text-center border-gray-200 rounded-full flex justify-center items-center gap-1 text-[#F4BF46]">
					<PiCityDuotone />
					<p className="text-[#021B3E] text-sm font-semibold">
						Profil Sekolah
					</p>
				</div>
				<div className="border w-60 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
					<LuUsers />
					<p className="text-[#021B3E] text-sm font-semibold">
						Tenaga Pendidik & Staff
					</p>
				</div>
				<div className="border w-60 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
					<PiTreeStructureDuotone />
					<p className="text-[#021B3E] text-sm font-semibold">
						Struktur Organisasi
					</p>
				</div>
			</div>
		</main>
	);
};

export default Header;
