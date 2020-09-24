import axios from "axios";
import { GetServerSideProps } from "next";

import Article from "../components/Article";

const Home = ({ articles }) => {
	return (
		<>
			{articles.map(({ author, title, urlToImage }, index) => (
				<Article author={author} title={title} key={index} />
			))}
		</>
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
