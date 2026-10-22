import Header from "./section/Header";
import NewsSection from "./section/NewsSection";
import NewsContact from "./section/ContactNews";

const NewsPage = () => {
	return (
		<div className="pt-16">
			<Header />
			<NewsSection />
			<NewsContact />
		</div>
	);
};

export default NewsPage;
