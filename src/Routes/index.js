import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./../Pages/Home";
import Header from "./../Components/Header";
import Transactions from "./../Components/Transactions/Transactions";
import NotFound from "./../Pages/NotFound";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path={"/home"} exact component={Home} />
        <Route exact path={"/transactions"} component={Transactions} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
