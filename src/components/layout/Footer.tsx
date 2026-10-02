import { MdOutlineLocationOn, MdOutlineLocalPhone } from "react-icons/md";
import { LuClock, LuMail } from "react-icons/lu";

const Footer = () => {
	return (
		<div className="bg-[#021B3E] min-h-50 p-12 w-full">
			<div className="grid grid-cols-3 h-full w-full py-5  justify-between items-start">
				<div className="flex flex-col gap-3 text-white max-w-2xl">
					<h1 className="text-5xl flex flex-col font-semibold">
						SMP NUSANTARA
						<span className="text-lg font-semibold text-[#F4BF46]">
							{" "}
							UNGGUL & BERKARAKTER
						</span>
					</h1>
					<p className="text-xl max-w-lg ">
						{" "}
						Mendidik generasi muda berakhlak mulia, berprestasi
						akademik tinggi, serta berwawasan global berlandaskan
						kearifan budaya nasional.
					</p>
				</div>
				<div className="flex flex-col pl-12 gap-3 text-white text-lg">
					<h1 className="text-3xl font-semibold">Tautan</h1>
					<ul>Home</ul>
					<ul>About Us</ul>
					<ul>Classes</ul>
					<ul>News</ul>
					<ul>Contact</ul>
				</div>
				<div className="flex flex-col gap-3 text-white text-lg">
					<h1 className="text-3xl font-semibold">
						Kontak & Jam Kerja
					</h1>
					<ul className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<MdOutlineLocationOn />
						</span>
						JL.Pendidikan Karakter No 12, Jakarta. DKi Jakarta 10110
					</ul>
					<ul className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<MdOutlineLocalPhone />
						</span>
						+62 8246 0934
					</ul>
					<ul className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<LuMail />
						</span>
						info@gmail.com
					</ul>
					<ul className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<LuClock />
						</span>
						Jam Pelayanan: Senin - Sabtu : 07.00 - 15.30
					</ul>
				</div>
			</div>
			<div className="flex w-full   justify-between py-5  border-t text-gray-200">
				<p>
					@ 2026 SMP Nusantara. Hak Cipta di Lindungi Undang - undang
				</p>
				<p>Profil Resmi Institusi Pendidikan Menengah Pertama</p>
			</div>
		</div>
	);
};

export default Footer;
