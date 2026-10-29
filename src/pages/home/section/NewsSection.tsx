import { NewsList } from "@/datas/NewsList";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import NewsCard from "@/features/news/components/NewsCard";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
	const navigate = useNavigate();

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
					<button
						onClick={() => navigate("/news")}
						className="hidden  text-lg md:text-sm text-[#021B3E] md:flex items-center gap-1 font-semibold"
					>
						Lihat Semua Berita <HiOutlineArrowSmallRight />
					</button>
				</div>
			</header>
			<section className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full place-items-center ">
				{NewsList.slice(0, 3).map((n) => (
					<NewsCard data={n} />
				))}
			</section>
			<button
				onClick={() => navigate("/news")}
				className="text-sm lg:text-lg md:hidden text-[#021B3E] flex items-center gap-1 font-semibold"
			>
				Lihat Semua Berita <HiOutlineArrowSmallRight />
			</button>
		</main>
	);
};

export default NewsSection;
