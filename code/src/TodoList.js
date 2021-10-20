import React, { useState, useEffect } from "react";



const TodoList = ({todos}) => {


const [todo, setTodo] = useState()


return (
      
<div className="messageContainer"> 
{todos.map((todo) => (
<div className="content" key={todo.id}>
   
<p>{todo.message} </p>
<p ><span role='img' aria-label='heart-emoji' className="icon">
          ❤️</span><span className="like">  x {todo.hearts} </span></p>
 
</div>
))}

</div>
    )




}

export default TodoList
