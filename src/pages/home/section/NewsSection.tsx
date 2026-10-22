import { NewsList } from "@/datas/NewsList";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const NewsSection = () => {
	return (
		<main className="h-auto lg:h-screen flex p-5 flex-col justify-center items-center space-y-8 w-full bg-white">
			<header className="flex flex-col items-start space-y-3 w-full ">
				<p className="text-sm font-semibold text-[#B8890B] ">
					WARTA SEKOLAH
				</p>
				<h1 className="text-3xl lg:text-5xl font-serif text-[#021B3E]">
					Kabar & Aktivitas Sekolah
				</h1>
				<div className="flex w-full justify-between">
					<p className="text-sm lg:text-lg  text-gray-700">
						Informasi resmi, agenda kegiatan, prestasi siswa, dan
						pengumuman terpadu
					</p>
					<button className="hidden  text-lg md:text-sm text-[#021B3E] md:flex items-center gap-1 font-semibold">
						Lihat Semua Berita <HiOutlineArrowSmallRight />
					</button>
				</div>
			</header>
			<section className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full place-items-center ">
				{NewsList.map((n) => (
					<div className="w-full h-100 md:h-80 lg:h-140 bg-white rounded-lg  flex flex-col justify-between border border-gray-200 shadow-lg">
						<div className="relative">
							<div className="w-full  h-50  md:h-40 lg:h-70 bg-gray-200 rounded-t-xl"></div>
							<div className="absolute  rounded-lg  inset-0 top-2  left-2">
								<p className="bg-[#021B3E] w-30 text-sm lg:text-lg text-white py-1 rounded-xl text-center ">
									{n.category}
								</p>
							</div>
						</div>
						<div className="flex flex-col h-full justify-around p-3 lg:p-6">
							<div>
								<p className="text-xs lg:text-sm text-gray-500">
									{n.date}
								</p>
							</div>
							<div className="flex flex-col gap-2">
								<h1 className="text-xl md:text-sm lg:text-3xl">
									{n.title}
								</h1>
								<p className="text-xs md:hidden lg:block lg:text-lg text-gray-500">
									{" "}
									{n.description}
								</p>
							</div>
							<div>
								<button className="text-[#021B3E] text-xs lg:text-lg flex items-center gap-1 font-semibold">
									Baca Selengkapnya{" "}
									<HiOutlineArrowSmallRight />
								</button>
							</div>
						</div>
					</div>
				))}
			</section>
			<button className="text-lg md:hidden text-[#021B3E] flex items-center gap-1 font-semibold">
				Lihat Semua Berita <HiOutlineArrowSmallRight />
			</button>
		</main>
	);
};

export default NewsSection;
