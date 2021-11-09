import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
}

export default App;
