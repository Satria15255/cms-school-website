import Participant from "./Participant";

const Content = ({ news }) => {
	return (
		<main>
			<article className="w-full space-y-5">
				<div className="w-full h-auto bg-blue-100 rounded-2xl ">
					<img
						src="/news1.jfif"
						alt=""
						className="w-full h-full object-contain rounded-2xl"
					/>
				</div>
				<Participant data={news} />
				<div
					className="whitespace-pre-line text-base leading-8
                        text-gray-700 sm:text-lg"
				>
					{news.content}
				</div>
			</article>
		</main>
	);
};

export default Content;
