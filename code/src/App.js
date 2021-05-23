import React, { useState, useEffect } from 'react'

import { API_URL, LIKES_URL } from './reusable/urls'

import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'

export const App = () => {
	const [messageList, setMessageList] = useState ([])
	const [messageNew, setMessageNew] = useState ('')
	const [counter, setCounter] = useState (0)

	useEffect(() => {
		fetchMessageList()
	}, [])

	const fetchMessageList = () => {
		fetch(API_URL)
			.then(res => res.json())
			.then(message => setMessageList(message))
			.catch(err => {
				alert(err.message)
			})	
	} 

	const handleMessageNewChange = (event) => {
		setMessageNew(event.target.value)
		setCounter(event.target.value.length)
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()
		
		const option = {
		method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ message: messageNew })
		}

		fetch(API_URL, option)
			.then(res => {
				if (res.ok) {
					return res.json()
				} else {
					throw new Error('Oops, something went wrong! Did you type at least 5 characters?')
				}
			})
			.then(() => fetchMessageList())
			.catch(err => {
				alert(err.message)
			})
	
		setMessageNew('')
		setCounter(0)
	}

	const handleLikesIncrease = (id) => {
		const option = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}

		fetch(LIKES_URL(id), option)
			.then(res => res.json())
			.then(() => fetchMessageList())
			.catch(err => {
				alert(err.message)
			})
	}

	return (
		<main>
			<MessageForm   
				messageNew={messageNew}
				onMessageNewChange={handleMessageNewChange}
				onFormSubmit={handleFormSubmit}
				counter={counter}
			/>
			<MessageList 
				messageList={messageList}
				handleLikesIncrease={handleLikesIncrease}
			/>
		</main>
	)
}