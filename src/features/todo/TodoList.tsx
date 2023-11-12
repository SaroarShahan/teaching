import { ChangeEvent, FormEvent, useState } from 'react';

import Ul from '~/components/ul';
import Button from '~/components/Button';
import Form from '~/components/form';

interface Todo {
  id: number;
  title: string;
}

const todos_data: Todo[] = [
  {
    id: 1,
    title: 'Item One',
  },
  {
    id: 2,
    title: 'Item Two',
  },
];

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(todos_data);
  const [todo, setTodo] = useState<string>('');
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleUpdate = (id: number) => {
    const newTodo = todos.find((todo) => todo.id === id);

    setTodo(newTodo?.title ?? '');
    setSelectedTodo(newTodo ?? null);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!todo) return;

    if (selectedTodo) {
      const newTodos = todos.map((todo_item) => {
        if (todo_item.id === selectedTodo.id) {
          return {
            ...todo_item,
            title: todo,
          };
        }

        return todo_item;
      });

      setTodos([...newTodos]);
      setTodo('');
      setSelectedTodo(null);

      return;
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      title: todo,
    };

    setTodos([...todos, newTodo]);
    setTodo('');
  };

  return (
    <>
      <div className="add_todo_input">
        <Form onSubmit={handleSubmit}>
          <Form.Input value={todo} onChange={handleTodoChange} placeholder="Add todo" />
          <Form.Button type="submit">{selectedTodo ? 'Update' : 'Add'} Todo</Form.Button>
        </Form>
      </div>

      <div className="search_todo_input">
        <Form>
          <Form.Input placeholder="Search todo here" />
        </Form>
      </div>

      <Ul>
        {todos.length ? (
          todos.map((todo) => (
            <Ul.Li key={todo.id}>
              {todo.title}

              <div className="item_btn">
                <Button className="edit" onClick={() => handleUpdate(todo.id)}>
                  Edit
                </Button>
                <Button className="delete" onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
              </div>
            </Ul.Li>
          ))
        ) : (
          <div>No, data found!</div>
        )}
      </Ul>
    </>
  );
};

export default TodoList;
