import axios from "axios";

const fetchArticles = async () => {
	const pageSize = process.env.PAGE_SIZE || 6;
	try {
		const res = await axios.get(
			`https://newsapi.org/v2/top-headlines?q=Coronavirus&pageSize=${pageSize}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.API_KEY}`
				}
			}
		);
		if (res.data) return { props: { articles: res.data.articles } };
		throw new Error("There was a problem with fetching the articles.");
	} catch (err) {
		console.log(err);
	}
};

export default fetchArticles;
