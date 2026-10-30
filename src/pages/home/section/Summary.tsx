import { schoolValue } from "@/datas/SchoolValue";
const Summary = () => {
	return (
		<main className="bg-[#1B3054] h-auto py-7 lg:h-140 xl:min-h-150 flex items-center">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 lg:space-x-4 h-auto lg:px-12">
				{schoolValue.map((s) => (
					<div
						key={s.id}
						className="bg-[#021B3E] flex flex-col space-y-1 lg:space-y-6 p-5 rounded-lg h-55 md:h-60 lg:h-80 xl:min-h-100 2xl:h-min-120"
					>
						<div className="bg-[#1B3054] p-2 w-15 h-15 xl:w-20 xl:h-20 flex justify-center rounded-lg items-center">
							<p className=" text-[#F4BF46] text-2xl lg:text-4xl">
								{s.icon}
							</p>
						</div>
						<p className=" text-white text-md md:text-sm  h-9 xl:h-12 2xl:h-15 lg:text-3xl font-semibold">
							{s.title}
						</p>
						<p className="hidden md:block text-sm md:text-xs  lg:text-lg xl:text-lg 2xl:text-xl text-gray-300">
							{s.description}
						</p>
						<p className="text-sm lg:text-lg md:hidden text-gray-300">
							{s.description2}
						</p>
					</div>
				))}
			</div>
		</main>
	);
};

export default Summary;
