import React from "react";
import CardWrapper from "../../common/Card";

const withFunction = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const onLogin = () => localStorage.setItem("auth", "token");
    const onLogOut = () => localStorage.removeItem("auth");

    return (
    <CardWrapper>
        {isAuth
        ? <Component
            { ...props} isAuth = "true" onLogOut = {onLogOut} onLogin = {onLogin}/>
        : <Component
            { ...props} isAuth = "false" onLogOut = {onLogOut} onLogin = {onLogin}/>}
    </CardWrapper>
    );
};

export default withFunction;
