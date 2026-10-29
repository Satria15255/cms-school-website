import { BiRightIndent } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Affirmation = () => {
	const navigate = useNavigate();

	return (
		<div className="h-auto lg:h-screen bg-[#EBF1FF] px-5 py-12 lg:px-8 flex justify-center items-center">
			<div className="flex flex-col lg:flex-row lg:w-4/5 p-5 h-auto lg:h-3/5 justify-center items-center bg-white rounded-3xl">
				<div className="w-full lg:w-2/5 flex gap-3 lg:justify-center items-center relative">
					<img
						src="/kepsek.png"
						alt="kepsek"
						className="w-15  h-15 lg:w-3/5 lg:h-full rounded-full lg:rounded-xl"
					/>
					<div className="lg:hidden">
						<p className="text-xl text-[#021B3E] font-semibold">
							Dra. Hj. Sri Rahayu, M.Pd.
						</p>
						<p className="text-xs">
							Kepala Sekolah SMPN 2 Tambakrejo
						</p>
					</div>
				</div>
				<div className="lg:w-3/5 h-full flex flex-col justify-around pt-2 gap-2 md:gap-4 lg:py-8">
					<span className="hidden lg:block text-7xl">“</span>
					<p className="text-lg lg:text-4xl font-serif italic">
						"Pendidikan di jenjang SMP adalah masa krusial transisi
						remaja. Kami hadir bukan hanya mencetak siswa
						berprestasi akademis, melainkan melahirkan pribadi yang
						bertakwa, santun, dan siap menghadapi tantangan zaman."
					</p>
					<div className="hidden lg:block">
						<p className="text-xl text-[#021B3E] font-semibold">
							Dra. Hj. Sri Rahayu, M.Pd.
						</p>
						<p>Kepala Sekolah SMPN 2 x</p>
					</div>
					<div>
						<button
							onClick={() => navigate("/about-us")}
							className="px-6 py-3 text-sm lg:text-lg bg-[#EDF0FF] rounded-xl  flex gap-1 items-center"
						>
							Lihat Profil Lengkap <BiRightIndent />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Affirmation;
