import React from "react";

function Logo({ width = "100px" }) {
	return (
		<div className="text-red-800 font-extrabold text-2xl">
			Mega<span className="text-blue-700">Blog</span>
		</div>
	);
}

export default Logo;
