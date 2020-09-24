import { ReactNode } from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.styles";

const Button = (props: { children: ReactNode; onClick: () => any }) => {
	return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

Button.propTypes = {
	children: PropTypes.node
};

export default Button;
