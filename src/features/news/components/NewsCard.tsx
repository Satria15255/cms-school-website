import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { createSlug } from "@/utils/createSlug";
import { Link } from "react-router-dom";
import type { NewsItem } from "@/datas/types/news";

const NewsCard = ({ data }: { data: NewsItem }) => {
	return (
		<main className="w-full h-110 md:h-80 lg:h-140 bg-white rounded-lg  flex flex-col justify-between border border-gray-200 shadow-lg">
			<div className="relative">
				<div className="w-full  h-50  md:h-40 lg:h-70 bg-gray-200 rounded-t-xl">
					<img
						src="/news1.jfif"
						alt=""
						className="w-full h-full rounded-t-xl"
					/>
				</div>
				<div className="absolute  rounded-lg  inset-0 top-2  left-2">
					<p className="bg-[#021B3E] max-w-30 md:max-w-50 text-xs lg:text-lg text-white py-2 rounded-xl text-center ">
						{data.category}
					</p>
				</div>
			</div>
			<div className="flex flex-col h-full justify-around gap-4 p-3 lg:p-6">
				<div>
					<p className="text-xs lg:text-sm text-gray-500">
						{data.date}
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-xl min-h-15 md:text-sm lg:text-3xl">
						{data.title}
					</h1>
					<p className="text-xs md:hidden lg:block lg:text-lg text-gray-500">
						{" "}
						{data.description}
					</p>
				</div>
				<Link
					to={`/news/${createSlug(data.title)}`}
					className="text-[#021B3E] text-xs lg:text-lg flex items-center gap-1 font-semibold"
				>
					Baca Selengkapnya <HiOutlineArrowSmallRight />
				</Link>
			</div>
		</main>
	);
};

export default NewsCard;
