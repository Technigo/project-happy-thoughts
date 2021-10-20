import React, { useState, useEffect } from "react";
import TodoList from "TodoList";

const AddDataTodoList = () => {
	const [todos, setTodos] = useState();

	

	useEffect(() => {
		fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTodos(data);
			});
	}, []);

	return <div>{todos && <TodoList todos={todos} />}</div>;
};

export default AddDataTodoList;
