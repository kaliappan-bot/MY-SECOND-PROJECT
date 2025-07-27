import User from './users';
import UseState from './UseState';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseContext from './UseContext';
function Hello() {
  return (
    <>
    <h1>Hello World</h1>
    <p>Good Morning</p>
    </>
  );
}

function App() {
  const userData={
    name:"Abhi",
    phone:9843216732,
    age:25,
    email:"abhi@gmail.com",

  };
  return(
    <>
    <h1>25/07/2025</h1>
    <h1>Hello World</h1>
    <User
    name={userData.name}
    age={userData.age}
    phone={userData.phone}
    email={userData.email}
    />
    <UseState />
    <UseEffect />
    <UseRef />
    <UseMemo />
    <UseCallback />
    <UseContext />
    </>
  );
}
export {Hello, App};