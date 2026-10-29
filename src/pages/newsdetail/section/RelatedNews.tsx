import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import NewsCard from "@/features/news/components/NewsCard";

const RelatedNews = ({ news }) => {
	return (
		<main className="h-auto flex md:p-5 flex-col justify-center items-center space-y-8 w-full bg-white">
			<header className="flex flex-col items-start space-y-3 w-full ">
				<p className="text-sm font-semibold text-[#B8890B] ">
					INFORMASI TERKINI
				</p>
				<h1 className="text-3xl lg:text-5xl font-serif text-[#021B3E]">
					Kabar Terkait Lainnya
				</h1>
				<div className="flex w-full justify-between">
					<p className="text-sm lg:text-lg  text-gray-700">
						Ikuti perkembangan prestasi, kegiatan belajar, dan
						agenda resmi SMP Nusantara.
					</p>
					<button className="hidden  text-lg md:text-sm text-[#021B3E] md:flex items-center gap-1 font-semibold">
						Lihat Semua Berita <HiOutlineArrowSmallRight />
					</button>
				</div>
			</header>
			<section className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full place-items-center ">
				{news.slice(0, 3).map((n) => (
					<NewsCard data={n} />
				))}
			</section>
			<button className="text-sm lg:text-lg md:hidden text-[#021B3E] flex items-center gap-1 font-semibold">
				Lihat Semua Berita <HiOutlineArrowSmallRight />
			</button>
		</main>
	);
};

export default RelatedNews;
