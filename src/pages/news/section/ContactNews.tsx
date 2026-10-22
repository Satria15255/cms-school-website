import { LuMail } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

const Contact = () => {
	return (
		<main className="lg:min-h-100 flex items-center p-5 lg:p-12">
			<div className="bg-[#021B3E] flex flex-col md:flex-row items-center rounded-xl w-full h-auto gap-4 lg:h-90 p-5">
				<div className="w-full lg:w-5/7 flex flex-col gap-2 justify-around h-full lg:p-5">
					<p className="text-sm font-semibold text-[#F4BF46]">
						{" "}
						TRANSPARASI & LAYANAN MEDIA
					</p>
					<h1 className="text-3xl lg:text-7xl font-serif text-white">
						Informasi Publik & Konfirmasi Liputan
					</h1>
					<p className="text-sm lg:text-2xl max-w-7xl text-gray-200">
						Seluruh warta, siaran pers resmi, dokumentasi kegiatan,
						dan publikasi capaian prestasi di laman ini telah
						diverifikasi oleh tim kehumasan dan pimpinan SMP
						Nusantara. Media massa atau mitra independen yang
						membutuhkan keterangan lebih lanjut dapat menghubungi
						bagian humas resmi sekolah.
					</p>
					<p className="text-sm font-semibold text-[#F4BF46]">
						{" "}
						humas@smpnusantara.sch.id
					</p>
				</div>
				<div className="w-full lg:w-2/7 flex flex-col text-lg md:text-sm lg:text-lg items-center justify-center gap-3">
					<button className="w-full bg-[#F4BF46]   font-semibold flex justify-center items-center gap-3 rounded-xl py-4">
						<RiCustomerService2Line />
						Hubungi Humas Sekolah
					</button>
					<p className="text-sm text-center text-gray-400 font-light lg:text-xl max-w-7xl ">
						Merespon Pertanyaan Jurnalistik & Legalitas Informasi
						Sekolah
					</p>
				</div>
			</div>
		</main>
	);
};

export default Contact;
