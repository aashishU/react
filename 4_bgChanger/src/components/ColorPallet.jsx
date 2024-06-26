import React from "react";
import { useState } from "react";

function ColorPallet() {
	const [color, setColor] = useState("Red");
	return (
		<>
			<div className="bg-gray-400 rounded-md ">
				<button>Red</button>
			</div>
		</>
	);
}

export default ColorPallet;
