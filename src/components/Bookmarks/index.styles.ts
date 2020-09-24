import styled from "styled-components";

export const HeadContainer = styled.div`
	border-bottom: 0.125rem solid #ebebeb;
	border-top: 0.25rem solid #d30d1d;
	padding: 3.25rem 0 2rem;
	position: relative;

	&::before,
	&::after {
		background-color: rgba(211, 13, 29, 0.2);
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
	}
`;
