import { Teacher } from "@/datas/TenagaPendidik";
import { TenagaKependidikan } from "@/datas/TenagaKependidikan";

const TenagaPendidik = () => {
	return (
		<main className="flex flex-col px-14 py-12 space-y-4">
			<section className="flex">
				<div className="w-3/5 space-y-4">
					<span className="text-lg text-[#B8890B]">
						DEDIKASI & KETELADANAN
					</span>
					<h1 className="text-5xl font-serif text-[#021B3E]">
						Tenaga Pendidik & Tenaga Kependidikan
					</h1>
					<p className="text-lg">
						Pendidik berkualifikasi profesional dan staf berkomitmen
						tinggi yang siap mendampingi tumbuh kembang serta
						memaksimalkan potensi siswa.
					</p>
				</div>
				<div className="w-2/5 flex items-end justify-end">
					<div className="flex bg-[#EBF1FF] p-2 w-1/2 rounded-lg">
						<button className="bg-[#021B3E] text-white w-1/2 py-2 rounded-lg">
							Guru Mata Pelajaran
						</button>
						<button className=" w-1/2">Tenaga Kependidikan</button>
					</div>
				</div>
			</section>
			<section className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5 w-full place-items-center  ">
				{Teacher.map((t) => (
					<div className="bg-white flex flex-col gap-5 p-8 justify-center h-70 py-4 lg:py-12 w-full lg:w-120 rounded-xl border border-gray-200 lg:shadow-lg">
						<div className="flex gap-4 w-full">
							<div className="w-1/5 flex  items-center ">
								<p className="text-2xl flex justify-center items-center font-extrabold text-[#F4BF46] bg-[#021B3E] rounded-full w-17 h-17 text-center">
									{t.init}
								</p>
							</div>
							<div className="flex w-4/5 items-start flex-col gap-2">
								<p className="bg-[#EDF0FF] w-auto px-2 text-xs lg:text-sm  rounded-full">
									{t.jabatan}
								</p>
								<p className="text-sm lg:text-3xl font-semibold text-[#021B3E]">
									{t.name}
								</p>
							</div>
						</div>

						<div className="flex flex-col  gap-2">
							<p className="text-xs lg:text-sm text-gray-500">
								{t.mapel}
							</p>
						</div>
					</div>
				))}
			</section>
			<section className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5 w-full place-items-center  ">
				{TenagaKependidikan.map((t) => (
					<div className="bg-[#EBF1FF] flex flex-col gap-5 p-8 justify-center h-70 py-4 lg:py-12 w-full  rounded-xl border border-gray-200 lg:shadow-lg">
						<div className="flex gap2 w-full">
							<div className="w-1/5 flex  items-center ">
								<p className="text-2xl flex justify-center items-center font-extrabold text-[#F4BF46] bg-[#021B3E] rounded-xl w-20 h-20 text-center">
									{t.init}
								</p>
							</div>
							<div className="flex w-full items-start flex-col gap-2">
								<p className="bg-[#EDF0FF] w-auto text-[#B8890B] text-xs lg:text-sm  rounded-full">
									{t.jabatan}
								</p>
								<p className="text-sm lg:text-3xl font-semibold text-[#021B3E]">
									{t.name}
								</p>
							</div>
						</div>

						<div className="flex flex-col  gap-2">
							<p className="text-xs lg:text-lg text-gray-500">
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
