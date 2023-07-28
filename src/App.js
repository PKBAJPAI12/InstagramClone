import './App.css';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import { BrowserRouter,Switch, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
   
   

    </BrowserRouter>
  );
}

export default App;
