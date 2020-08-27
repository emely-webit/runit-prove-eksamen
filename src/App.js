import React from 'react';
import './App.scss';

import Layout from './components/layout/Layout';
import Forside from './components/forside/Forside';
import AllEvents from './components/event/AllEvents';
import ChosenEvent from './components/event/ChosenEvent';
import Sponsor from './components/Sponsor/Sponsor';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact';
import AdvanceSearch from './components/advanceSearch/AdvanceSearch';

import { BrowserRouter, Route } from "react-router-dom";
import EventAdmin from './components/admin/EventAdmin';
import EventOpret from './components/admin/EventOpret';
import NyhedsbrevAdmin from './components/admin/NyhedsbrevAdmin';
import NyhedsbrevSlet from './components/admin/NyhedsbrevSlet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Forside} />
          <Route exact path="/events" component={AllEvents} />
          <Route exact path="/event/:event_id" component={ChosenEvent} />
          <Route exact path="/sponsore" component={Sponsor} />
          <Route exact path="/om-os" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/avanceret-soegning" component={AdvanceSearch} />

          <Route exact path="/admin/nyhed" component={NyhedsbrevAdmin}/>
          <Route exact path="/admin/nyhed-slet/:nyhed_id" component={NyhedsbrevSlet}/>

          <Route exact path="/admin" component={EventAdmin}/>
          <Route exact path="/admin/ret/:event_id" component={EventAdmin}/>
          <Route exact path="/admin/slet/:event_id" component={EventAdmin}/>
          <Route exact path="/admin/opret" component={EventOpret}/>
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
