const TenagaPendidik = () => {
	return (
		<main className="flex flex-col px-14 py-12 space-y-4">
			<section className="flex">
				<div className="w-3/5 space-y-4">
					<span className="text-lg text-[#B8890B]">
						DEDIKASI & KETELADANAN
					</span>
					<h1 className="text-5xl font-serif text-[#021B3E]">
						Tenaga Pendidik & Tenaga Kependidikan
					</h1>
					<p className="text-lg">
						Pendidik berkualifikasi profesional dan staf berkomitmen
						tinggi yang siap mendampingi tumbuh kembang serta
						memaksimalkan potensi siswa.
					</p>
				</div>
				<div className="w-2/5 flex items-end justify-end">
					<div className="flex bg-[#EBF1FF] p-2 w-1/2 rounded-lg">
						<button className="bg-[#021B3E] text-white w-1/2 py-2 rounded-lg">
							Guru Mata Pelajaran
						</button>
						<button className=" w-1/2">Tenaga Kependidikan</button>
					</div>
				</div>
			</section>
			<section></section>
			<section></section>
		</main>
	);
};

export default TenagaPendidik;
