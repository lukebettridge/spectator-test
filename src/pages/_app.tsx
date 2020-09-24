import GlobalStyles from "../components/GlobalStyles";
import PageHeader from "../components/PageHeader";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyles />
			<PageHeader />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
