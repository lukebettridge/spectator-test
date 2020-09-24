import { ReactNode } from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.styles";

const Button = (props: { children: ReactNode }) => {
	return <StyledButton>{props.children}</StyledButton>;
};

Button.propTypes = {
	children: PropTypes.node
};

export default Button;
