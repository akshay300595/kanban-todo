import React, { useEffect, useState} from "react"
import api from "../network/networkInterceptor";
import { dragLaneContainer, dragTodoContainer, dragTodoMainContainer, todoTextContainer } from "./style";
import { bg } from "../globalStyle";
import TodoCard from "./TodoCard";
import { deleteTodo, fetchTodoList, updateTodo } from "../network/endpoints";
import { FetchTodoListResponse, TodosDto } from "../network/type";


const DragTodo = () => {
  const [lanes , setLanes] = useState<{label: string, value: boolean | string, bg: string, todos: TodosDto[]}[]>([
      {label: 'Pending', value: false, bg: bg.tertiary, todos: []},
      {label: 'In Progress', value: 'IN_PROGRESS', bg: bg.quaternary, todos: []},
      {label: 'Completed', value: true, bg: bg.secondary, todos: []}
  ])
    

  useEffect(()=>{
    fetchData(); 
  },[])


  const fetchData = async () => {
    try {
      const response: FetchTodoListResponse = await api.get(`${fetchTodoList}`);
      const updatedLanes = lanes.map(lane => ({
        ...lane, 
        todos: response.todos.filter(todo => todo.completed === lane.value)
      }));
      setLanes(updatedLanes);
    } 

    catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const dragStart  = (e: React.DragEvent<HTMLDivElement>, item:TodosDto, itemIndex: number, index: number) =>{
      e.dataTransfer.setData('item', JSON.stringify(item));
      e.dataTransfer.setData('columnFrom', index.toString());
      e.dataTransfer.setData('itemIndex', itemIndex.toString());
  }


  const dropData = async (e: React.DragEvent<HTMLDivElement>, index : number) =>{
   const item = JSON.parse(e.dataTransfer.getData('item'));
   const fromColumn = e.dataTransfer.getData('columnFrom');
   const itemIndex = e.dataTransfer.getData('itemIndex');
   const toColumn = index.toString();

   if(fromColumn == toColumn) return;

   setLanes(prevLanes => {
    const newLanes = prevLanes.map(lane => ({ ...lane, todos: [...lane.todos] }));


    newLanes[+toColumn].todos.push(item);
    newLanes[+fromColumn].todos.splice(+itemIndex, 1);

    return newLanes;
  });
  const response = await api.put(`${updateTodo}/${item.id}`, {completed: lanes[+toColumn].value});
  void response;
   }


   const deleteCard = (laneIndex: number, cardIndex :number,  cardId: number) =>{

    setLanes(prevLanes =>{
      const newLanes = prevLanes.map(lane => ({ ...lane, todos: [...lane.todos] }));
        newLanes[laneIndex].todos.splice(cardIndex, 1);
        return newLanes;    
    })

      const response  = api.delete(`${deleteTodo}/${cardId}`)
      void response;
   }


  const editCard = (editedText: string, laneIndex: number, cardIndex :number,  cardId: number) =>{
      console.log(editedText, laneIndex, cardIndex, cardId);

      setLanes(prevLanes=>{
        const newLanes = prevLanes.map(lane => ({ ...lane, todos: [...lane.todos] }));
        newLanes[laneIndex].todos[cardIndex].todo = editedText;
        return newLanes;
      })

      const response = api.put(`${updateTodo}/${cardId}`, {todo: editedText});
      void response;
  }


  const endScroll = async (e: React.UIEvent<HTMLDivElement>, laneIndex: number) =>{
    const target = e.target as HTMLDivElement;
    if(!target) return ; 
    
    if (target.scrollTop + target.clientHeight >= target.scrollHeight - 5) {
       const lastId = lanes[laneIndex].todos[lanes[laneIndex].todos.length - 1].id;
       const response: FetchTodoListResponse = await api.get(`${fetchTodoList}?skip=${lastId}`);


       setLanes(prevLanes =>{
        const newLanes = prevLanes.map(lane => ({ ...lane, todos: [...lane.todos] }));
        newLanes[laneIndex].todos = [...newLanes[laneIndex].todos, ...response.todos];

        return newLanes;
       })
    }
  }
  
  
  return (
    <div style={dragTodoMainContainer}>
      {
        lanes.map((lane, laneIndex)=>(
          <div key = {laneIndex} style={dragTodoContainer} onDrop={(e)=>dropData(e, laneIndex)} onDragOver={(e)=>e.preventDefault()}>
            <div style = {dragLaneContainer(lane.bg)}>
              {lane.label}
            </div>
          
            <div style={todoTextContainer} onScrollEnd={(e)=>endScroll(e, laneIndex)}>
            {
              lane.todos.map((todo, todoIndex)=>(    
                      <TodoCard todoId={todo?.id} 
                                todoText={todo.todo} 
                                onDragStart={(e)=>dragStart(e, todo, todoIndex, laneIndex)} 
                                key = {todoIndex}
                                deleteCard = {()=>deleteCard(laneIndex, todoIndex, todo.id)}
                                editCard = {(editedText)=>editCard( editedText,laneIndex, todoIndex, todo.id)}/>               
              ))
            }
              </div>

          </div>
        ))
      }
    </div>
  )
}
  

export default DragTodo