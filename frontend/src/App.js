import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Product from "./pages/Product"
import './App.css';

function App() {
  return (
    <div className="App">
       <nav>
          <ul>
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li>
              <Link to="/detail">Detail page</Link>
            </li>
            <li>
              <Link to="/products">Product page</Link>
            </li>
          </ul>

       </nav>
       <Routes>
         <Route path="/" element={< Home />}></Route>
         <Route path="/detail" element={< Detail />}></Route>
         <Route path="/products" element={< Product />}></Route>
       </Routes>
    </div>
  );
}

export default App;
