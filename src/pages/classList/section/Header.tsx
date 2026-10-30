import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";

const Header = () => {
	return (
		<main className="h-auto  2xl:min-h-150  bg-[#EBF1FF] md:mt-16 pt-16  flex flex-col md:flex-row items-center space-y-2 md:space-y-4  p-4 lg:p-14">
			<div className="w-full  space-y-3  md:space-y-5">
				<div className="text-xs xl:text-lg">
					<p className=" ">
						Beranda /{" "}
						<span className="text-[#021B3E] font-semibold">
							Daftar Kelas & Pembinaan
						</span>
					</p>
				</div>
				<div className="flex  gap-2 items-center">
					<div className="h-2 w-2 rounded-full bg-[#F4BF46]"></div>
					<p className="text-[#B8890B] font-semibold text-sm lg:text-xl">
						INFORMASI AKADEMIK & PEMBINAAN
					</p>
				</div>
				<div className="space-y-4">
					<h1 className="text-3xl lg:text-6xl font-serif text-[#021B3E]">
						Daftar Kelas & Wali Kelas SMP Nusantara
					</h1>
					<p className="text-sm lg:text-lg text-gray-700 max-w-4xl">
						Penataan rombongan belajar jenjang VII, VIII, dan IX
						yang terstruktur dengan pendampingan intensif dari wali
						kelas berdedikasi untuk memantau perkembangan akademik,
						karakter, serta kesejahteraan peserta didik.
					</p>
				</div>
				<div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-5 w-full text-sm 2xl:text-lg ">
					<div className="border w-full bg-[#021B3E]  py-2   text-center border-gray-200 rounded-full flex justify-center items-center gap-1 text-[#F4BF46]">
						<p className="text-white   font-semibold whitespace-nowrap">
							Semua Jenjang
						</p>
					</div>
					<div className="border w-full py-2 px-3 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
						<p className="text-[#021B3E]  font-semibold  whitespace-nowrap">
							Kelas VII (Fase Fondasi)
						</p>
					</div>
					<div className="border w-full   py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
						<p className="text-[#021B3E]   font-semibold whitespace-nowrap">
							Kelas VIII (Fase Penguatan)
						</p>
					</div>
					<div className="border w-full   py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-1 text-[#F4BF46]">
						<p className="text-[#021B3E]   font-semibold whitespace-nowrap">
							Kelas IX (Fase Pemantapan)
						</p>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center w-full md:w-2/5 md:p-5">
				<div className="bg-white w-full md:w-90 gap-3 rounded-lg p-2 flex ">
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
			<div className="flex md:hidden gap-5 max-w-sm overflow-x-auto whitespace-nowrap pb-2">
				<div className="border  w-full px-4 py-2   text-center border-gray-200 rounded-full flex bg-[#021B3E] justify-center items-center gap-2 text-white">
					<div className=" ">
						<RxDashboard />
					</div>

					<p className="  text-sm font-semibold">Semua Jenjang</p>
				</div>
				<div className="borde w-full px-4 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-2 text-[#F4BF46]">
					<div className="h-2 w-2 rounded-full bg-[#021B3E]"></div>

					<p className="text-[#021B3E] text-sm font-semibold">
						Kelas VII (Fase Fondasi)
					</p>
				</div>
				<div className="border w-full px-4 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-2 text-[#F4BF46]">
					<div className="h-2 w-2 rounded-full bg-[#021B3E]"></div>
					<p className="text-[#021B3E] text-sm font-semibold">
						Kelas VIII (Fase Penguatan)
					</p>
				</div>
				<div className="border  w-full px-4 py-2 bg-white text-center border-gray-200 rounded-full flex items-center justify-center gap-2 text-[#F4BF46]">
					<div className="h-2 w-2 rounded-full bg-[#021B3E]"></div>

					<p className="text-[#021B3E] text-sm font-semibold">
						Kelas IX (Fase Pemantapan)
					</p>
				</div>
			</div>
		</main>
	);
};

export default Header;
