 import { v1 } from "uuid";
 import { AddTodoListAC, RemoveTodoListAC, changeTodolistTitleAC, changeTodolistTitleActionType, chengeTodolistFilterAT, todolistsReducer } from "./todolist-reduser";
 import { TodolistType } from "../App"
export {}
 
    
     test('correct todolist should be removed', () => {
        
         const todolistId1 = v1();
        const todolistId2 = v1();
         const startState: Array<TodolistType> = [
            {id: todolistId1, title: "What to learn", filter: "all"},
            {id: todolistId2, title: "What to buy", filter: "all"}
         ]
         //
    
    const endState = todolistsReducer(startState,RemoveTodoListAC(todolistId1))
        //
         expect(endState.length).toBe(1);
         expect(endState[0].id).toBe(todolistId2);
     });
   test('correct todolist should be added', () => {
         
         let todolistId1 = v1();
        let todolistId2 = v1();
    
        let newTodolistTitle = "New Todolist";
    
         const startState: Array<TodolistType> = [
             {id: todolistId1, title: "What to learn", filter: "all"},
             {id: todolistId2, title: "What to buy", filter: "all"}
         ]
       const endState = todolistsReducer(startState,AddTodoListAC(newTodolistTitle,v1()))
         expect(endState.length).toBe(3);
     expect(endState[2].title).toBe(newTodolistTitle);
});
test('correct todolist new title', () => {
         
    let todolistId1 = v1();
   let todolistId2 = v1();

   let newTodolistTitle = "New Todolist";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action:changeTodolistTitleActionType={
        type: "Chenge-Todolist-Title",
        todolistId:todolistId2,
        title: newTodolistTitle
    }
  const endState = todolistsReducer(startState,changeTodolistTitleAC(newTodolistTitle,todolistId2))
    expect(endState[0].title).toBe("What to learn");
expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct todolist filter', () => {
         
    let todolistId1 = v1();
   let todolistId2 = v1();

   let newFilter = "completed";

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "completed"}
    ]

    const action:chengeTodolistFilterAT={
        type: "Chenge-Todolist-Filter",
        todolistId:todolistId2,
        filter:newFilter
        
    }
  const endState = todolistsReducer(startState,action)
    expect(endState[0].title).toBe("all");
expect(endState[1].title).toBe(newFilter);
});

    

