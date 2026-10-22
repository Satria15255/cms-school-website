import { NewsList } from "@/datas/NewsList";
import LatestNewsCard from "@/features/news/components/LatestNewsCard";

const NewsSection = () => {
	const latestNews = NewsList[0];
	const otherNews = NewsList.slice(1);
	console.log(latestNews);
	console.log(otherNews);

	return (
		<main className="min-h-screen">
			{/*Latest News Posted*/}
			<section className="h-auto p-5 flex justify-center items-center bg-[#EBF1FF]">
				<LatestNewsCard news={latestNews} />
			</section>

			{/*News List*/}
			<section></section>
		</main>
	);
};

export default NewsSection;
