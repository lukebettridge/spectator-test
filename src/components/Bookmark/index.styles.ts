import styled from "styled-components";

import { Heading, Subheading } from "../Typography";

export const Author = styled(Subheading)`
	font-style: italic;
`;

export const Container = styled.div`
	display: flex;
	flex-shrink: 0;
	font-size: 6px;
	padding: 2rem 1.875rem 1.75rem;
	position: relative;
	width: 35rem;

	${Heading} {
		margin-bottom: 0;
	}

	&:not(:last-child)::after {
		background-color: ${(p) => p.theme.colors.border};
		content: "";
		height: 8.5rem;
		position: absolute;
		right: 0;
		top: 2rem;
		width: 0.125rem;
	}

	@media (min-width: 60em) {
		border-bottom: 0.125rem solid ${(p) => p.theme.colors.border};
		font-size: 7px;
		padding: 2rem 0 1.75rem;
		width: auto;

		&:nth-child(n + 3) {
			font-size: 6px;
		}

		&:not(:last-child)::after {
			content: none;
		}
	}
`;
