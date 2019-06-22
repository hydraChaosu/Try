import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Audio from "./components/Audio";
import Video from "./components/Video";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Cloud from "./components/Cloud";
import Index from "./components/Index";
import MyRedux from "./components/MyRedux";
import Paramsy from "./components/Paramsy";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {" "}
        <Route path="/" exact component={Index} />
        <Route path="/audio" component={Audio} />
        <Route path="/video" component={Video} />
        <Route path="/forms" component={Forms} />
        <Route path="/myredux" component={MyRedux} />
        <Route path="/cloud" component={Cloud} />
        <Route path="/:id" component={Paramsy} />
      </Switch>
    </Router>
  );
}

export default App;
