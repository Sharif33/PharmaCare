
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import AboutUs from './Pages/AboutUs/AboutUs';
import Medicines from './Pages/Medicines/Medicines';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Homee/Home';
import Details from './Pages/Details/Details';
import Login from './Login/Login/Login';
import Register from './Login/Login/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Students from './Pages/Students/Students';
import SingleDoctor from './Pages/SingleDoctor/SingleDoctor';
import FindDoctors from './Pages/Doctors/FindDoctors';
import FindMedicine from './Pages/FindMedicine/FindMedicine';


function App() {
  return (
    <div>
      <AuthProvider>
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
            <Route exact path="/doctors">
              <FindDoctors></FindDoctors>
            </Route>
            <Route exact path="/medicine">
              <FindMedicine></FindMedicine>
            </Route>
            <Route exact path="/students">
              <Students></Students>
            </Route>
            <Route exact path="/medicines">
              <Medicines></Medicines>
            </Route>
            <PrivateRoute exact path="/medicines/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute exact path="/doctor/:id">
              <SingleDoctor></SingleDoctor>
            </PrivateRoute>
            <Route exact path="/contact">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
