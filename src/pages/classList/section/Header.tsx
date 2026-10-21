import { PiCityDuotone, PiTreeStructureDuotone } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Header = () => {
	return (
		<main className="h-150 bg-[#EBF1FF] mt-16 pt-16 flex items-center space-y-4  p-14">
			<div className="w-full    space-y-5">
				<div>
					<p className="text-sm">
						Beranda /{" "}
						<span className="text-[#021B3E] font-semibold">
							Daftar Kelas & Pembinaan
						</span>
					</p>
				</div>
				<div className="flex  gap-2 items-center">
					<div className="h-2 w-2 rounded-full bg-[#F4BF46]"></div>
					<p className="text-[#B8890B] font-semibold text-xl">
						INFORMASI AKADEMIK & PEMBINAAN
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-7xl font-serif text-[#021B3E]">
						Daftar Kelas & Wali Kelas SMP Nusantara
					</h1>
					<p className="text-xl text-gray-700 max-w-4xl">
						Penataan rombongan belajar jenjang VII, VIII, dan IX
						yang terstruktur dengan pendampingan intensif dari wali
						kelas berdedikasi untuk memantau perkembangan akademik,
						karakter, serta kesejahteraan peserta didik.
					</p>
				</div>
				<div className="flex gap-5 w-1/2">
					<div className="border w-60 py-2 bg-white text-center border-gray-200 rounded-full flex justify-center items-center gap-1 text-[#F4BF46]">
						<p className="text-[#021B3E] text-sm font-semibold">
							Semua Jenjang
						</p>
					</div>
					<div className="border w-90 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
						<p className="text-[#021B3E] text-sm font-semibold">
							Kelas VII (Fase Fondasi)
						</p>
					</div>
					<div className="border w-90 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
						<p className="text-[#021B3E] text-sm font-semibold">
							Kelas VIII (Fase Penguatan)
						</p>
					</div>
					<div className="border w-90 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
						<p className="text-[#021B3E] text-sm font-semibold">
							Kelas IX (Fase Pemantapan)
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center    justify-center  w-2/5 p-5">
				<div className="bg-white w-90 gap-3 rounded-lg p-2 flex ">
					<div className="w-12 h-12 bg-[#EBF1FF] flex items-center justify-center rounded-xl">
						<span className="text-3xl">
							<IoMdCheckmarkCircleOutline />
						</span>
					</div>
					<div>
						<p className="text-[#B8890B]  text-sm">STATUS RESMI</p>
						<p className="text-lg  text-[#021B3E]">
							Tahun Ajaran 2026/2027
						</p>
						<p className="text-sm ">
							Kurikulum Nasional Berbasis Karakter • <br />
							12 Rombel
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Header;
