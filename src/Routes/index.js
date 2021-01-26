import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./../Pages/Home";
import Header from "./../Components/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/transactions" component={Transactions} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
