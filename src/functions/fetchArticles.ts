import axios from "axios";

const fetchArticles = async () => {
	const pageSize = process.env.PAGE_SIZE || 6;
	try {
		// Fetch articles from the News API, API_KEY must be defined and valid in your .env.local
		const res = await axios.get(
			`https://newsapi.org/v2/everything?domains=thetimes.co.uk&pageSize=${pageSize}`,
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
