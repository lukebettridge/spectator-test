import GlobalStyles from "../components/GlobalStyles";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
