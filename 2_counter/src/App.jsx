import { useState } from "react";
import "./App.css";

function App() {
	let [counter, setCounter] = useState(0);

	const addValue = () => {
		if (counter < 20) {
			setCounter(counter + 1);
		}
	};

	const removeValue = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
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
