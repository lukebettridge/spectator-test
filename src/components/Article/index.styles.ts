import styled from "styled-components";

import { Subheading } from "../Typography";

export const Author = styled(Subheading)`
	font-style: italic;
`;

export const Container = styled.div`
	@media (min-width: ${(p) => p.theme.breakpoints.m}) {
		margin-bottom: 4.25rem;
	}
`;

export const Image = styled.img`
	height: 18.75rem;
	margin-top: 4rem;
	object-fit: cover;
	width: 100%;

	@media (min-width: ${(p) => p.theme.breakpoints.m}) {
		margin-top: auto;
	}
`;

export const Wrapper = styled.div`
	border-bottom: 0.125rem solid ${(p) => p.theme.colors.border};
	display: flex;
	flex-direction: column;
	padding: 1.875rem 0;

	&:last-child {
		border: none;
	}

	@media (min-width: ${(p) => p.theme.breakpoints.l}) {
		border-bottom: 0.125rem solid ${(p) => p.theme.colors.border};

		&:nth-last-child(1),
		&:nth-last-child(2),
		&:nth-last-child(3) {
			border-bottom: none;
		}
	}
`;
