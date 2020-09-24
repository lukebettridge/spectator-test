import styled from "styled-components";

import { Heading, Subheading } from "../Typography";

export const Author = styled(Subheading)`
	font-style: italic;
`;

export const Container = styled.div`
	border-bottom: 0.125rem solid ${(p) => p.theme.colours.border};
	display: flex;
	font-size: 7px;
	padding: 2rem 0 1.75rem;

	${Heading} {
		margin-bottom: 0;
	}
`;
