import { schoolValue } from "@/datas/SchoolValue";

const SchoolValue = () => {
	return (
		<main className="px-4 md:px-14 py-12">
			<div className="space-y-3 pb-4">
				<p className="text-[#B8890B] text-lg">PRINSIP PENUNTUN</p>
				<h1 className="text-3xl lg:text-5xl text-[#021B3E] font-serif">
					Empat Pilar SMP 2 Nusantara
				</h1>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-3  lg:space-x-4  ">
				{schoolValue.map((s) => (
					<div
						key={s.id}
						className="bg-[#EBF1FF] flex flex-col space-y-4 lg:space-y-3 p-5 rounded-lg min-h-60 md:h-60 lg:h-80"
					>
						<div className="bg-[#021B3E] p-2 w-15 h-15 xl:w-20 xl:h-20 flex justify-center rounded-lg items-center">
							<p className=" text-[#F4BF46] text-2xl lg:text-4xl">
								{s.icon}
							</p>
						</div>
						<p className=" text-[#021B3E] text-md md:text-sm  h-9 lg:h-15 lg:text-3xl font-semibold">
							{s.title}
						</p>
						<p className="hidden md:block text-sm md:text-xs  lg:text-lg xl:text-xl text-black">
							{s.description}
						</p>
						<p className="text-sm lg:text-lg md:hidden text-black">
							{s.description2}
						</p>
					</div>
				))}
			</div>
		</main>
	);
};

export default SchoolValue;
