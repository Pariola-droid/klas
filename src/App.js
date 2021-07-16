import { HashRouter as Router, Switch, Route } from "react-router-dom";
import KlasPage from "./pages/home/index";


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={KlasPage} />

      </Switch>
    </Router>
  );
}

export default App;
