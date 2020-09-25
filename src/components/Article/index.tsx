import PropTypes from "prop-types";

import Button from "../Button";
import { Heading } from "../Typography";

import { Author, Container, Image, Wrapper } from "./index.styles";

const Article = ({ addBookmark, article, isBookmarked }) => {
	const { author, title, urlToImage } = article;
	return (
		<Wrapper role="article">
			<Container>
				<Author>{author}</Author>
				<Heading>{title}</Heading>
				<Button disabled={isBookmarked} onClick={() => addBookmark(article)}>
					{isBookmarked ? (
						<>
							Added
							<svg width="0.75em" height="0.75em" viewBox="0 0 24 24">
								<path d="M24 4.685L7.673 22 0 12.946l.761-.648 6.95 8.203L23.272 4l.728.685z" />
							</svg>
						</>
					) : (
						<>
							Add
							<svg width="0.75em" height="0.75em" viewBox="0 0 24 24">
								<path d="M7.435 7.107L10.59.863a1.584 1.584 0 012.822.005l3.153 6.242 6.009.596a1.574 1.574 0 011.42 1.718 1.557 1.557 0 01-.46.96l-4.979 4.93L20.4 22.01a1.572 1.572 0 01-1.113 1.931c-.371.1-.767.061-1.116-.11L12 20.776l-6.174 3.06a1.584 1.584 0 01-2.114-.705 1.572 1.572 0 01-.11-1.119l1.843-6.698-4.98-4.933a1.565 1.565 0 010-2.227c.258-.256.599-.416.96-.451l6.01-.596zm4.609-5.549a.048.048 0 00-.02-.02c-.027-.013-.058-.003-.068.017L8.613 8.173a.766.766 0 01-.608.417l-6.43.637a.056.056 0 00-.032.015c-.015.015-.015.035 0 .05l5.299 5.249c.196.195.273.48.2.747l-1.963 7.129a.038.038 0 00.002.027c.01.02.042.031.066.02l6.512-3.23a.766.766 0 01.68 0l6.51 3.224a.058.058 0 00.04.005c.026-.007.038-.029.033-.047l-1.964-7.127a.766.766 0 01.2-.748l5.301-5.249a.028.028 0 00.009-.018c.002-.02-.015-.04-.044-.043l-6.43-.638a.766.766 0 01-.608-.417l-3.342-6.618z" />
							</svg>
						</>
					)}
				</Button>
			</Container>
			<Image alt={title} src={urlToImage} />
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
