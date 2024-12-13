import { BrowserRouter, Routes, Route} from 'react-router-dom';   
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Signin from './pages/Signin';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sign-in' element={ <Signin /> } />
        <Route path='/sign-up' element={ <Signup /> } />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;