import { Subheading, Paragraph } from "../Typography";

import { HeadContainer, Wrapper } from "./index.styles";

const Bookmarks = () => (
	<Wrapper>
		<HeadContainer>
			<Subheading>Your bookmarks</Subheading>
			<Paragraph>Articles you bookmark will be added to this list</Paragraph>
		</HeadContainer>
	</Wrapper>
);

export default Bookmarks;
