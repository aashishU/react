import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	// This can be done using "ueLoaderData hook" to preload the data before user clicks to fetch data.
	// const [data, setData] = useState([]);

	// useEffect(() => {
	// 	fetch("https://api.github.com/users/aashishU")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 			setData(data);
	// 		});
	// }, []);

	// here we automatically get the result from githubInfoLoader function.
	const data = useLoaderData();

	return (
		<div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
			Github Repositories: {data.public_repos}
			<img src={data.avatar_url} alt="Git picture" width={300} />
		</div>
	);
}

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/aashishU");
	return response.json();
};
