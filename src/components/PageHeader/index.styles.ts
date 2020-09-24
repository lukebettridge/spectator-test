import styled from "styled-components";

export const Wrapper = styled.div`
	border-bottom: 0.125rem solid ${(p) => p.theme.colours.border};
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 7rem 0;
	width: 100%;

	svg {
		fill: #d2091e;
		height: 7rem;
	}
`;
