import React from "react";
import { Routes, Route } from 'react-router-dom';
import { AdminProvider } from "../context/AdminContext";
import AppContext from "../context/AppContext";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Areas from "../pages/Areas.jsx";
import Aspectos from "../pages/Aspectos.jsx";
import Layout from "../containers/Layout.jsx";
import useInicialState from "../hooks/useInitialState";
import ProtectedRoute from "../components/ProtectedRoute";

const App = () => {
	const initialState = useInicialState();
	return (
		<AppContext.Provider value={initialState}>
			<AdminProvider>
					<Routes>
							<Route exact path="/" element={<Login />} />
						<Route element={<Layout />}>
							<Route 
								exact path="/dashboard" 
								element={
									<ProtectedRoute>
										<Dashboard />
									</ProtectedRoute>
								}
							/>
							<Route exact path="/areas" element={<Areas />} />
							<Route exact path="/aspectos" element={<Aspectos />} />
							<Route path="*" element={<NotFound/>} />
						</Route>
					</Routes>
			</AdminProvider>
		</AppContext.Provider>
	);
};

export default App;
