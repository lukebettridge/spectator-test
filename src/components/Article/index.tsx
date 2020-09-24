import PropTypes from "prop-types";

import Button from "../Button";
import { Heading } from "../Typography";

import { Author, Wrapper } from "./index.styles";

const Article = ({ author, title }) => (
	<Wrapper>
		<Author>{author}</Author>
		<Heading>{title}</Heading>
		<Button>Add</Button>
	</Wrapper>
);

Article.propTypes = {
	author: PropTypes.string,
	title: PropTypes.string,
	urlToImage: PropTypes.string
};

export default Article;
