import { useEffect, useState } from "react"
import { editableContainer, editableInput, editTodoCta, todoCard, todoCardIcon, todoCardIconContainer } from "./style"

const TodoCard: React.FC<{todoId ?: number, todoText: string, deleteCard: ()=>void, editCard: (editedText: string)=>void} & React.HTMLAttributes<HTMLDivElement>> = ({todoId, todoText, deleteCard, editCard, ...props}) => {

const [todo, setTodo] =  useState(todoText);
const [editable, setEditable] = useState(false);
const [todoInput, setTodoInput] = useState('');

useEffect(()=>{
    void todoId;
    setTodo(todoText);
},[todoText])

const editTodo = () =>{
  if (editable) return;

  setEditable(true)
  setTodoInput(todoText);
}

const deleteTodo = () =>{
  console.log('working')
  setEditable(false);
  deleteCard();
}


const saveEditTodo = () =>{
  setTodo(todoInput);
  setEditable(false);
  editCard(todoInput);
}

  return (
  <div draggable {...props} style={todoCard}>
    <div style={todoCardIconContainer}>
    <img src='assets/delete.svg' style={todoCardIcon} onClick={deleteTodo}/>
    <img src='assets/modify.svg' style={todoCardIcon} onClick={editTodo}/>
    </div>
    {
      editable ? 
      <div style={editableContainer}>
        <input type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} style={editableInput}/>
        <button style={editTodoCta} onClick={saveEditTodo}>Save</button>
      </div>
       : <span>{todo}</span>
    }
  
    </div>
  )
}

export default TodoCard