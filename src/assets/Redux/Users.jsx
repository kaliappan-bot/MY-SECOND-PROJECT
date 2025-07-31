import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../slices/userSlices";

const Users = () => {
  const users = useSelector((state) => state.usersInfo.users);
  const dispatch = useDispatch();
console.log(users);
  const deleteUserInfo = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div>
     {users?.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{user.email}</h1>
          <h1>{user.contact}</h1>
          <button onClick={() => deleteUserInfo(index)}>Delete</button>
        </div>
      );
      })}
    </div>
  );
};

export default Users;