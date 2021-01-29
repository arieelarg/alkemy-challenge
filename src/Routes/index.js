import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./../Pages/Home";
import Header from "./../Components/Header";
import Transactions from "./../Pages/Transactions";
import Create from "./../Pages/Transactions/Create";
import NotFound from "./../Pages/NotFound";
import { Container } from "react-bootstrap";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/transactions"} component={Transactions} />
          <Route exact path={"/transactions/create"} component={Create} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Routes;
