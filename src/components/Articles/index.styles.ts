import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-gap: 0.5rem 4rem;

	@media (min-width: ${(p) => p.theme.breakpoints.m}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${(p) => p.theme.breakpoints.l}) {
		border-right: 0.125rem solid ${(p) => p.theme.colors.border};
		grid-template-columns: repeat(3, 1fr);
		padding-right: 4rem;
	}
`;
