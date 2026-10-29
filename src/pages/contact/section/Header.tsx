import { Link } from "react-router-dom";
import ContactCard from "@/features/contact/components/ContactCard";
import { ContactAddress } from "@/datas/Contact";

const Header = () => {
	return (
		<main className="h-400 lg:h-220 pb-12 relative bg-white pt-12 md:mt-16 mb-6 ">
			<div className="bg-white  border">
				<div className="bg-[#021B3E] flex flex-col gap-4 lg:justify-center pt-12 p-4 lg:px-14 h-120 lg:min-h-120">
					<div className="text-xs lg:text-sm text-gray-400">
						<Link to="/" className="hover:text-blue-900">
							Beranda
						</Link>
						{" / "}
						<Link
							to="/contact"
							className="  text-[#F4BF46] hover:text-blue-900"
						>
							Kontak & Layanan Informasi
						</Link>
					</div>
					<p className=" w-auto text-sm flex items-center gap-3 text-[#F4BF46]">
						<span className="w-2 h-2 bg-[#F4BF46] flex items-center justify-center rounded-full"></span>
						LAYANAN INFORMASI & KOMUNIKASI RESMI
					</p>
					<h1 className="text-4xl lg:text-7xl text-[#021B3E] text-white font-serif">
						Hubungi & Kunjungi SMP Nusantara
					</h1>
					<p className="text-sm max-w-xl text-gray-300">
						Sekretariat dan tim layanan publik SMP Nusantara siap
						mendampingi kebutuhan informasi akademik, konsultasi
						orang tua, kunjungan dinas, maupun kerja sama kemitraan
						institusi pendidikan secara terarah dan profesional.
					</p>
				</div>
			</div>
			<div className="absolute inset-0 flex items-end px-4 md:px-14">
				<div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full ">
					{ContactAddress.map((contact) => (
						<ContactCard data={contact} />
					))}
				</div>
			</div>
		</main>
	);
};

export default Header;
