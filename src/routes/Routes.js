import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../pages/App";
import Pdf from "../pages/Pdf";

function Routes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/pdf" component={Pdf} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
