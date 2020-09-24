import styled from "styled-components";

export const Container = styled.div`
	border-top: 0.25rem solid ${(p) => p.theme.colors.primary.red};
	margin-left: 2.5rem;
	padding-top: 1.25rem;
	position: relative;
	width: 100%;

	&::before,
	&::after {
		background-color: ${(p) => p.theme.colors.borderRed};
		content: "";
		height: 0.125rem;
		position: absolute;
		top: 0.5rem;
		width: 100%;
	}

	&::after {
		top: 1.125rem;
	}

	@media (min-width: 60em) {
		margin-left: 0;
		padding-top: 0;
	}
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	margin-left: -2.5rem;
	min-height: 18rem;
	overflow-x: scroll;

	@media (min-width: 60em) {
		flex-direction: column;
		margin-left: 0;
		min-height: unset;
		overflow-x: visible;
	}
`;

export const HeadContainer = styled.div`
	flex-shrink: 0;
	padding: 2rem 1.625rem 2rem 2.5rem;
	position: relative;
	width: 20rem;

	&::after {
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
		padding: 3.25rem 0 2rem;
		width: 100%;

		br {
			display: none;
		}

		&::after {
			content: none;
		}
	}
`;

export const Wrapper = styled.div`
	border-bottom: 0.125rem solid ${(p) => p.theme.colors.border};
	grid-row: 1;
	margin-left: -2.5rem;
	margin-right: -2.5rem;
	overflow: hidden;

	@media (min-width: 60em) {
		border-bottom: none;
		grid-row: unset;
		margin-left: 0;
		margin-right: 0;
		overflow: visible;
		padding-left: 4rem;
	}
`;
