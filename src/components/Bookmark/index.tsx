import PropTypes from "prop-types";

import Button from "../Button";
import { Heading } from "../Typography";

import { Author, Container, ContentWrapper } from "./index.styles";

const Bookmark = ({ article, removeBookmark }) => {
	const { author, title } = article;
	return (
		<Container>
			<ContentWrapper>
				<Author>{author}</Author>
				<Heading>{title}</Heading>
			</ContentWrapper>
			<div>
				<Button circle onClick={() => removeBookmark(article)}>
					<svg width="0.75em" height="0.75em" viewBox="0 0 24 24">
						<path d="M.22.219a.75.75 0 011.06 0L12 10.938 22.72.218a.75.75 0 01.976-.072l.084.073a.75.75 0 010 1.06L13.061 12l10.72 10.72a.75.75 0 01.072.976l-.073.084a.75.75 0 01-1.06 0L12 13.06 1.28 23.78a.75.75 0 01-.976.072l-.084-.073a.75.75 0 010-1.06l10.719-10.72L.219 1.279A.75.75 0 01.148.303z" />
					</svg>
				</Button>
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
