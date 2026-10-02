import { ClassInfo } from "@/datas/ClassList";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const ClassList = () => {
	return (
		<main className="h-screen flex flex-col justify-center items-center space-y-8 w-full bg-[#EBF1FF]">
			<header className="flex flex-col items-center space-y-3">
				<p className="text-sm font-semibold text-[#B8890B] ">
					JENJANG PEMBINAAN
				</p>
				<h1 className="text-5xl font-serif text-[#021B3E]">
					Daftar Kelas & Pembinaan
				</h1>
				<p className="text-lg max-w-lg text-center text-gray-700">
					Struktur kelas jenjang VII, VIII, dan IX didampingi wali
					kelas berdedikasi guna memastikan monitoring belajar
					optimal.
				</p>
			</header>
			<section className="grid grid-cols-3 gap-5 w-full place-items-center px-12">
				{ClassInfo.map((c) => (
					<div className="w-full h-90 bg-white rounded-xl p-6 flex flex-col justify-between">
						<div className="flex justify-between">
							<p className="font-semibold text-sm text-[#B8890B]">
								TINGKAT {c.tingkat}
							</p>
							<p className="bg-[#EBF1FF] w-auto px-2 text-sm  rounded-full">
								{c.subClass}
							</p>
						</div>
						<div className="flex flex-col space-y-2">
							<p className="text-[#021B3E] text-2xl font-serif">
								Tingkat Kelas {c.kelas}
							</p>
							<p className="text-lg text-gray-500 max-w-md">
								{c.description}
							</p>
						</div>
						<div className="flex items-center gap-2 bg-[#EBF1FF] p-2 rounded-xl">
							<span className="text-[#B8890B] text-lg p-3">
								<HiOutlineUser />
							</span>
							<div>
								<p className="text-sm text-gray-500">
									Koordinator Wali Kelas
								</p>
								<p className="text-sm text-[#021B3E] font-semibold">
									{c.koor}
								</p>
							</div>
						</div>
					</div>
				))}
			</section>
			<div className="flex gap-4 w-full justify-center">
				<button className="w-1/8 py-3 text-lg bg-[#021B3E] text-white rounded-xl font-semibold border border-gray-200 flex gap-1 justify-center items-center">
					Lihat Semua Kelas <HiOutlineArrowSmallRight />
				</button>
			</div>
		</main>
	);
};

export default ClassList;
