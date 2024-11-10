import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import BookingDetails from './components/BookingDetails'
import Discover from './components/Discover'
import Services from './components/Services'
import AboutUs from './components/AboutUs'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/booking-details" component={BookingDetails} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/service" component={Services} />
      <Route exact path="/about" component={AboutUs} />
    </Switch>
  </div>
)

export default App
