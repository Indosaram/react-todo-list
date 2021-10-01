import React from "react";
import Items from "./component/Items";
import Header from "./component/Header";
import CreateItem from "./component/CreateItem";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Items status="all" />
          </Route>
          <Route path="/todo">
            <Items status="todo" />
          </Route>
          <Route path="/done">
            <Items status="done" />
          </Route>
          <Route path="/create_item">
            <CreateItem />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
