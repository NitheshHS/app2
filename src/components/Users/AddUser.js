import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import ErrorModel from './ErrorModel';

const AddUser = props =>{

    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    const usernameHandler = (event)=>{
        setEnteredUserName(event.target.value);
    }

    const ageHandler = (event)=>{
        setEnteredAge(event.target.value)
    }


    const addUserhandler = (event)=>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "error!",
                message: "username and age can't be empty"
            })
            return;
        }
        if(+enteredAge <= -1){
            setError({
                title: "error!",
                message: "age can't be empty"
            })
            
        }
        props.onAddUser(enteredUsername, enteredAge)
        console.log(`${enteredUsername} ${enteredAge}`)
        setEnteredAge('')
        setEnteredUserName('')
    }

    const errorHandler = ()=>{
        setError(null)
    }

    return(
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModel>}
        <Card className={classes.input}>
        <form onSubmit={addUserhandler}>
            <label>Username</label>
            <input id="username" type="text" onChange={usernameHandler} value={enteredUsername}/>
            <label>Age(in years)</label>
            <input id="age" type="number" onChange={ageHandler} value={enteredAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser