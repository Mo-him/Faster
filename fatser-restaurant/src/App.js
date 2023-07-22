import './App.css';
import React from 'react';
import { BrowserRouter as Router,  Switch } from 'react-router-dom';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import Login from './components/Login';
import OTPVerification from './components/OTPVerification';


function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/"component={Login} />
        <Route path="/otp" component={OTPVerification} /> 
        <Route path="/RestaurantList" component={RestaurantList} /> 
        <Route path="/RestaurantDetails" component={RestaurantDetail} /> 

      </Switch>
   /</Router>  
      
    </div>
  );
}

export default App;
