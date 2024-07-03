# Context API

- The Context API is a feature that enables state management and sharing of data across different components or parts of an application without passing props down manually at every level (also known as Prop Drilling). It is particularly useful for managing global state, theme settings, or user authentication data, and is commonly used in React applications.

---

### Step 1 : Create a Store

1. Create a folder "context" in src.
2. Create file inside "context" folder, naming it "UserContext.js" as it is made to handle user data.
    - create a context using "React.createContext()" method and put it inside a variable. Also export that variable.

    ```
    const UserContext = React.createContext()

    export default UserContext;
    ```

3. Create another file inside "context" folder and name it "UserContextProvider.jsx". This will provide the UserContext we have created before.

    - {children} : It means all the components that are being used.
    - By wrapping all the components (ie. {children}) with UserContext.Provider, we are giving access of UserContext(like username, password etc) to all the components.
    - "value" is necessary to tell what values are accessible to the components. Pass an object that contain everything you want to share.

```
    const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
```
---

### Step 2 : Save Data in Store

1. Create a component, for eg. Login.jsx, to take data from user and save it in UserContext.
2. Create a form, with input fields like "username" and "password".
3. Manage their states by using "useState hook".
4. Use {setUser} that was passed by "value" prop in "UserContextProvider.jsx"
    - "setUser" is used to set the User data using setUser function.
    - Make it equal to "useContext hook" to extract the username and password entered by the user.
    - Pass the appropriate Context as parameter of "useContext hook" where the required data is passed. ie. "UserContext"

---

### Step 3 : Use Data from Store

1. Create a component, for eg. Profile.jsx, to take out data from UserContext and use it to show user info on Profile.jsx
2. Create a variable {user} that was passed by "value" prop in "UserContextProvider.jsx"
    - Here we want to use the stored value of "user", hence we take "user" and not "setUser" function.
    - Make it equal to "useContext() hook" and pass "UserContext" as it's parameter.
    - Now we can use the values of "user" object, anywhere inside Profile.jsx
3. Now render all the components by adding them in App.jsx
    -  Don't forget to wrap all components using

    ```
    <UserContextProvider>
    <All Components />
    </UserContextProvider>
    ```
    ---

    ### References
    - [Documentation](https://react.dev/reference/react/createContext)
    - [Youtube Tutorial](https://www.youtube.com/watch?v=JQVBGtZMqgU&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=13)