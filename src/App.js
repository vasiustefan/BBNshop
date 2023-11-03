import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={
          <div>
            <Header/>
            <Home/>
          </div>}
          />

          <Route path="/checkout" element={
          <div>
            <Header/>
            <Checkout/>
          </div>}
          />

          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
