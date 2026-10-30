import { Teacher } from "@/datas/TenagaPendidik";
import { useNavigate } from "react-router-dom";

const TeacherSection = () => {
	const navigate = useNavigate();

	return (
		<main className="h-auto p-5 lg:p-14 flex flex-col justify-center lg:items-center space-y-8 w-full bg-white">
			<header className="flex flex-col lg:items-center space-y-3">
				<p className="text-sm font-semibold text-[#B8890B] ">
					KETELADANAN GURU
				</p>
				<h1 className="text-3xl lg:text-5xl font-serif  text-[#021B3E]">
					Pendidik & Tenaga Kependidikan
				</h1>
				<p className="text-sm lg:text-lg max-w-lg lg:text-center text-gray-700">
					Guru guru berdedikasi yang membimbing putra putri anda
					dengan keahlian pedagogik dan pendekatan personal.
				</p>
			</header>
			<section className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-5 w-full place-items-center lg:px-12">
				{Teacher.map((t) => (
					<div
						key={t.id}
						className="bg-white flex flex-col gap-5 p-2 items-center justify-center min-h-50 lg:h-auto py-4 lg:py-12 w-full  rounded-xl border border-gray-200 lg:shadow-lg"
					>
						<div className="rounded-full h-15 lg:h-30 w-15 lg:w-30 bg-blue-100">
							<img src="" alt="" />
						</div>
						<div className="text-center flex flex-col items-center gap-2">
							<p className="text-xs lg:text-xl font-semibold text-[#021B3E]">
								{t.name}
							</p>

							<p className="bg-[#EDF0FF] w-auto px-2 text-xs lg:text-sm  rounded-full">
								{t.jabatan}
							</p>

							<p className="text-xs lg:text-sm text-gray-500">
								{t.mapel}
							</p>
						</div>
					</div>
				))}
			</section>
			<div className="flex gap-2 lg:gap-4 w-full justify-center">
				<button
					onClick={() => navigate("/about-us")}
					className="w-1/2 lg:w-2/8 2xl:w-1/8 py-4 text-xs lg:text-lg bg-white text-[#021B3E] font-semibold rounded-xl border border-gray-200 flex gap-1 justify-center items-center"
				>
					Lihat Tenaga Pendidik
				</button>
				<button
					onClick={() => navigate("/about-us")}
					className="w-1/2 lg:w-2/8 2xl:w-1/8 py-4 text-xs lg:text-lg bg-[#021B3E] text-white rounded-xl font-semibold border border-gray-200 flex gap-1 justify-center items-center"
				>
					Lihat Struktur Organisasi
				</button>
			</div>
		</main>
	);
};

export default TeacherSection;
