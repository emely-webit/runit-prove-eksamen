import React, { useContext } from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";

// Components
// Sider
import AuthDataProvider from "./components/context/AuthDataContext";
import Layout from "./components/layout/Layout";
import Forside from "./components/forside/Forside";
import AllEvents from "./components/event/AllEvents";
import ChosenEvent from "./components/event/ChosenEvent";
import Sponsor from "./components/Sponsor/Sponsor";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import AdvanceSearch from "./components/advanceSearch/AdvanceSearch";
// Admin
import EventAdmin from "./components/admin/EventAdmin";
import EventOpret from "./components/admin/EventOpret";
import NyhedsbrevAdmin from "./components/admin/NyhedsbrevAdmin";
import NyhedsbrevSlet from "./components/admin/NyhedsbrevSlet";
import EventTilmeldingAdmin from "./components/admin/EventTilmeldingAdmin";
import { AuthDataContext } from "./components/context/AuthDataContext";
import Login from "./components/login/Login";

// Skjuler private routes hvis man ikke er logget ind
const PrivateRoute = ({ component, ...options }) => {
  const { loggedIn } = useContext(AuthDataContext);
  console.log("privateroute: loggedIn", loggedIn);

  const finalComponent = loggedIn ? component : Login;
  return <Route {...options} component={finalComponent} />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthDataProvider>
          <Layout>
            {/* Navbar routes */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Forside} />
            <Route exact path="/events" component={AllEvents} />
            <Route exact path="/event/:event_id" component={ChosenEvent} />
            <Route exact path="/sponsore" component={Sponsor} />
            <Route exact path="/om-os" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/avanceret-soegning" component={AdvanceSearch} />
            {/* Nyhedsbrevstilmeldinger */}
            <PrivateRoute
              exact
              path="/admin/nyhed"
              component={NyhedsbrevAdmin}
            />
            <PrivateRoute
              exact
              path="/admin/nyhed-slet/:nyhed_id"
              component={NyhedsbrevSlet}
            />
            {/* Eventtilmeldinger */}
            <PrivateRoute
              exact
              path="/admin/event-tilmelding"
              component={EventTilmeldingAdmin}
            />
            {/* Event admin */}
            <PrivateRoute exact path="/admin" component={EventAdmin} />
            <PrivateRoute
              exact
              path="/admin/ret/:event_id"
              component={EventAdmin}
            />
            <PrivateRoute
              exact
              path="/admin/slet/:event_id"
              component={EventAdmin}
            />
            <PrivateRoute exact path="/admin/opret" component={EventOpret} />
          </Layout>
        </AuthDataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
