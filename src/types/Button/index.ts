export interface ButtonProps {
	btnType?: "primary" | "link" | "text" | "default" | "dashed";
	danger?: boolean;
	className?: string;
	onClick?: () => void;
	children?: string;
	title?: string;
	loading?: boolean;
}
