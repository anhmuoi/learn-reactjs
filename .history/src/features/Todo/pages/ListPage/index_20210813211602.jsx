import React from "react";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {
  const handleTodoFormSubmit = (values) => {
    console.log("form submit", values);
  };
  return (
    <div>
      this is ListPage
      <h3>What todo?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default ListPage;
