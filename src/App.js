import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Layout from "./layout/AuthLayout/Index";
import NonAuthLayout from "./layout/NonAuthLayout";
import NotFound from "./Pages/404/NotFound";
import AuthMiddleware from "./Routes/Middleware/AuthMiddleware";
import { authRoute, openRoute } from "./Routes/Routes";
import "./Styles/app.scss";
import "./Styles/web.scss";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        {openRoute.map((route, idx) => (
          <Route
            key={idx}
            exact
            path={route.path}
            component={route.component}
            layout={NonAuthLayout}
            isAuthProtected={false}
          />
        ))}
        {authRoute.map((route, idx) => (
          <AuthMiddleware
            key={idx}
            exact
            path={route.path}
            component={route.component}
            layout={Layout}
            isAuthProtected
            roles={route.roles}
          />
        ))}
        <Route exact path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
