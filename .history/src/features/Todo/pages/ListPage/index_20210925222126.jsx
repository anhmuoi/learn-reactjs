import React from "react";
import TodoForm from "../../components/TodoForm";

ListPage.propTypes = {};

function ListPage(props) {

  const initTodoList = [
    {
        id: 1,
        title: 'eat',
        status: 'new',
    },
    {
        id: 2,
        title: 'sleep',
        status: 'completed',
    },
    {
        id: 3,
        title: 'code',
        status: 'new',
    },
]



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
