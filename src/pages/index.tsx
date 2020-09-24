import axios from "axios";
import { GetServerSideProps } from "next";

import Articles from "../components/Articles";
import Bookmarks from "../components/Bookmarks";
import { Container, Wrapper } from "../components/Layout";

const Home = ({ articles }) => {
	return (
		<Wrapper>
			<Container>
				<Articles articles={articles} />
				<Bookmarks />
			</Container>
		</Wrapper>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await axios.get(
		`https://newsapi.org/v2/top-headlines?q=Coronavirus&pageSize=6&apiKey=${process.env.API_KEY}`
	);
	const { articles } = res.data;
	return { props: { articles } };
};

export default Home;
