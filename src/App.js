// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';
import RegisterForm from './components/User/RegisterForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/users/:userId" Component={User} />
          <Route exact path="/users/register" Component={RegisterForm} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//Switch: Route'lar arasında bir eşleşme bulduğunda, ilk eşleşmeyi render eder. Yani, eşleşme bulduğunda diğer Route'ları 
//kontrol etmez. Bu sayede, birden fazla Route'ın eşleştiği durumlarda sadece bir tanesinin render edilmesini sağlar.