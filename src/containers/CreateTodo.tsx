import { useState } from "react"
import { createTodoContainer, createTodoMainContainer, inputLabel, inputTextBox, submitTodoCta } from "./style"
import api from "../network/networkInterceptor"
import { addTodo } from "../network/endpoints"

const CreateTodo = () => {
    const inputsData: {field: string, name: string, type: string, placeholder: string}[] = [
        {field: 'Todo', name: 'todo', type: 'text', placeholder: 'Enter Text'}
    ]

    const [todoForm, setTodoForm] = useState({
        todo: '',
        completed: false,
        userId: 5
    })


    const getTodo = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setTodoForm({
            ...todoForm,
            [e.target.name] : e.target.value
        })
    }

    const submitForm  = async () =>{
       const response =  await api.post(addTodo, todoForm);
       console.log(response)
    }


  return (
    <div style={createTodoMainContainer}>
        {
            inputsData.map((input,index)=>(
                <div key={index} style={createTodoContainer}>
                    <span style={inputLabel}>{input.field}</span>
                    <input placeholder={input.placeholder} type={input.type} style={inputTextBox} value ={todoForm.todo} name={input.name} onChange={(e)=>getTodo(e)}/>
                </div>
            ))
        }
        <button style={submitTodoCta} onClick={submitForm}>Submit</button>
    </div>
  )
}

export default CreateTodo