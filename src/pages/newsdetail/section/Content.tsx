const Content = ({ news }) => {
	return (
		<main>
			<article className="w-full space-y-5">
				<div className="w-full min-h-140 bg-blue-100 rounded-2xl ">
					<img
						src="/news1.jfif"
						alt=""
						className="w-full h-full object-contain rounded-2xl"
					/>
				</div>
				<div
					className="whitespace-pre-line text-base leading-8
                        text-gray-700 sm:text-lg"
				>
					{news}
				</div>
			</article>
		</main>
	);
};

export default Content;
