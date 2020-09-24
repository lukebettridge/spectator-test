import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../theme";
import GlobalStyles from "../components/GlobalStyles";
import PageHeader from "../components/PageHeader";

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<PageHeader />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default MyApp;
