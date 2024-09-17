// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import RegisterForm from "./components/User/RegisterForm";
import { getData, getDataById } from "./components/Fetchs/Get";
import { useEffect, useState } from "react";

function App() {
  // current user'a çevirilecek
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const user = await getData("users"); // Fetch user with id 1
    setUser(user[0]);
  };

  useEffect(() => {
    fetchUser();
  }, [user]); // Depend on refresh state

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home/>}
          />
          <Route exact path="/users/:userId" element={<User user={user} />} />
          <Route exact path="/users/register" Component={RegisterForm} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//Switch: Route'lar arasında bir eşleşme bulduğunda, ilk eşleşmeyi render eder. Yani, eşleşme bulduğunda diğer Route'ları
//kontrol etmez. Bu sayede, birden fazla Route'ın eşleştiği durumlarda sadece bir tanesinin render edilmesini sağlar.
