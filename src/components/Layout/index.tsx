import React from "react";
import MenuBar from "../Menu/index";
import { LayoutProps } from "../../types/global";
import Navbar from "../Navbar/index";

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex w-full h-full">
			<MenuBar />
			<div className="w-full">
				<Navbar />
				{children}
			</div>
		</div>
	);
};

export default Layout;
