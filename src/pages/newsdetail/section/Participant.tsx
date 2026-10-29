import { FaUsers } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import type { NewsItem } from "@/datas/types/news";

const Participant = ({ data }: { data: NewsItem }) => {
	return (
		<main className="w-full p-5 rounded-xl border border-gray-300 p-5 flex flex-col gap-4">
			<div>
				<h1 className="text-xl text-[#021B3E] font-serif">
					Peserta Kegiatan
				</h1>
			</div>
			<section className="flex flex-col gap-4">
				{data.participants.classes.map((c) => (
					<div className="flex items-center gap-2">
						<span className="text-3xl rounded-full p-3 bg-[#021B3E] text-white">
							<FaUsers />
						</span>
						<div className="flex flex-col">
							<p className="text-lg ">{c}</p>
							<p className="text-xs text-gray-500">
								Semua Murid {c}
							</p>
						</div>
					</div>
				))}
			</section>
			<section className="bg-blue-100 flex gap-2 rounded-xl p-3">
				<FaChalkboardTeacher size={20} />
				<div className="flex flex-col gap-2">
					<p className="text-sm text-gray-500">Guru Pembimbing </p>
					<ol type="1">
						{data.participants.teachers.map((t) => (
							<li className="text-sm">{t}</li>
						))}
					</ol>
				</div>
			</section>
		</main>
	);
};

export default Participant;
