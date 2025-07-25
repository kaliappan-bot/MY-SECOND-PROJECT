import User from './User';
// function App() {
//   return(
//     <>
//     <h1>App</h1>
//     <h2>Hey</h2>
//     </>
//   );
// }
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
    <h1>Hello World</h1>
    <User
    name={userData.name}
    age={userData.age}
    phone={userData.phone}
    email={userData.email}
    /></>
  );
}
export {Hello, App};