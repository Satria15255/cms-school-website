import Header from "./section/Header";
import History from "./section/History";
import VisiMisi from "./section/VisiMisi";
import SchoolValue from "./section/SchoolValue";
import WelcomeMessage from "./section/WelcomeMessage";
import TenagaPendidik from "./section/TenagaPendidik";
import Organization from "./section/Organization";
import Contact from "@/pages/home/section/ContactSection";

const AboutUsPage = () => {
	return (
		<div className="flex flex-col space-y-8">
			<Header />
			<History />
			<VisiMisi />
			<SchoolValue />
			<WelcomeMessage />
			<TenagaPendidik />
			<Organization />
			<Contact />
		</div>
	);
};

export default AboutUsPage;
