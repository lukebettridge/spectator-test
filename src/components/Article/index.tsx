import PropTypes from "prop-types";

import Button from "../Button";
import { Heading } from "../Typography";

import { Author, Wrapper } from "./index.styles";

const Article = ({ addBookmark, article }) => {
	const { author, title } = article;
	return (
		<Wrapper>
			<Author>{author}</Author>
			<Heading>{title}</Heading>
			<Button onClick={() => addBookmark(article)}>Add</Button>
		</Wrapper>
	);
};

Article.propTypes = {
	addBookmark: PropTypes.func,
	article: PropTypes.shape({
		author: PropTypes.string,
		title: PropTypes.string
	}),
	urlToImage: PropTypes.string
};

export default Article;
