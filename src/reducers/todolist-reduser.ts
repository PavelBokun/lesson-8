import { v1 } from "uuid";
import { FilterValuesType, TodolistType } from "../App";

export {};
export type RremoveTodolistActionType = {
  type: "Remove-Todolist";
  todolistId: string;
};
export type AddTodolistActionType = {
  type: "Add-Todolist";
  title: string;
  todolistId: string;
};

export type changeTodolistTitleActionType = {
  type: "Chenge-Todolist-Title";
  todolistId: string;
  title: string;
};
export type chengeTodolistFilterAT = {
  type:"Chenge-Todolist-Filter"
  todolistId: string;
  filter: FilterValuesType;
};
export type ActionType =
  | RremoveTodolistActionType
  | AddTodolistActionType
  | changeTodolistTitleActionType
  |chengeTodolistFilterAT
  
export const todolistsReducer = (
  todolists: Array<TodolistType>,
  action: ActionType
): Array<TodolistType> => {
  switch (action.type) {
    case "Remove-Todolist":
      return todolists.filter((tl) => tl.id !== action.todolistId);
    case "Add-Todolist":
      const newTodolist: TodolistType = {
        id: action.todolistId,
        title: action.title,
        filter: "all",
      };
      return [...todolists, newTodolist];
    case "Chenge-Todolist-Title":
      return todolists.map((tl) =>
        tl.id === action.todolistId
          ? {
              ...tl,
              title: action.title,
            }
          : tl
      );
            case "Chenge-Todolist-Filter":
                return todolists.map(tl => tl.id === action.todolistId ?{
                    ...tl,filter:action.filter
                }:tl)
    default:
      return todolists;
  }
};


export const RemoveTodoListAC =(id:string):RremoveTodolistActionType=>{
    return{
        type:"Remove-Todolist",
        todolistId:id
    }
}

export const AddTodoListAC =(id:string, title: string):AddTodolistActionType=>{
    return{
        type:"Add-Todolist",
        todolistId:id,
        title: title
    }
}

export const changeTodolistTitleAC =(id:string, title: string):changeTodolistTitleActionType=>{
    return{
        type:"Chenge-Todolist-Title",
        todolistId:id,
        title: title
    }
}

export const changeTodolistFilterAC =(id: string,
    filter: FilterValuesType):chengeTodolistFilterAT=>{
    return{
        type:"Chenge-Todolist-Filter",
        todolistId:id,
  filter: 'completed'  // ?
    }
}