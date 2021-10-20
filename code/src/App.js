import React, {useState} from 'react'
import Create from 'Create'
import AddDataTodoList from 'AddDataTodoList'


export const App = () => {



  return (


<div className="container">


<div className="messageContainer"> 
<Create />
</div>

<div className="listContainer"> 
<AddDataTodoList />
</div>






    </div>
    
  )
}
