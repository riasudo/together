import Landing from "./components/Landing";
import Client from "./components/Clients/ClientDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import ProgramDetails from './components/Programs/ProgramDetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
   
        <Redirect exact path="/" to="/clients"/>
        <Route path="/clients" exact component={Landing} />
        <Route path="/clients/:id" exact component={Client}/>
        <Route path="/programs/:id" component={ProgramDetails}/>

      </Switch>
    </Router>
  );
}

export default App;
