import Landing from "./components/Landing";
import Student from "./components/Students/StudentDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProgramCard from './components/Programs/ProgramCard';
import ProgramDetails from './components/Programs/ProgramDetails';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/student" exact component={Student}/>
        <Route path="/program/:id" component={ProgramDetails}/>

      </Switch>
    </Router>
  );
}

export default App;
