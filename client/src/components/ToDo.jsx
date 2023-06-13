import { useEffect } from "react";
import { deleteToDo, getAllToDos } from "../redux/actions/index";
import { useDispatch,useSelector } from "react-redux";
import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from "../redux/actions/type";

//components
import ToDos from "./ToDos";
import Tabs from "./Tabs";



export const Todo = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllToDos());
    }, [])

    const getTodos = ()=>{
        if(currentTab === ALL_TODOS){
            return todos;
        }else if(currentTab === ACTIVE_TODOS){
            return todos.filter(todo => !todo.done)
        }else if(currentTab === DONE_TODOS){
            return todos.filter(todo => todo.done)
        }
    }

    const removeDoneTodos=()=>{
        todos.forEach(({done, _id}) => {
            if(done){
                dispatch(deleteToDo(_id));
            }
        });
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />
                {
                    todos.some(todo => todo.done)?(
                        <button
                            onClick={removeDoneTodos}
                            className="button clear"
                        >Remove Done Todos</button>
                    ): null
                } 
                
            </div>
            <ul>
                {
                    getTodos().map(todo=>(
                        <ToDos
                        key = {todo._id}
                        todo = {todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todo;