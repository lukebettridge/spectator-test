import styled from "styled-components";

export const Heading = styled.h2`
	color: ${(p) => p.theme.colours.primary.black};
	font-family: "goudy-old-style", serif;
	font-size: 3.25em;
	font-weight: 700;
	line-height: 1.08;
	margin-bottom: 3.5rem;
`;

export const Paragraph = styled.p`
	color: ${(p) => p.theme.colours.body};
	font-family: "system-ui", sans-serif;
	font-size: 1.75em;
	font-weight: 400;
	line-height: 1.43;
`;

export const Subheading = styled.h3`
	color: ${(p) => p.theme.colours.primary.red};
	display: block;
	font-family: "goudy-old-style", serif;
	font-size: 2.5em;
	font-weight: 400;
	margin-bottom: 0.75rem;
`;
