import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
	return (
		<div className="bg-gray-500">
			<h1>Learn about Redux-Toolkit</h1>
			<AddTodo />
			<Todos />
		</div>
	);
}

export default App;
