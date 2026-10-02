import HeroSection from "@/pages/home/section/HeroSection";
import Summary from "@/pages/home/section/Summary";
import AboutUs from "@/pages/home/section/AboutUs";
import Affirmation from "@/pages/home/section/Affirmation";
import Teacher from "@/pages/home/section/Teacher";

const HomePage = () => {
	return (
		<div className="flex justify-center">
			<div className="w-full ">
				<HeroSection />
				<Summary />
				<AboutUs />
				<Affirmation />
				<Teacher />
			</div>
		</div>
	);
};

export default HomePage;
