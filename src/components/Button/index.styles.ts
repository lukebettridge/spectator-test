import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(p) => p.theme.colours.buttonBg};
	border: 0.125rem solid ${(p) => p.theme.colours.primary.red};
	border-radius: 2.5rem;
	box-shadow: 0.5rem 0.5rem 0 0 ${(p) => p.theme.colours.buttonBg},
		inset 0.5rem 0.5rem 0 0 ${(p) => p.theme.colours.primary.white};
	color: ${(p) => p.theme.colours.primary.red};
	font-family: "josefin-sans", sans-serif;
	font-size: 1.5rem;
	font-weight: 600;
	padding: 0.375rem 5rem 0.375rem 4.25rem;
	text-transform: uppercase;

	&:hover {
		background-color: ${(p) => p.theme.colours.buttonHoverBg};
		box-shadow: 0.5rem 0.5rem 0 0 ${(p) => p.theme.colours.buttonHoverBg},
			inset 0.5rem 0.5rem 0 0 ${(p) => p.theme.colours.primary.white};
		cursor: pointer;
	}

	&:focus {
		box-shadow: 0.5rem 0.5rem 0 0 ${(p) => p.theme.colours.buttonHoverBg},
			inset 0.5rem 0.5rem 0 0 ${(p) => p.theme.colours.primary.white},
			0 0 0 0.125rem ${(p) => p.theme.colours.primary.red};
		outline: none;
	}
`;
