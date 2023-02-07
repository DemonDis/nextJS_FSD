import React from "react";
import s from './styles.module.scss';

const Button = ({children, handleClick}) => {
    return (
        <button
            className={s.button}
            onClick={handleClick}
        >
            {children}
        </button>
    )
};

export default Button;