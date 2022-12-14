import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Callpage from "./components/CallPage/Callpage";

import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    
      <Router>
        <Switch>
        <Route exact path="/:id">
            <Callpage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
         
        </Switch>
      </Router>
    
  );
}

export default App;
