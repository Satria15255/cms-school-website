import { FaUsers } from "react-icons/fa";

const Participant = ({ data }) => {
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
						<p>{c}</p>
					</div>
				))}
			</section>
			<section className="bg-blue-100 rounded-xl p-3">
				<p className="text-sm text-gray-500">Guru Pembimbing </p>
				<ol type="1">
					{data.participants.teachers.map((t) => (
						<li classes="text-sm">{t}</li>
					))}
				</ol>
			</section>
		</main>
	);
};

export default Participant;
