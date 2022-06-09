import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth === "true"
                ? <button className = "btn btn-danger" onClick = {onLogOut}>Выйти из системы</button>
                : <button className = "btn btn-success" onClick = {onLogin}>Войти</button>
            }
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponent;
