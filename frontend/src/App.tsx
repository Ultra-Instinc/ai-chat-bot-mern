import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import Chat from "./pages/Chat";
import { useAuth } from "./context/AuthContext";
export default function App() {
	console.log(useAuth());
	return (
		<main>
			<Header />
			<Routes>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/chat'
					element={<Chat />}
				/>
				<Route
					path='*'
					element={<Notfound />}
				/>
			</Routes>
		</main>
	);
}
