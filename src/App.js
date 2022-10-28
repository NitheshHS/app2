import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  const [enteredList, setEnteredList] = useState([])

  const addUserHandler = (username, age)=>{
    setEnteredList((previousUserList)=>{
      return [...previousUserList, {name:username, age:age, id:Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={enteredList}/>
    </div>
  );
}

export default App;
