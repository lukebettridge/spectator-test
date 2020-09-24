import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	grid-gap: 0.5rem 4rem;

	@media (min-width: 60em) {
		border-right: 0.125rem solid #ebebeb;
		grid-template-columns: repeat(3, 1fr);
		padding-right: 4rem;
	}
`;
