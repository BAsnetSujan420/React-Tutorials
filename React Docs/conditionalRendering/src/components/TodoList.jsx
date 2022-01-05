import React from "react";
import Todo from "./Todo";
import TodoOder from "./RemainingTodo";

const TodoList = () => {
  return (
    <div>
      <section className="todo-container">
        <h2>Today's Todo Tasks</h2>
        <Todo isDone={true} name="Read article on Z-index & Stacking" />
        <Todo isDone={true} name="A demo on Styled Components" />
        <Todo isDone={false} name="Learn State Management" />
      </section>

      <section className="todo-container">
        <h2>Remaining Todo's with their Priority</h2>
        <TodoOder priority={5} name="Watch 7 Ted-Ed videos" />
        <TodoOder priority={3} name="Watch a documentary from watchlist" />
        <TodoOder priority={4} name="Listen to The CSS Podcast" />
        <TodoOder priority={3} name="Watch Youtube subscriptions" />
      </section>
    </div>
  );
};

export default TodoList;
