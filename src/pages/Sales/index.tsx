import React, { useRef } from "react";
import Layout from "../../components/Layout";
import { useTranslation } from "react-i18next";
import SuccessModalWithTimer from "../../components/Modal/SucessModalWithTimer";
import { Button } from "antd";

const Sales: React.FC = () => {
	const { t } = useTranslation();
	const sucessRef = useRef<any>(null);

	const handleOpenModal = () => {
		sucessRef.current.open("Success");
	};

	return (
		<Layout>
			<div className="text-3xl text-red-500 text-center">Sales</div>
			<Button type="primary" onClick={handleOpenModal} className="bg-sky-900">
				{t("welcome")}
			</Button>
			<SuccessModalWithTimer getRef={(ref) => (sucessRef.current = ref)} />
		</Layout>
	);
};

export default Sales;
