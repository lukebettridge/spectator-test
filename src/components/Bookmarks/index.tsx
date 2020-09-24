import PropTypes from "prop-types";

import Bookmark from "../Bookmark";
import { Subheading, Paragraph } from "../Typography";

import { HeadContainer, Wrapper } from "./index.styles";

const Bookmarks = ({ bookmarks, removeBookmark }) => (
	<Wrapper>
		<HeadContainer>
			<Subheading>Your bookmarks</Subheading>
			<Paragraph>Articles you bookmark will be added to this list</Paragraph>
		</HeadContainer>
		{bookmarks.map((article, index) => (
			<Bookmark article={article} key={index} removeBookmark={removeBookmark} />
		))}
	</Wrapper>
);

Bookmarks.propTypes = {
	bookmarks: PropTypes.array,
	removeBookmark: PropTypes.func
};

export default Bookmarks;
