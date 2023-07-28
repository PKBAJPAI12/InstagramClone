import './App.css';
import Signup from './Components/SignUp';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Login/>
    </BrowserRouter>
  );
}

export default App;
