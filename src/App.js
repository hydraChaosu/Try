import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/audio">Audio</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/forms">Forms</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/cloud">Cloud</Link>
          </li>
          <li>
            <Link to="/:id">Params</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Index} />
      <Route path="/audio" component={Audio} />
      <Route path="/video" component={Video} />
      <Route path="/forms" component={Forms} />
      <Route path="/redux" component={Redux} />
      <Route path="/cloud" component={Cloud} />
      <Route path="/:id" component={Paramsy} />
    </Router>
  );
}

export default App;
