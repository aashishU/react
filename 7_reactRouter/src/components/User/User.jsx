import React from "react";
import { useParams } from "react-router-dom";

function User() {
	const { userId } = useParams();
	return (
		<div className="grid place-items-center my-10">
			<h1 className="font-bold">User: {userId}</h1>
			<h3>
				This is a dynamic route which fetches userId from url using "useParams"
				hook.
			</h3>
			<p>
				Anything that is typed after "user/___" in the url can be fetched by
				User.jsx component. This makes the route dynamic.
			</p>
		</div>
	);
}

export default User;
