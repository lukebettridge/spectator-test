import PropTypes from "prop-types";

import Article from "../Article";

import { Wrapper } from "./index.styles";

const Articles = ({ addBookmark, articles, isBookmarked }) => (
	<Wrapper>
		{articles.map((article, index) => (
			<Article
				addBookmark={addBookmark}
				article={article}
				isBookmarked={isBookmarked(article)}
				key={index}
			/>
		))}
	</Wrapper>
);

Articles.propTypes = {
	addBookmark: PropTypes.func.isRequired,
	articles: PropTypes.array.isRequired,
	isBookmarked: PropTypes.func.isRequired
};

export default Articles;
