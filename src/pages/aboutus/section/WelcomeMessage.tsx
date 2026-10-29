const Affirmation = () => {
	return (
		<div className="h-auto  bg-[#EBF1FF] px-5 py-12 lg:px-8 flex justify-center items-center">
			<div className="flex flex-col lg:flex-row lg:w-4/5 p-5 h-auto lg:h-3/5 py-12 justify-center space-y-7 items-center bg-white rounded-2xl">
				<div className="w-full lg:w-2/5 flex flex-col gap-3 lg:justify-center items-center relative">
					<img
						src="/kepsek.png"
						alt="kepsek"
						className="w-1/2  h-full rounded-full  "
					/>
					<div className="text-center">
						<p className="text-2xl text-[#021B3E] font-semibold">
							Dra. Hj. Sri Rahayu, M.Pd.
						</p>
						<p className="text-sm lg:text-lg text-[#B8890B]">
							Kepala Sekolah SMPN 2 Tambakrejo
						</p>
						<span className="text-sm lg:text-lg bg-[#EBF1FF] px-5 rounded-full">
							Magister Manajemen Pendidikan
						</span>
					</div>
				</div>
				<div className="lg:w-3/5 h-full flex flex-col justify-around pt-2 gap-2 md:gap-4 lg:py-8">
					<span className="text-lg text-[#B8890B]">
						SAMBUTAN PIMPINAN SEKOLAH
					</span>
					<h1 className="text-3xl lg:text-5xl font-serif text-[#021B3E]">
						Mendampingi Fase Emas Remaja Menuju Pribadi Tangguh &
						Berbudi
					</h1>
					<p className="text-lg   font-serif italic">
						“Masa SMP merupakan jembatan paling transformatif dalam
						kehidupan seorang anak. Di sinilah mereka mulai
						merumuskan jati diri, mengeksplorasi minat intelektual,
						dan menyerap nilai-nilai moral yang akan memandu
						keputusan dewasa mereka.
					</p>
					<p className="text-lg    font-serif italic">
						Di SMP Nusantara, kami tidak semata mengejar angka
						capaian ujian, melainkan menyemai rasa percaya diri yang
						beretika, kemampuan berpikir analitis, serta kepekaan
						sosial. Guru-guru kami hadir bukan sekadar pengajar di
						depan kelas, melainkan mentor yang senantiasa menuntun
						dengan kehangatan dan keteladanan.”
					</p>
					<p className="text-sm lg:text-lg">
						SALAM HANGAT & DEDIKASI, <br />
						<span className="text-3xl italic text-[#021B3E]">
							- Sri Rahayu
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Affirmation;
