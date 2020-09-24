import PropTypes from "prop-types";

import Button from "../Button";
import { Author, Headline } from "../Typography";

import { Wrapper } from "./index.styles";

const Article = ({ author, title }) => (
	<Wrapper>
		<Author>{author}</Author>
		<Headline>{title}</Headline>
		<Button>Add</Button>
	</Wrapper>
);

Article.propTypes = {
	author: PropTypes.string,
	title: PropTypes.string,
	urlToImage: PropTypes.string
};

export default Article;
