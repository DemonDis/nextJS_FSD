import React from "react";
import s from './styles.module.scss';

const Input = ({value, handleClick}) => {
    return (
        <input
            className={s.input}
            type="text"
            value={value}
            onChange={(e) => handleClick(e.target.value)}
        />
    )
};

export default Input;