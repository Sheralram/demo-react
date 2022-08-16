// import logo from './logo.svg';
import './App.css'; 
 import {Home} from './component/Home';
 import {Department} from './component/Department';
 import {Bridgelabz} from './component/Bridgelabz';
import {Routes,Route, Link} from "react-router-dom";

function App() {
  return (
    
    <div className="container">
        <nav>
        <Link to="/">Home</Link> | <Link to="/department">Department</Link> |{" "}
        <Link to="/bridgelabz">Bridgelabz</Link>
      </nav>


      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/department' element={<Department/>} />
      <Route path='/bridgelabz' element={<Bridgelabz/>} />
      {/* <h1>Hello World</h1> */}
      {/* <Department/> */}
      {/* <Bridgelabz/> */}
      </Routes>
    </div>


  );
}

export default App;
