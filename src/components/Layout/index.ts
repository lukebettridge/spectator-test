import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-gap: 1rem;

	@media (min-width: ${(p) => p.theme.breakpoints.l}) {
		grid-gap: 0;
		grid-template-columns: 5fr 2fr;
	}
`;

export const Wrapper = styled.div`
	margin: 0 auto 4rem;
	max-width: 150rem;
	padding: 0 2.5rem;

	@media (min-width: ${(p) => p.theme.breakpoints.l}) {
		margin-top: 4rem;
		padding: 0 5rem;
	}
`;
