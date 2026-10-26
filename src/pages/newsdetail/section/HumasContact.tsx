import { LuMail } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";

export const HumasContactLabel = () => {
	return (
		<main className="w-full bg-[#021B3E] text-white rounded-xl border flex flex-col gap-3 border-gray-300 p-5 text-gray-600">
			<h1 className="text-lg font-bold">
				LAYANAN MEDIA & HUBUNGAN HUMAS
			</h1>
			<p className="text-sm text-gray-300">
				Bagi rekan jurnalis atau pemerhati pendidikan yang memerlukan
				berkas rilis beresolusi penuh, hubungi:
			</p>
			<p className="flex gap-2 items-center text-sm ">
				<span className="text-[#F4BF46]">
					<LuMail />
				</span>
				humas@smpnusantara.id
			</p>
		</main>
	);
};

export const HumasContactSection = () => {
	return (
		<main className="lg:min-h-100 flex items-center p-5 lg:p-12">
			<div className="bg-[#021B3E] flex flex-col md:flex-row items-center rounded-xl w-full h-auto gap-4 lg:h-90 p-5">
				<div className="w-full lg:w-5/7 flex flex-col gap-2 justify-around h-full lg:p-5">
					<p className="text-sm font-semibold text-[#F4BF46]">
						{" "}
						PORTAL KOMUNIKASI PUBLIK
					</p>
					<h1 className="text-3xl lg:text-7xl font-serif text-white">
						Memerlukan Konfirmasi atau Peliputan Kegiatan?
					</h1>
					<p className="text-sm lg:text-2xl max-w-7xl text-gray-200">
						Tim Humas SMP Nusantara siap melayani konfirmasi data
						warta, jadwal kunjungan studi tiru, maupun permohonan
						narasumber riset pelajar.
					</p>
				</div>
				<div className="w-full lg:w-2/7 flex flex-col text-lg md:text-sm lg:text-lg items-center justify-center gap-3">
					<button className="w-full bg-[#F4BF46]   font-semibold flex justify-center items-center gap-3 rounded-xl py-4">
						<LuMail />
						Hubungi Humas Kami
					</button>
					<button className="w-full bg-[#1B3054]  font-semibold text-white flex items-center justify-center  gap-3 rounded-xl py-4">
						<FaRegNewspaper />
						Telusuri Berita Lain
					</button>
				</div>
			</div>
		</main>
	);
};
