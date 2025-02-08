import React from "react";
import { Menu } from "antd";
import { IMenuItem } from "../../types/global";

const MenuBar: React.FC = () => {
	const menuItems: IMenuItem[] = [
		{
			key: "1",
			label: "nav 1",
		},
		{
			key: "2",
			label: "nav 2",
		},
		{
			key: "3",
			label: "nav 3",
		},
		{
			key: "4",
			label: "nav 4",
		},
	];

	return (
		<div className="m-0 h-screen p-0">
			<Menu mode="vertical" className="bg-basic text-white h-full" items={menuItems} />
		</div>
	);
};

export default MenuBar;
