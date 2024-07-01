# React Router Dom

- Link is used in place of "a" tag because a-tag(anchor) reloads the whole page which is not recommended in react, hence we use Link which pretty much does the same work without reloading the whole page.
  - Instead of "href" we use "to" in Link tag.

---

### Outlet

- It is an element of react-router-dom that helps in creating layouts for applications.

---
### Create Nested Routes

- To create routes we need a package called react-router-dom.

1. Firstly in main.jsx, put "RouterProvider" with router as key and value.
  
  ```
  ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
  );
  ```

2. Then inside router variable use "createBrowserRouter()" method.

3. Now as a parameter of above method define another method called "createRoutesFromElements()".

4. Define Routes as its parameters with their path and component to render.

  ```
  eg.
  const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="user/:userId" element={<User />} />
		</Route>
	)
  );
  ```

5. Dynamic routes can be created using ":" indicating a dynamic field. Here userId is dynamic and can be anything. This userId can be fetched and used inside the component that is being rendered ie. <User />. This can be achieved using "useParams" Hook from react-router-dom.
  
---

### useLoaderData Hook

- This hook makes fetching data from an api faster as it automatically starts fetching data when user moves the cursor on the button, even before clicking. It also cashes some data to make the process lag-free and fast.

1. Create an async function that fetches data from an API and export it. This is generally done inside the component file that is being rendered there. (githubInfoLoader in Github.jsx)

```
eg.
export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/aashishU");
	return response.json();
};
```

2. In the same file (Github.jsx), create a variable, make it equal to the "useLoaderData()" hook. (we will get the api data in this variable)

```
// here we automatically get the result from githubInfoLoader function
const data = useLoaderData();
```

3. In main.jsx file, where the routes are defined, add the function that fetched data from api to "loader" option in that specific route.

```
<Route loader={githubInfoLoader} path="github" element={<Github />} />
```

---

### References

- [React Router Docs](https://reactrouter.com/en/main/start/tutorial#loading-data)

- [Youtube Link](https://www.youtube.com/watch?v=VJov5QWEKE4&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=14)

---