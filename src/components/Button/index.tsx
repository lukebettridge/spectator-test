import { ReactNode } from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.styles";

const Button = (props: {
	children: ReactNode;
	circle?: boolean;
	disabled?: boolean;
	onClick: () => any;
}) => {
	return (
		<StyledButton
			circle={props.circle}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.children}
		</StyledButton>
	);
};

Button.propTypes = {
	children: PropTypes.node,
	circle: PropTypes.bool,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

export default Button;
