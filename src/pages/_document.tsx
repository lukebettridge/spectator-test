import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<link href="https://use.typekit.net/xkz5olp.css" rel="stylesheet" />
					{this.props.styles}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
