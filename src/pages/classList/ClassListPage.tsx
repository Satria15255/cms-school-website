import Header from "./section/Header";
import ClassSection from "./section/ClassSection";
import StandarPembinaan from "./section/StandardPembinaan";
import Contact from "@/pages/home/section/ContactSection";

const ClassList = () => {
	return (
		<main>
			<Header />
			<ClassSection />
			<StandarPembinaan />
			<Contact />
		</main>
	);
};

export default ClassList;
