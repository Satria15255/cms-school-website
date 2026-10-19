import Header from "./section/Header";
import History from "./section/History";
import VisiMisi from "./section/VisiMisi";
import SchoolValue from "./section/SchoolValue";
import WelcomeMessage from "./section/WelcomeMessage";
import TenagaPendidik from "./section/TenagaPendidik";

const AboutUsPage = () => {
	return (
		<div>
			<Header />
			<History />
			<VisiMisi />
			<SchoolValue />
			<WelcomeMessage />
			<TenagaPendidik />
		</div>
	);
};

export default AboutUsPage;
