import { Teacher } from "@/datas/TenagaPendidik";
import { TenagaKependidikan } from "@/datas/TenagaKependidikan";

const TenagaPendidik = () => {
	return (
		<main className="flex flex-col px-4 lg:px-14 py-12 space-y-4">
			<section className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-3/5 space-y-4">
					<span className="text-sm lg:text-lg text-[#B8890B]">
						DEDIKASI & KETELADANAN
					</span>
					<h1 className="text-3xl lg:text-5xl font-serif text-[#021B3E]">
						Tenaga Pendidik & Tenaga Kependidikan
					</h1>
					<p className="text-sm lg:text-lg">
						Pendidik berkualifikasi profesional dan staf berkomitmen
						tinggi yang siap mendampingi tumbuh kembang serta
						memaksimalkan potensi siswa.
					</p>
				</div>
				<div className="w-full lg:w-2/5 flex items-end justify-end">
					<div className="flex bg-[#EBF1FF] p-2 w-full text-sm rounded-lg">
						<button className="bg-[#021B3E] text-white w-1/2 py-2 rounded-lg">
							Guru Mata Pelajaran
						</button>
						<button className=" w-1/2">Tenaga Kependidikan</button>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5 w-full place-items-center  ">
				{Teacher.map((t) => (
					<div className="bg-white flex flex-col gap-5 p-2 lg:p-8 justify-center h-70 py-4 lg:py-12 w-full   rounded-xl border border-gray-200 lg:shadow-lg">
						<div className="flex flex-col items-center 2xl:flex-row gap-4 w-full">
							<div className="w-full 2xl:w-1/5 flex justify-center  ">
								<p className="text-2xl flex justify-center items-center font-extrabold text-[#F4BF46] bg-[#021B3E] rounded-full w-17 h-17 text-center">
									{t.init}
								</p>
							</div>
							<div className="flex  w-full 2xl:w-4/5 items-center 2xl:items-start flex-col gap-2">
								<p className="bg-[#EDF0FF] w-auto px-2 text-xs lg:text-sm  rounded-full">
									{t.jabatan}
								</p>
								<p className="text-sm h-5 xl:h-10 text-center flex items-center 2xl:text-left lg:text-xl font-semibold text-[#021B3E]">
									{t.name}
								</p>
								<p className="text-xs  h-3 lg:text-sm text-center max-w-xs lg:max-w-xl text-gray-500">
									{t.mapel}
								</p>
							</div>
						</div>

						<div className="flex justify-center md:justify-start items-center gap-2"></div>
					</div>
				))}
			</section>
			<section className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-5 w-full place-items-center  ">
				{TenagaKependidikan.map((t) => (
					<div className="bg-[#EBF1FF] flex flex-col items-center gap-5 p-2 lg:p-8 justify-center h-auto lg:h-70 py-4 lg:py-12 w-full  rounded-xl border border-gray-200 lg:shadow-lg">
						<div className="flex justify-center gap-2 w-full">
							<div className="flex gap-4 2xl:w-3/5">
								<div className="w-1/3  flex items-center ">
									<p className="text-lg lg:text-2xl flex justify-center items-center font-extrabold text-[#F4BF46] bg-[#021B3E] rounded-xl w-15 lg:w-20 h-15 lg:h-20 text-center">
										{t.init}
									</p>
								</div>
								<div className="flex w-full justify-center items-start flex-col gap-2">
									<p className="bg-[#EDF0FF] w-auto text-[#B8890B] text-xs lg:text-sm  rounded-full">
										{t.jabatan}
									</p>
									<p className="text-sm lg:text-xl font-semibold text-[#021B3E]">
										{t.name}
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col  gap-2">
							<p className="text-xs lg:text-lg text-center text-gray-500">
								{t.jobdesk}
							</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
};

export default TenagaPendidik;
