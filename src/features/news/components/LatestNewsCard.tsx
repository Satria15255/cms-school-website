import { LuArrowRight } from "react-icons/lu";

const LatestNews = ({ news }) => {
	return (
		<main className="w-4/5 h-150 flex rounded-3xl border border-gray-100 bg-white">
			<section className="w-4/7">
				<div className="h-full w-full bg-yellow-100 rounded-l-3xl"></div>
			</section>
			<section className="w-3/7 p-8 flex flex-col  justify-between">
				<div className="space-y-6">
					<div className="text-lg flex items-center gap-3">
						<p className="text-[#021B3E]">{news.date}</p>
						<span className="w-2 h-2 bg-[#021B3E]  flex items-center justify-center rounded-full"></span>

						<p className="text-gray-500">{news.category}</p>
					</div>
					<h1 className="text-5xl font-serif text-[#021B3E]">
						{news.title}
					</h1>
					<p className="text-xl text-gray-700">{news.description}</p>
				</div>

				<div className="flex">
					<button className="w-1/2 text-lg  py-3 rounded-2xl  bg-[#021B3E] text-white flex items-center  justify-center gap-2">
						Baca Selengkapnya
						<LuArrowRight />
					</button>
					<span className="w-1/2 text-lg text-gray-500 py-3  flex justify-center">
						Artikel Terverifikasi
					</span>
				</div>
			</section>
		</main>
	);
};

export default LatestNews;
