import React from "react";
import { Button } from "antd";
import { ButtonProps } from "../../types/Button";

const AntdButton: React.FC<ButtonProps> = ({
	btnType = "primary",
	danger,
	className,
	onClick,
	children,
	title,
	loading,
}) => {
	return (
		<Button
			type={btnType}
			danger={danger}
			className={`bg-primary ${className}`}
			onClick={onClick}
			loading={loading}
		>
			{title}
		</Button>
	);
};
