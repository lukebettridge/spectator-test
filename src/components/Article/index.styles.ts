import styled from "styled-components";

import { Subheading } from "../Typography";

export const Author = styled(Subheading)`
	font-style: italic;
`;

export const Wrapper = styled.div`
	border-bottom: 0.125rem solid ${(p) => p.theme.colours.border};
	padding: 1.875rem 0;

	&:last-child {
		border: none;
	}

	@media (min-width: 60em) {
		border-bottom: 0.125rem solid ${(p) => p.theme.colours.border};

		&:nth-last-child(1),
		&:nth-last-child(2),
		&:nth-last-child(3) {
			border-bottom: none;
		}
	}
`;
