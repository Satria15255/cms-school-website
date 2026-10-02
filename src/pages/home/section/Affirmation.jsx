import { BiRightIndent } from "react-icons/bi";

const Affirmation = () => {
	return (
		<div className="h-screen bg-[#EBF1FF] px-8 flex justify-center items-center">
			<div className="flex w-4/5 h-3/5 justify-center items-center bg-white rounded-3xl">
				<div className="w-2/5 flex justify-center items-center relative">
					<img
						src="/kepsek.png"
						alt="kepsek"
						className="w-3/5 rounded-xl"
					/>
				</div>
				<div className="w-3/5 h-full flex flex-col justify-around py-8">
					<span className="text-7xl">“</span>
					<p className="text-4xl font-serif italic">
						Pendidikan di jenjang SMP adalah masa krusial transisi
						remaja. Kami hadir bukan hanya mencetak siswa
						berprestasi akademis, melainkan melahirkan pribadi yang
						bertakwa, santun, dan siap menghadapi tantangan zaman.
					</p>
					<div>
						<p className="text-xl text-[#021B3E] font-semibold">
							Dra. Hj. Sri Rahayu, M.Pd.
						</p>
						<p>Kepala Sekolah SMPN 2 x</p>
					</div>
					<div>
						<button className="px-6 py-3 text-lg bg-[#EDF0FF] rounded-xl  flex gap-1 items-center">
							Lihat Profil Lengkap <BiRightIndent />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Affirmation;
