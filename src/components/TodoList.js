import { Pagination } from "react-bootstrap";

const TodoList = ({ todos }) => {
    return (
    <ul className="list-group">
        {todos.map((todo)=> (
        <li class="list-group-item d-flex justify-content-between align-items-center"> 
            {todo.title}
            <input type="checkbox" checked={todo.completed} />
        </li>
        ))}
        <Pagination> 
        <Pagination.Prev /> 
        <Pagination.Item>{2}</Pagination.Item> 
        <Pagination.Item>{3}</Pagination.Item> 
        <Pagination.Item>{4}</Pagination.Item> 
        <Pagination.Ellipsis /> 
        <Pagination.Next /> 
        </Pagination> 
        </ul>
        
    );
};

export default TodoList;