import UseLayout from './UseLayout';
import UseState from './UseState';
import UseRef from './UseRef';
import UseEffect from './UseEffect';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseContext from './UseContext';
import UseReducer from './UseReducer';
import User2 from './User2';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRouter from './assets/ReactRouter/Home';
import UserRouter from './assets/ReactRouter/User';
import AboutRouter from './assets/ReactRouter/About';
import ContactRouter from './assets/ReactRouter/Contact';
// import NavbarRouter from './assets/ReactRouter/Navbar';
import UsersRouter from './assets/ReactRouter/Users';
import ErrorRouter from './assets/ReactRouter/Error';
import HomeRedux from './assets/Redux/Home';
import UsersRedux from './assets/Redux/Users';
import AboutRedux from './assets/Redux/About';
import ContactRedux from './assets/Redux/Contact';
import Navbar from './assets/Redux/Navbar';
import ErrorRedux from './assets/Redux/Error';
import "./assets/Redux/Navbar.css"
import Functional from './Functional';
import Class from './Class';
function Hello() {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Good Morning</h2>
    </>
  );
}

function App() {
  const userData = {
    name: "Abhi",
    age: 26,
    phone: 9843621821,
    email: "abhi@gmail.com",
  };

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <h1>Hello World</h1>
      <User2
        name={userData.name}
        age={userData.age}
        phone={userData.phone}
        email={userData.email}
      />
      <User2 />
      <UseState />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallback />
      <UseContext />
      <UseReducer />
      <UseLayout />
      
{/* ReactRouter */}
      <h1>React Router</h1>
      <Routes>
        <Route path="/" element={<HomeRouter />} />
        <Route path="/users" element={<UsersRouter />} />
        <Route path="/user/:username" element={<UserRouter />} />
        <Route path="/about" element={<AboutRouter />} />
        <Route path="/contact" element={<ContactRouter />} />
        <Route path="*" element={<ErrorRouter />} />
      </Routes>
      {/* Redux section */}
      
      <HomeRedux />
      <ErrorRedux />
      <AboutRedux />
      <ContactRedux />
      <UsersRedux />
      <Functional />
      <Class />
    </BrowserRouter>
  );
}

export default App;
export { Hello };