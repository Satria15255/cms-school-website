import { LuMail } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Contact = () => {
	return (
		<main className="lg:min-h-100 flex items-center p-5 lg:p-12">
			<div className="bg-[#021B3E] flex flex-col md:flex-row items-center rounded-xl w-full h-auto gap-4 lg:h-90 p-5">
				<div className="w-full lg:w-5/7 flex flex-col gap-2 justify-around h-full lg:p-5">
					<p className="text-sm font-semibold text-[#F4BF46]">
						{" "}
						LAYANAN INFORMASI & KUNJUNGAN
					</p>
					<h1 className="text-3xl lg:text-7xl font-serif text-white">
						Ingin Berkonsultasi atau Berkunjung ke Sekolah?
					</h1>
					<p className="text-sm lg:text-2xl max-w-7xl text-gray-200">
						Sekretariat kami siap memberikan informasi seputar
						profil sekolah, program pembinaan, dan informasi jadwal
						layanan kunjungan langsung bagi calon orang tua
						siswa.{" "}
					</p>
				</div>
				<div className="w-full lg:w-2/7 flex flex-col text-lg md:text-sm lg:text-lg items-center justify-center gap-3">
					<button className="w-full bg-[#F4BF46]   font-semibold flex justify-center items-center gap-3 rounded-xl py-4">
						<LuMail />
						Hubungi Sekolah Kami
					</button>
					<button className="w-full bg-[#1B3054]  font-semibold text-white flex items-center justify-center  gap-3 rounded-xl py-4">
						<IoPhonePortraitOutline />
						WhatssApp +62 812 345 678
					</button>
				</div>
			</div>
		</main>
	);
};

export default Contact;
