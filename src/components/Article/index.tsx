import PropTypes from "prop-types";

import Button from "../Button";
import { Heading } from "../Typography";

import { Author, Container, Image, Wrapper } from "./index.styles";

const Article = ({ addBookmark, article, isBookmarked }) => {
	const { author, title, urlToImage } = article;
	return (
		<Wrapper>
			<Container>
				<Author>{author}</Author>
				<Heading>{title}</Heading>
				<Button disabled={isBookmarked} onClick={() => addBookmark(article)}>
					{isBookmarked ? "Added" : "Add"}
				</Button>
			</Container>
			<Image src={urlToImage} />
		</Wrapper>
	);
};

Article.propTypes = {
	addBookmark: PropTypes.func,
	article: PropTypes.shape({
		author: PropTypes.string,
		title: PropTypes.string,
		urlToImage: PropTypes.string
	}),
	isBookmarked: PropTypes.bool
};

export default Article;
