import React from "react";
import { Route, Link } from "react-router-dom";
import AboutSubLink from "./About-sub-link";

export default ({ match }) => {
  return (
    <div>
      <h2>About</h2>
      <Link to={`${match.url}/sub-link`}>About sub-link</Link>
      <Route exact path={`${match.url}/sub-link`} component={AboutSubLink} />
    </div>
  );
};
