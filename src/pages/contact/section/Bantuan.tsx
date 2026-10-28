import { BsQuestionCircle } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { RiShakeHandsLine } from "react-icons/ri";

const Question = [
	{
		icon: <BsQuestionCircle />,
		title: "Kapan waktu terbaik untuk berkonsultasi langsung dengan wali kelas?",
		description:
			"Sesuai dengan kalender akademik, jadwal konsultasi tatap muka reguler berlangsung setiap hari Sabtu pukul 08.00 - 11.30 WIB. Orang tua diharapkan melakukan konfirmasi awal via pesan WhatsApp agar wali kelas dapat menyiapkan catatan perkembangan peserta didik.",
	},
	{
		icon: <GrDocumentText />,
		title: "Bagaimana prosedur legalisir dokumen rapor atau ijazah alumni?",
		description:
			"Alumni atau wali murid dapat langsung datang ke Loket Tata Usaha (Gedung A, Lt. 1) pada hari kerja (Senin - Jumat) pukul 08.00 - 14.30 WIB. Harap membawa dokumen asli beserta salinan fotokopi yang akan disahkan (maksimal 5 rangkap per pengajuan gratis).",
	},
	{
		icon: <RiShakeHandsLine />,
		title: "Apakah melayani permohonan studi tiru atau kemitraan antar lembaga?",
		description:
			"Ya, SMP Nusantara menyambut baik program studi tiru kurikulum dan kemitraan edukatif. Lembaga pemohon dapat mengirimkan surat permohonan berkop resmi ke alamat email humas@smpnusantara.sch.id minimal 2 minggu kalender sebelum perkiraan tanggal kegiatan.",
	},
];

const Bantuan = () => {
	return (
		<main className="h-auto py-12 px-4 lg:p-14 flex flex-col gap-4 justify-center items-center">
			<section className="flex flex-col gap-2 items-center">
				<span className="text-sm  text-[#021B3E] font-semibold">
					BANTUAN CEPAT
				</span>
				<h1 className="text-2xl lg:text-4xl text-center font-serif  text-[#021B3E]">
					Pertanyaan Umum Seputar Layanan Kontak
				</h1>
				<p className="text-sm max-w-lg text-gray-600 text-center">
					Temukan jawaban ringkas atas pertanyaan yang sering diajukan
					orang tua dan publik kepada pihak sekolah.
				</p>
			</section>
			<section className="w-full flex flex-col items-center justify-center gap-4">
				{Question.map((q) => (
					<div className="flex items-start gap-2 p-4 bg-white rounded-xl max-w-5xl border border-gray-200">
						<div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center">
							<span>{q.icon}</span>
						</div>
						<div className="flex flex-col gap-1">
							<h1 className="text-lg lg:text-xl text-[#021B3E]">
								{q.title}
							</h1>
							<p className="text-sm text-gray-600">
								{q.description}
							</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
};

export default Bantuan;
