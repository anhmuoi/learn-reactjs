import TodoList from "features/Todo/components/TodoList/index.jsx";
import React, { useState,useEffect } from "react";
import TodoForm from "../../components/TodoForm";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

ListPage.propTypes = {};

function ListPage(props) {
  const location = useLocation();

  const history = useHistory();

  const match = useRouteMatch();

  const initTodoList = [
    {
      id: 1,
      title: "eat",
      status: "new",
    },
    {
      id: 2,
      title: "sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "code",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterTodoList, setFilterTodoList] = useState(() => {
    return queryString.parse(location.search).status || "all";
  });

  

  useEffect(() => {
    const queryParam = queryString.parse(location.search).status;
      setFilterTodoList(queryParam);
  
  }, [location.search])


  const handleOnclickTodo = (todo) => {
    const newTodoList = [...todoList];
    newTodoList[todo.id - 1] = {
      ...newTodoList[todo.id - 1],
      status: todo.status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleClickAll = () => {
    setFilterTodoList("all");
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "all" }),
    });
  };

  const handleClickCompleted = () => {
    setFilterTodoList("completed");
    console.log(location);
    console.log(match);
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "completed" }),
    });
  };

  const handleClickNew = () => {
    setFilterTodoList("new");
    history.push({
      pathname: match.path,
      search: queryString.stringify({ status: "new" }),
    });
  };

  const todoFilterList = todoList.filter(
    (todo) => filterTodoList === "all" || filterTodoList === todo.status
  );

  const handleTodoFormSubmit = (values) => {
    console.log("form submit", values);
    const new


  };
  return (
    <div>
      this is ListPage
      <h3>todo list</h3>
      <TodoList todoList={todoFilterList} onclickTodo={handleOnclickTodo} />
      <div>
        <button onClick={handleClickAll}>All</button>
        <button onClick={handleClickCompleted}>Completed</button>
        <button onClick={handleClickNew}>New</button>
      </div>
      <h3>What todo?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
}

export default ListPage;
