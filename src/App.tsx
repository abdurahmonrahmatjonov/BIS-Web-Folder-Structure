import React from "react";
import "./App.css";
import { AppRoutes } from "./routes/routes";
import PathListener from "./components/PathListeners";

import Sales from "./pages/Sales/index";
import "./i18n";

function App() {
	return (
		<>
			{/* <PathListener /> */}
			{/* <AppRoutes /> */}
			<Sales />
		</>
	);
}

export default App;
