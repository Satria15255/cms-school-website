import { MdOutlineLocationOn, MdOutlineLocalPhone } from "react-icons/md";
import { LuClock, LuMail } from "react-icons/lu";
import { PiListBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<main className="z-50 fixed top-0 w-full border-b border-gray-200">
			<div className="bg-[#021B3E] hidden md:flex justify-between text-xs lg:text-sm items-center px-6 text-white py-1 ">
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
					<h1
						onClick={() => navigate("/")}
						className="text-[#021B3E] text-xs lg:text-2xl font-bold"
					>
						SMPN 2 Tambakrejo
					</h1>
				</div>
				<div className="hidden md:flex text-sm lg:text-xl space-x-4">
					<ul
						className="hover:text-[#F4BF46] transition duration-200 cursor-pointer"
						onClick={() => navigate("/")}
					>
						Home
					</ul>
					<ul
						className="hover:text-[#F4BF46] transition duration-200 cursor-pointer"
						onClick={() => navigate("/about-us")}
					>
						About Us
					</ul>
					<ul
						className="hover:text-[#F4BF46] transition duration-200 cursor-pointer"
						onClick={() => navigate("/class-list")}
					>
						Classes
					</ul>
					<ul
						className="hover:text-[#F4BF46] transition duration-200 cursor-pointer"
						onClick={() => navigate("/news")}
					>
						News
					</ul>
					<ul
						className="hover:text-[#F4BF46] transition duration-200 cursor-pointer"
						onClick={() => navigate("/contact")}
					>
						Contact
					</ul>
				</div>
				<div className="hidden md:block">
					<button className="px-5 py-3 bg-[#F4BF46] text-sm lg:text-xl rounded-lg text-black">
						Hubungi Sekolah
					</button>
				</div>
				<div className="md:hidden">
					<button>
						<PiListBold />
					</button>
				</div>
			</div>
		</main>
	);
};

export default Navbar;
