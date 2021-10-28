import React, { useState, useEffect } from "react";
import List from "List";

const AddDataToList = () => {
	const [messages, setMessages] = useState();

	

	useEffect(() => {
		fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setMessages(data);
			});
	}, []);

	return <div>{messages && <List messages={messages} />}</div>;
};

export default AddDataToList;
