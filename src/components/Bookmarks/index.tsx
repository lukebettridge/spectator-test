import PropTypes from "prop-types";

import Bookmark from "../Bookmark";
import { Subheading, Paragraph } from "../Typography";

import {
	Container,
	FlexContainer,
	HeadContainer,
	Wrapper
} from "./index.styles";

const Bookmarks = ({ bookmarks, removeBookmark }) => (
	<Wrapper>
		<Container>
			<FlexContainer>
				<HeadContainer>
					<Subheading>
						Your <br />
						bookmarks
					</Subheading>
					<Paragraph>
						Articles you bookmark will be added to this list
					</Paragraph>
				</HeadContainer>
				{bookmarks.map((article, index) => (
					<Bookmark
						article={article}
						key={index}
						removeBookmark={removeBookmark}
					/>
				))}
			</FlexContainer>
		</Container>
	</Wrapper>
);

Bookmarks.propTypes = {
	bookmarks: PropTypes.array,
	removeBookmark: PropTypes.func
};

export default Bookmarks;
