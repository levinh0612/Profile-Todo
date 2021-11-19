
// import { Router } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Products';
import Products from './pages/Reports';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
