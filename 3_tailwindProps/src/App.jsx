import Card from "./components/Card";
import "./App.css";

function App() {
	return (
		<>
			<h1 className="bg-green-400 text-black p-4 rounded-md mb-4">
				Tailwind Test
			</h1>
			<Card name="Front-End" btnTxt="Click Here" />
			<Card name="Back-End" btnTxt="Github Link" />
		</>
	);
}

export default App;
