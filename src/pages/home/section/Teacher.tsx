import { Teacher } from "@/datas/TenagaPendidik";

const TeacherSection = () => {
	return (
		<main className="h-screen flex flex-col justify-center items-center space-y-8 w-full bg-white">
			<header className="flex flex-col items-center space-y-3">
				<p className="text-sm font-semibold text-[#021B3E]">
					KETELADANAN GURU
				</p>
				<h1 className="text-5xl font-serif ">
					Pendidik & Tenaga Kependidikan
				</h1>
				<p className="text-lg max-w-lg text-center text-gray-700">
					Guru guru berdedikasi yang membimbing putra putri anda
					dengan keahlian pedagogik dan pendekatan personal.
				</p>
			</header>
			<section className="grid grid-cols-4 gap-5 w-full place-items-center px-12">
				{Teacher.map((t) => (
					<div className="bg-white flex flex-col gap-5 items-center justify-center h-auto py-12 w-100 rounded-xl border border-gray-200 shadow-lg">
						<div className="rounded-full h-30 w-30 bg-blue-100">
							<img src="" alt="" />
						</div>
						<div className="text-center flex flex-col items-center gap-2">
							<p className="text-lg font-semibold text-[#021B3E]">
								{t.name}
							</p>

							<p className="bg-[#EDF0FF] w-auto px-2 text-sm  rounded-full">
								{t.jabatan}
							</p>

							<p className="text-sm text-gray-500">{t.mapel}</p>
						</div>
					</div>
				))}
			</section>
			<div className="flex gap-4 w-full justify-center">
				<button className="w-1/8 py-3 text-lg bg-white text-[#021B3E] font-semibold rounded-xl border border-gray-200 flex gap-1 justify-center items-center">
					Lihat Tenaga Pendidik
				</button>
				<button className="w-1/8 py-3 text-lg bg-[#021B3E] text-white rounded-xl font-semibold border border-gray-200 flex gap-1 justify-center items-center">
					Lihat Struktur Organisasi
				</button>
			</div>
		</main>
	);
};

export default TeacherSection;
