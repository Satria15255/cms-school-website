import { MdOutlineLocationOn, MdOutlineLocalPhone } from "react-icons/md";
import { LuClock, LuMail } from "react-icons/lu";

const Navbar = () => {
	return (
		<main className="z-50 fixed top-0 w-full border-b border-gray-200">
			<div className="bg-[#021B3E] flex justify-between items-center px-6 text-white py-1 ">
				<div className="flex gap-4">
					<p className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<MdOutlineLocationOn />
						</span>
						JL.Pendidikan Karakter No 12, Jakarta
					</p>
					<p className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<MdOutlineLocalPhone />
						</span>
						+62 8246 0934
					</p>
				</div>
				<div className="flex gap-4">
					<p className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<LuMail />
						</span>
						info@gmail.com
					</p>
					<p className="flex gap-1 items-center">
						<span className="text-[#F4BF46]">
							<LuClock />
						</span>
						Sen - Jum : 07.00 - 15.30
					</p>
				</div>
			</div>
			<div className="flex justify-between items-center px-6 py-4 bg-white">
				<div>
					<h1 className="text-[#021B3E] text-2xl font-bold">
						SMPN 2 Tambakrejo
					</h1>
				</div>
				<div className="flex space-x-4">
					<ul>Home</ul>
					<ul>About Us</ul>
					<ul>Classes</ul>
					<ul>News</ul>

					<ul>Contact</ul>
				</div>
				<div>
					<button className="px-3 py-2 bg-[#F4BF46] text-black">
						Hubungi Sekolah
					</button>
				</div>
			</div>
		</main>
	);
};

export default Navbar;
