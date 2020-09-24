import { useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

import { addBookmark, isBookmarked, removeBookmark } from "../functions";
import { Article } from "../common/types";
import Articles from "../components/Articles";
import Bookmarks from "../components/Bookmarks";
import { Container, Wrapper } from "../components/Layout";

const Home = (props: { articles: Article[] }) => {
	const [bookmarks, setBookmarks] = useState<Article[]>([]);

	return (
		<Wrapper>
			<Container>
				<Articles
					addBookmark={addBookmark(bookmarks, setBookmarks)}
					articles={props.articles}
					isBookmarked={isBookmarked(bookmarks)}
				/>
				<Bookmarks
					bookmarks={bookmarks}
					removeBookmark={removeBookmark(bookmarks, setBookmarks)}
				/>
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
