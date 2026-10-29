import ClassCard from "./ClassCard";

const ClassContainer = ({ classList }) => {
	return (
		<main className="flex flex-col  gap-5 rounded-xl md:p-8">
			<section className="w-full flex flex-col md:flex-row items-center">
				<div className="w-full flex  flex-col  space-y-3">
					<div className="text-sm bg-[#EBF1FF] px-2 rounded-full flex items-center gap-2 w-50">
						<span className="w-2 h-2 bg-[#F4BF46] flex items-center justify-center rounded-full"></span>
						<p className="pt-1">TINGKAT {classList.tingkat}</p>
					</div>
					<h1 className="text-3xl text-[#021B3E] font-moda font-semibold">
						Jenjang Kelas {classList.symbol} (Fase {classList.phase}
						)
					</h1>
					<p className="text-sm max-w-xl">{classList.description}</p>
				</div>
				<div className="w-full md:w-2/5 rounded-xl my-4">
					<div className="  w-90 gap-3 rounded-lg p-3 flex bg-[#EBF1FF]">
						<div className="w-12 h-12 bg-[#021B3E] flex items-center justify-center rounded-full"></div>
						<div>
							<p className="text-sm ">
								Koordinator Jenjang {classList.symbol}
							</p>
							<p className="text-lg  text-[#021B3E]">
								{classList.koord}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-4 gap-3  w-full">
				{classList.subClass.map((sub) => (
					<ClassCard details={sub} />
				))}
			</section>
		</main>
	);
};

export default ClassContainer;
