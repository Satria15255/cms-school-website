import { NewsList } from "@/datas/NewsList";
import LatestNewsCard from "@/features/news/components/LatestNewsCard";
import NewsCard from "@/features/news/components/NewsCard";

const NewsSection = () => {
	const latestNews = NewsList[0];
	const otherNews = NewsList.slice(1);
	console.log(latestNews);
	console.log(otherNews);

	return (
		<main className="min-h-screen px">
			{/*Latest News Posted*/}
			<section className="h-auto p-5 py-14 flex justify-center items-center bg-[#EBF1FF]">
				<LatestNewsCard news={latestNews} />
			</section>

			{/*News List*/}

			<section className="flex flex-col gap-4 p-4 lg:p-14">
				<div className="flex flex-col gap-2 pb-10">
					<h1 className="text-3xl lg:text-5xl font-serif text-[#021B3E]">
						Semua Arsip berita & Siaran Resmi
					</h1>
					<p className="text-sm lg:text-lg text-gray-500">
						Daftar warta berkala yang disajikan secara transparan
						dan berintegritas
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{otherNews.map((news) => (
						<NewsCard data={news} />
					))}
				</div>
			</section>
		</main>
	);
};

export default NewsSection;
