"use client";

import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTodoStore } from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, todo, setTodo, addTodo, updateTodo, deleteTodo } = useTodoStore((state) => state);

  return (
    <div id="wd-zustand-todo-list">
      <h2>Zustand Todo List</h2>
      <ListGroup>
        <ListGroupItem>
          <Button className="me-2" onClick={addTodo}>Add</Button>
          <Button className="me-2" variant="warning" onClick={updateTodo}>Update</Button>
          <FormControl value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
        </ListGroupItem>
        {todos.map((item) => (
          <ListGroupItem key={item.id}>
            <Button className="me-2" variant="danger" onClick={() => deleteTodo(item.id)}>Delete</Button>
            <Button className="me-2" variant="secondary" onClick={() => setTodo(item)}>Edit</Button>
            {item.title}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
