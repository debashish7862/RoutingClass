import { createContext, useState } from "react";
const TodoContext=createContext();
const TodoProvider=({children})=>{
    const[todoList,setTodoList]=useState("")
    return <TodoContext.Provider>
        {children}
    </TodoContext>
}

export default TodoProvider;