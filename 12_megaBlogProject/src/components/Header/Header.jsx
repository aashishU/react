import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const authStatus = useSelector((state) => state.auth.status);
	const navigate = useNavigate();
	const navItems = [
		{
			name: "Home",
			slug: "/",
			active: true,
		},
		{
			name: "Login",
			slug: "/login",
			active: !authStatus,
		},
		{
			name: "Signup",
			slug: "/signup",
			active: !authStatus,
		},
		{
			name: "All Posts",
			slug: "/all-posts",
			active: authStatus,
		},
		{
			name: "Add Post",
			slug: "/add-post",
			active: authStatus,
		},
	];

	return (
		<header className="py-3 shadow bg-black">
			<Container>
				<nav className="flex md:items-center md:justify-between">
					<div className="mr-4">
						<Link to="/">
							<Logo width="70px" />
						</Link>
					</div>
					{/* menu icon */}
					<div
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden cursor-pointer my-auto absolute right-6 text-blue-500 hover:text-blue-100"
					>
						{isOpen ? (
							<div className="text-2xl transition-all duration-300 ease-in-out">
								&#10005;
							</div>
						) : (
							<div className="text-4xl transition-all duration-300 ease-in-out">
								&#8801;
							</div>
						)}
					</div>
					<ul
						className={`md:flex bg-gray-900 absolute md:static w-full md:w-auto left-0 py-4 md:py-0 md:bg-inherit items-center md:z-0 transition-all duration-200 ease-in md:opacity-100 top-[56px] ${
							isOpen ? "z-30 opacity-100" : "-z-30 opacity-100"
						}`}
					>
						{navItems.map((item) =>
							item.active ? (
								<li key={item.name}>
									<button
										className="inline-block text-gray-400 hover:text-white md:bg-gray-500 ml-7 mx-3 md:px-6 py-2 duration-200 md:text-black md:hover:text-black md:hover:bg-blue-100 md:rounded-full"
										onClick={() => navigate(item.slug)} // useNavigate only needs the url and works automatically
									>
										{item.name}
									</button>
								</li>
							) : null
						)}
						{authStatus && (
							<li className="my-3 md:my-0">
								<LogoutBtn />
							</li>
						)}
					</ul>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
