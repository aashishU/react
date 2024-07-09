# Todo using Redux-Toolkit

- It was originally created to help address three common concerns about Redux:

  - "Configuring a Redux store is too complicated"
  - "I have to add a lot of packages to get Redux to do anything useful"
  - "Redux requires too much boilerplate code".

    ---

### Dependencies

     npm install @reduxjs/toolkit
     npm install react-redux
---

### Step 1 : Create a Store

- Also called "Single Source of Truth".
- This is where all the states data will be stored.
- To create a store, we need "configureStore" and a reducer that holds all the methods to access and manipulate data in Store.
- Import "configureStore" and user created "reducer".

### Step 2 : Create a reducer file

- Create following file structure in "src" folder
  - features -> todo -> todoSlice.js
  - They are called slices in redux-toolkit.

- To create slice, we use "createSlice" hook. This also needs to be imported.

    - Three things are needed to create slice:
        1. name
            - A name is needed (eg. "todo")
        2. initialState
            - Create initialState : this specifies the data structure used to hold objects. Here we are using an array to hold our todo objects.
        3. reducer methods
            - reducers are the methods used to manipulate data in Store. They are created inside Slice file.

            - Now to create Slice

            ```javascript
            // e.g creating todoSlice.js

            export const todoSlice = createSlice({
                name: 'todo',
                initialState,
                reducers: {
                    addTodo: (state, action) => {
                        // creating new todo
                        const todo = {
                            id: nanoid(),
                            text: action.payload
                        }

                        // pushing new todo to Store
                        state.todos.push(todo)
                    },
                    removeTodo: (state, action) => {
                        // filtering out the todo with id = id of todo to be removed
                        // we get a new array without deleted todo
                        state.todos = state.todos.filter((todo) => todo.id !== action.payload)
                    }
                }
            })
            ```
            - In 'reducers' we pass an object with Key:Function pairs.
            - Each function gets 2 parameters by default :
                1. state
                    - This provides the current state of the Store.
                2. action
                    - This provides the data needed to perform specific tasks.
                    - e.g To delete a todo, we get "id" of that todo from "action".
            - Export all reducers from reducer list individually
                - These are the methods that will be used in components to perform tasks like Add new todo, Delete existing todo etc.

                ```javascript
                export const {addTodo, removeTodo} = todoSlice.actions
                ```
        
            - Also Export combined source for all reducers.
                - This will be used in Store file.

                ```javascript
                export default todoSlice.reducer
                ```
                ---

### Step 3 : Create Components

1. Send data from Components to Store (useDispatch)
    - "useDispatch" is used to send data from components to the Store to update it.

    ```javascript
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
    }
    ```

    - It takes the input from user and call addTodo() function with input data by user.
    - This creates a new todo with input data by user.
    - "dispatch()" function then takes this newly created "todo" and dispatch it to Store to update "todos array".

2. Retrieve data from Store (useSelector)
    - "useSelector" is used to get data from current state.
    - To access current state in "useSelector", we use callback.

    ```javascript
    const todos = useSelector(state => state.todos)
    ```
    - This newly created todos variable contains todos array from the Store.
    - Now we can use map() on todos to display all existing todos in Store.
