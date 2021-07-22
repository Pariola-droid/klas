import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import KlasPage from "./pages/home/index";
import Faq from "./pages/faq/index";


function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={KlasPage} />
        <Route path="/faq" exact component={Faq} />

      </Switch>
    </Router>
  );
}

export default App;
