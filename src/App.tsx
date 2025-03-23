import { useState } from "react"
import CreateTodo from "./containers/CreateTodo"
import DragTodo from "./containers/DragTodo"
import { createTodoContainer, createTodoCta, MainContainer } from "./globalStyle"

function App() {

  
const [toggleCreateTodo, setToggleCreateTodo] = useState(false);

  return (
    <>
      <MainContainer>
        <div style={createTodoContainer}>
          <button style={createTodoCta} 
                  onClick={()=>setToggleCreateTodo(!toggleCreateTodo)}
                  >
                    Create Todo {toggleCreateTodo ? '-' : '+'}
                  </button>
          {toggleCreateTodo ? <CreateTodo/> : null}
        </div>
      <DragTodo/>
      </MainContainer>
    </>
  )
}

export default App
