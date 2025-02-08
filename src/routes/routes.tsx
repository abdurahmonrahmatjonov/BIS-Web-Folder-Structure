import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Sales from "../pages/Sales";

export const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/sales" replace />} />
			{/* <Route path="/sales" element={<ProtectedRoute element={<Sales />} />} /> */}
			<Route path="/sales" element={<Sales />} />
		</Routes>
	);
};
