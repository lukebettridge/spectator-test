import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-gap: 1rem;

	@media (min-width: 60em) {
		grid-gap: 0;
		grid-template-columns: 2fr 1fr;
	}
`;

export const Wrapper = styled.div`
	margin: 0 auto 4rem;
	max-width: 160rem;
	padding: 0 2.5rem;

	@media (min-width: 60em) {
		margin-top: 4rem;
		padding: 0.5rem;
	}
`;
