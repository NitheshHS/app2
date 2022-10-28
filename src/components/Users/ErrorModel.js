import React from "react";
import classes from './ErrorModel.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModel = props =>{
    return(
        <div>
        <div onClick={props.onConfirm}/>
        <Card className={classes.model}>
        <div>
            <header className={classes.header}> <h2>{props.title}</h2></header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
        </Card>
        </div>
    )
}

export default ErrorModel;