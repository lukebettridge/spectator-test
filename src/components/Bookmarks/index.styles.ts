import styled from "styled-components";

export const HeadContainer = styled.div`
	border-bottom: 0.125rem solid ${(p) => p.theme.colours.border};
	border-top: 0.25rem solid ${(p) => p.theme.colours.primary.red};
	padding: 3.25rem 0 2rem;
	position: relative;

	&::before,
	&::after {
		background-color: ${(p) => p.theme.colours.borderRed};
		content: "";
		height: 0.125rem;
		position: absolute;
		top: 0.5rem;
		width: 100%;
	}

	&::after {
		top: 1.125rem;
	}
`;

export const Wrapper = styled.div`
	grid-row: 1;

	@media (min-width: 60em) {
		grid-row: unset;
		margin-bottom: 0;
		padding-left: 4rem;

		> *:nth-child(n + 3) {
			font-size: 6px;
		}
	}
`;
