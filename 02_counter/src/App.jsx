import { useState } from "react";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(0);

	const addValue = () => {
		setCounter(counter + 1);
		console.log("value added", counter);
	};

	const removeValue = () => {
		setCounter(counter - 1);
	};

	return (
		<>
			<h1>React Counter</h1>
			<h2>Counter Value: {counter}</h2>

			<button onClick={addValue}>Add value: {counter}</button>
			<br />
			<button onClick={removeValue}>Remove value: {counter}</button>
		</>
	);
}

export default App;
