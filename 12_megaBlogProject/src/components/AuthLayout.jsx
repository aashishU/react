import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
	const navigate = useNavigate();
	const [loader, setLoader] = useState(true);
	const authStatus = useSelector((state) => state.auth.status);

	useEffect(() => {
		// Hard to understand... re-watch video url: "https://www.youtube.com/watch?v=lfMyCuB6xfc&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=24" time: 52:45
		//  email/password match(true) && not authorized to enter(false) !== email/pass(true)
		// (true) && (false !== true)
		// true && true (send user to login page)
		if (authentication && authStatus !== authentication) {
			navigate("/login");
			// email/pass match(true) now reverse this (!true) = false && (authorized to enter(true) !== email/pas match(true))
			// false && (true !== true)
			// false && false (send user to home page)
		} else if (!authentication && authStatus !== authentication) {
			navigate("/");
		}
		setLoader(false);
	}, [authStatus, navigate, authentication]);

	return loader ? <h1>Loading...</h1> : <>{children}</>;
}
