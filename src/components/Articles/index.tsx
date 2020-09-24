import PropTypes from "prop-types";

import Article from "../Article";

import { Wrapper } from "./index.styles";

const Articles = ({ addBookmark, articles }) => (
	<Wrapper>
		{articles.map((article, index) => (
			<Article addBookmark={addBookmark} article={article} key={index} />
		))}
	</Wrapper>
);

Articles.propTypes = {
	addBookmark: PropTypes.func,
	articles: PropTypes.array
};

export default Articles;
