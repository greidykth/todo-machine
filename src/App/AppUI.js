import React, { useContext } from "react";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoCounter } from "../components/TodoCounter";
import { TodoForm } from "../components/TodoForm";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  );
};

export { AppUI };
