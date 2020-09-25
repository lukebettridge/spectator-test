import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../theme";
import GlobalStyles from "../components/GlobalStyles";
import PageHeader from "../components/PageHeader";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>The Spectator</title>
				<meta name="description" content="Spectator coding assignment." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<PageHeader />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default MyApp;
