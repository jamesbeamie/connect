import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Heading from "./common/Heading";
import PeopleList from "./people/PeopleList";
import People from "./people/People";
import userDetails from "./people/userDetails";

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Switch>
          <Route exact path='/' component={PeopleList} />
          <Route path='/peopleList' component={PeopleList} />
          <Route path='/people' component={People} />
          <Route path='/:name' component={userDetails} />
          {/* <Route exact path='/' component={HomePage} />
        {!userToken && <Route path='/signup' component={AuthPage} />}
        {!userToken && <Route path='/signin' component={LoginPage} />}
        {userToken && <Redirect from='/signin' to='/' exact />}
        <Route path='/link-to-reset' component={ResetRequest} />
        <Route path='/about' component={AboutPage} />
        <Route path='/authenticate-reset' component={PwdReset} />
        <Route path='/blog' component={CreateBlog} />
        <Route path='/engagements' component={CreateEngagement} />
        <Route path='/bumps' component={CreateBump} />
        <Route path='/kids' component={CreateChild} />
        <Route path='/family' component={CreateFamily} />
        <Route path='/potraits' component={CreatePotrait} />
        <Route path='/events' component={CreateEvent} />
        <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
