import { ClassDetails } from "@/datas/ClassList";
import ClassContainer from "@/features/class/components/ClassContainer";

const ClassSection = () => {
	return (
		<main className="p-12 flex flex-col gap-4 w-full min-h-screen justify-center">
			{ClassDetails.map((c) => (
				<div key={c._id} className="w-full">
					<ClassContainer classList={c} />
				</div>
			))}
		</main>
	);
};

export default ClassSection;
