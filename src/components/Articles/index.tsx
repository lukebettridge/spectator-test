import PropTypes from "prop-types";

import Article from "../Article";

import { Wrapper } from "./index.styles";

const Articles = ({ articles }) => (
	<Wrapper>
		{articles.map(({ author, title, urlToImage }, index) => (
			<Article author={author} title={title} key={index} />
		))}
	</Wrapper>
);

Articles.propTypes = {
	articles: PropTypes.array
};

export default Articles;
