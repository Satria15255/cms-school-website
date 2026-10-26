import { Link, useParams } from "react-router-dom";
import { AiTwotoneSound } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";

const Header = ({ news }) => {
	const formattedDate = new Date(`${news.date}T00:00:00`).toLocaleDateString(
		"id-ID",
		{
			day: "numeric",
			month: "long",
			year: "numeric",
		},
	);
	return (
		<main>
			<nav className="mb-8 text-sm text-gray-500">
				<Link to="/" className="hover:text-blue-900">
					Beranda
				</Link>
				{" / "}
				<Link to="/berita" className="hover:text-blue-900">
					Berita
				</Link>
				{" / "}
				<span className="text-gray-800">{news.title}</span>
			</nav>

			<div className="mb-6 space-y-6">
				<span
					className="inline-block rounded-full bg-amber-100
                           px-3 py-1 text-sm font-medium
                           text-amber-900"
				>
					{news.category}
				</span>

				<h1 className="text-7xl font-serif text-[#021B3E]">
					{news.title}
				</h1>

				<p className="  text-lg leading-relaxed text-gray-600">
					{news.description}
				</p>
			</div>
			<div className="my-8 h-1 w-20 rounded-full bg-amber-400" />

			<div className="bg-blue-100 w-full p-5 flex items-center my-12 rounded-xl">
				<div className="flex items-center gap-3 w-full">
					<span className="bg-[#021B3E] p-3 rounded-full text-3xl text-white">
						<AiTwotoneSound />
					</span>
					<div className="flex flex-col ">
						<p className="text-lg text-[#021B3E]">
							Tim Humas & Kesiswaan SMP Nusantara
						</p>
						<p className="text-sm ">
							Diterbitkan: {formattedDate} - 8.30 WIB
						</p>
					</div>
				</div>
				<div className="flex justify-end w-full">
					<button className="flex gap-2 items-center bg-white py-2 px-6">
						<CiShare2 />
						Share
					</button>
				</div>
			</div>
		</main>
	);
};

export default Header;
