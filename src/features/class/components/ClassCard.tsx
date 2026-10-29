import { FaUsers } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { PiCityDuotone } from "react-icons/pi";
import type { SubClassItem } from "@/datas/types/class";

const ClassCard = ({ details }: { details: SubClassItem }) => {
	return (
		<main className="w-full  flex flex flex-col justify-around gap-5 h-70 md:h-90 rounded-lg p-4 md:p-8 border-[#F4BF46] border-t-8 shadow-lg">
			<div className="w-full  flex items-center justify-between">
				<h1 className="text-3xl  text-[#021B3E] font-serif">
					Kelas {details.kelas}{" "}
				</h1>
				<span className="text-sm  py-1 px-2 bg-[#EBF1FF] rounded-xl">
					{details.classType}
				</span>
			</div>
			<div className="space-y-2">
				<div className="flex gap-2">
					<span className="text-xl  text-[#B8890B]">
						<HiOutlineIdentification />
					</span>
					<div className="flex flex-col ">
						<p className="text-sm text-gray-600">Wali Kelas</p>
						<p className="text-lg  text-">{details.walikel}</p>
					</div>
				</div>
				<div className="flex gap-2">
					<span className="text-xl ">
						<PiCityDuotone />
					</span>
					<div className="flex flex-col ">
						<p className="text-sm text-gray-600">Ruang Kelas</p>
						<p className="text-lg  text-">{details.classRoom}</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between  w-full  md:pt-7">
				<div className="flex items-center gap-2">
					<div className="text-[#021B3E] ">
						<FaUsers />
					</div>
					<p>{details.member} Siswa</p>
				</div>
				<span className="text-sm  py-1 px-2 bg-green-200  flex items-center gap-2 rounded-xl">
					<span className="w-2 h-2 bg-green-500 flex items-center justify-center rounded-full"></span>

					{details.classStatus}
				</span>
			</div>
		</main>
	);
};

export default ClassCard;
