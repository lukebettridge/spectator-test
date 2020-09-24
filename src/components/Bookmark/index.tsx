import PropTypes from "prop-types";

import Button from "../Button";
import { Heading } from "../Typography";

import { Author, Container } from "./index.styles";

const Bookmark = ({ article, removeBookmark }) => {
	const { author, title } = article;
	return (
		<Container>
			<div>
				<Author>{author}</Author>
				<Heading>{title}</Heading>
			</div>
			<div>
				<Button onClick={() => removeBookmark(article)}>x</Button>
			</div>
		</Container>
	);
};

Bookmark.propTypes = {
	article: PropTypes.shape({
		author: PropTypes.string,
		title: PropTypes.string
	}),
	removeBookmark: PropTypes.func
};

export default Bookmark;
