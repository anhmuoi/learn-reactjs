import categoryApi from "api/categoryApi.js";
import Header from "components/Header/index.jsx";
import ProductFeature from "features/Product/index.jsx";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import NoteFound from "./components/NotFound";
import CounterFeature from "./features/Counter/index.jsx";
import TodoFeature from "./features/Todo";

function App() {

  // useEffect(() => {
  //   const fetchCategories = async  () => {
  //     const categories = await categoryApi.get(1);
      
      
  //   }
    
  //   fetchCategories();
  // }, [])


  return (
    <div className="App">
    <Header/>
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Redirect
          from="/posts-list/:postId"
          to="/posts/:postId"
          exact
        ></Redirect>

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/album"></Route>
        <Route path='/products' component={ProductFeature} />
        <Route component={NoteFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
