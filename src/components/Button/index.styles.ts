import styled, { css } from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(p) => p.theme.colors.buttonBg};
	border: 0.125rem solid ${(p) => p.theme.colors.primary.red};
	border-radius: 2.5rem;
	box-shadow: 0.5rem 0.5rem 0 0 ${(p) => p.theme.colors.buttonBg},
		inset 0.5rem 0.5rem 0 0 ${(p) => p.theme.colors.primary.white};
	color: ${(p) => p.theme.colors.primary.red};
	font-family: "josefin-sans", sans-serif;
	font-size: 1.5rem;
	font-weight: 600;
	padding: 0.375rem 5rem;
	text-transform: uppercase;

	&:hover {
		background-color: ${(p) => p.theme.colors.buttonHoverBg};
		box-shadow: 0.5rem 0.5rem 0 0 ${(p) => p.theme.colors.buttonHoverBg},
			inset 0.5rem 0.5rem 0 0 ${(p) => p.theme.colors.primary.white};
		cursor: pointer;
	}

	&:focus {
		box-shadow: 0.5rem 0.5rem 0 0 ${(p) => p.theme.colors.buttonHoverBg},
			inset 0.5rem 0.5rem 0 0 ${(p) => p.theme.colors.primary.white},
			0 0 0 0.125rem ${(p) => p.theme.colors.primary.red};
		outline: none;
	}

	${(p) =>
		p.disabled &&
		css`
			background-color: ${(p) => p.theme.colors.buttonDisabledBg};
			border-color: ${(p) => p.theme.colors.buttonDisabledBorder};
			box-shadow: none;
			color: ${(p) => p.theme.colors.buttonDisabledColor};

			&:hover {
				background-color: ${(p) => p.theme.colors.buttonDisabledBg};
				box-shadow: none;
				cursor: not-allowed;
			}
		`}
`;
