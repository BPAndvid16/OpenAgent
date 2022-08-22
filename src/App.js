import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from "react-router-dom";

import Land from "./components/landscape/Land";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <Router>
      
        <Navbar/>

        <Routes>

          <Route path="/" element = {<Land/>}/>
          <Route path="/Login" element = {<Login/>}/>
          <Route path="/SignUp" element = {<SignUp/>}/>
            
          
        </Routes>
      
    </Router>
  );
}

export default App;
