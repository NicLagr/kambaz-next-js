"use client";

import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTodos } from "./todosContext";

export default function ReactContextTodoList() {
  const ctx = useTodos();
  if (!ctx) return null;
  const { todos, todo, setTodo, addTodo, updateTodo, deleteTodo } = ctx;

  return (
    <div id="wd-react-context-todo-list">
      <h2>React Context Todo List</h2>
      <ListGroup>
        <ListGroupItem>
          <Button className="me-2" onClick={addTodo}>Add</Button>
          <Button className="me-2" variant="warning" onClick={updateTodo}>Update</Button>
          <FormControl
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </ListGroupItem>
        {todos.map((item) => (
          <ListGroupItem key={item.id}>
            <Button className="me-2" variant="danger" onClick={() => deleteTodo(item.id)}>Delete</Button>
            <Button className="me-2" variant="secondary" onClick={() => setTodo(item)}>Edit</Button>
            {item.title}
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
