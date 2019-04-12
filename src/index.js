import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import store from "./store";
import indexRoutes from "./routes";
import Header from "./components/Header";

ReactDOM.render(
  <Provider store={store}>
    <div className="main">
      <Header />
      <body>
        <div className="router">
          <HashRouter>
            <Switch>
              {indexRoutes.map((prop, key) => {
                    if (prop.exact) {
                      return <Route exact path={prop.path} key={key} component={prop.component} />;
                    } else {
                      return <Route path={prop.path} key={key} component={prop.component} />;
                    }
              })}
            </Switch>
          </HashRouter>
        </div>
      </body>
    </div>
  </Provider>, document.getElementById("root")
);