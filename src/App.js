import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import Medicines from './Pages/Medicines/Medicines';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Homee/Home';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/medicines">
            <Medicines></Medicines>
          </Route>
          <Route exact path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
