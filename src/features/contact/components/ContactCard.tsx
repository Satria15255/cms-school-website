const ContactCard = ({ data }) => {
	return (
		<main className="min-h-100 flex flex-col py-6 justify-between w-full shadow-2xl bg-white rounded-2xl p-5  ">
			<div className="flex items-center justify-between">
				<span className="p-3 rounded-xl bg-blue-100 text-2xl">
					{data.icon}{" "}
				</span>
				<span className="bg-blue-100 px-4 py-2 rounded-xl text-sm">
					{" "}
					{data.label}
				</span>
			</div>
			<div>
				<h1 className="text-3xl text-[#021B3E] font-bold">
					{" "}
					{data.title}
				</h1>
				<p className="text-lg text-gray-700"> {data.description}</p>
			</div>
			<div className="p-4 bg-blue-100 rounded-xl">
				<p className="text-2xl text-[#021B3E]">{data.contact} </p>
				<p className="text-sm text-gray-600">{data.contactDesc}</p>
			</div>
			<div className="w-full">
				<button className="w-full p-3 text-lg flex gap-3 items-center justify-center bg-[#021B3E] rounded-xl text-white">
					{" "}
					{data.cta.ctaIcon} {data.cta.text}
				</button>
			</div>
		</main>
	);
};

export default ContactCard;
