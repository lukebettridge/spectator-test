import { ReactNode } from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./index.styles";

const Button = (props: {
	children: ReactNode;
	disabled: boolean;
	onClick: () => any;
}) => {
	return (
		<StyledButton disabled={props.disabled} onClick={props.onClick}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
