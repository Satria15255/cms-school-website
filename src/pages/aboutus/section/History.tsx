import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoCheckmarkSharp } from "react-icons/io5";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const History = () => {
	return (
		<main className="grid grid-cols-2 h-screen place-items-center px-14">
			<div className="space-y-3 ">
				<p className="text-sm font-semibold flex items-center gap-3 text-[#B8890B]">
					HISTORY & DEDIKASI
				</p>
				<h1 className="text-5xl text-[#021B3E] font-serif">
					Sejarah & Komitmen Kami Membangun Masa Depan Siswa.
				</h1>
				<p className="text-lg text-gray-700 max-w-">
					Didirikan dengan tekad untuk menyediakan sarana pendidikan
					menengah berkualitas tinggi yang terjangkau dan inklusif,
					SMP Nusantara telah menempuh perjalanan panjang dalam
					menorehkan prestasi dan melahirkan lulusan berintegritas.
				</p>
				<p className="text-lg text-gray-700 max-w-">
					Kami meyakini bahwa jenjang Sekolah Menengah Pertama (SMP)
					adalah fase pembentukan fondasi kognitif, emosional, dan
					sosial yang sangat krusial bagi remaja awal. Melalui
					pengajaran kontekstual, bimbingan personal berpusat pada
					murid, serta fasilitas modern yang ramah lingkungan, sekolah
					kami menghadirkan ruang tumbuh yang dinamis dan berdaya
					saing global.
				</p>
			</div>
			<div className=" w-4/5">
				<img
					src="/aboutUsImage.png"
					alt="aboutUs"
					className="rounded-t-xl w-full"
				/>
				<div className="flex justify-between p-5 text-sm font rounded-b-lg shadow-xl">
					<p className="font-semibold">SMPN 2 Tambakrejo</p>
					<p className="text-gray-600">Tambakrejo</p>
				</div>
			</div>
		</main>
	);
};

export default History;
