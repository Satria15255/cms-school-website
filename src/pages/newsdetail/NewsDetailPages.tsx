import { Link, useParams } from "react-router-dom";
import { NewsList } from "@/datas/NewsList";
import { createSlug } from "@/utils/createSlug";
import Header from "./section/Header";
import Content from "./section/Content";
import RelatedNews from "./section/RelatedNews";
import Participant from "./section/Participant";
import { HumasContactLabel, HumasContactSection } from "./section/HumasContact";

const NewsDetailPage = () => {
	const { slug } = useParams<{ slug: string }>();

	const news = NewsList.find((item) => createSlug(item.title) === slug);

	if (!news) {
		return (
			<main className="mx-auto max-w-3xl px-4 py-20 text-center">
				<h1 className="text-3xl font-bold">Berita Tidak Ditemukan</h1>

				<p className="mt-4 text-gray-600">
					Berita yang kamu cari tidak tersedia atau mungkin sudah
					dipindahkan.
				</p>

				<Link
					to="/berita"
					className="mt-6 inline-block rounded-lg bg-blue-900
                     px-5 py-3 text-white transition
                     hover:bg-blue-800"
				>
					Kembali ke Berita
				</Link>
			</main>
		);
	}

	return (
		<main className="pt-16 mt-16 flex flex-col gap-5  px-14">
			<section className="flex gap-5 justify-center items-start">
				<div className="w-4/7">
					<Header news={news} />
					<Content news={news.content} />
				</div>
				<div className="w-2/7 sticky top-24 flex flex-col gap-5">
					<div className="w-full flex justify-end">
						<Link
							to="/news"
							className="inline-flex items-center gap-2 font-medium
                     text-blue-900 transition hover:text-amber-600"
						>
							<span aria-hidden="true">←</span>
							Kembali ke Semua Berita
						</Link>
					</div>
					<Participant data={news} />
					<HumasContactLabel />
				</div>
			</section>
			<RelatedNews news={news} />
			<HumasContactSection />
		</main>
	);
};

export default NewsDetailPage;
