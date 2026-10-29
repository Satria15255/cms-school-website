import type { NewsItem } from "@/datas/types/news";
import { LuArrowRight } from "react-icons/lu";

const LatestNews = ({ news }: { news: NewsItem }) => {
	return (
		<main className="w-full md:w-4/5 h-auto md:h-150 flex flex-col md:flex-row rounded-3xl border border-gray-100 bg-white">
			<section className="w-full min-h-60 md:w-4/7">
				<div className="h-full w-full bg-yellow-100 rounded-l-3xl"></div>
			</section>
			<section className="w-full md:w-3/7 p-4 md:p-8 flex flex-col gap-4 justify-between">
				<div className="space-y-4 md:space-y-6">
					<div className="text-xs lg:text-lg flex items-center gap-3">
						<p className="text-[#021B3E] ">{news.date}</p>
						<span className="w-2 h-2 bg-[#021B3E]  flex items-center justify-center rounded-full"></span>

						<p className="text-gray-700">{news.category}</p>
						<span className="w-2 h-2 bg-[#021B3E]  flex items-center justify-center rounded-full"></span>

						<span className="text-gray-700 ">Just Posted!</span>
					</div>
					<h1 className="text-2xl lg:text-5xl font-serif text-[#021B3E]">
						{news.title}
					</h1>
					<p className="text-sm lg:text-xl text-gray-700">
						{news.description}
					</p>
				</div>

				<div className="flex flex-col md:flex-row w-full">
					<button className="w-full lg:w-1/2 text-sm md:text-lg  py-3 rounded-xl  bg-[#021B3E] text-white flex items-center  justify-center gap-2">
						Baca Selengkapnya
						<LuArrowRight />
					</button>
					<span className="w-full lg:w-1/2 text-sm md:text-lg text-gray-500 py-3  flex justify-center">
						Artikel Terverifikasi
					</span>
				</div>
			</section>
		</main>
	);
};

export default LatestNews;
