import { ReactNode } from "react";

export interface IMenuItem {
	key: string;
	label: string;
}

export interface LayoutProps {
	children: ReactNode;
}

export interface IRoute {
	path: string;
	element: ReactNode;
}

export interface AuthState {
	isAuthenticated: boolean;
}
