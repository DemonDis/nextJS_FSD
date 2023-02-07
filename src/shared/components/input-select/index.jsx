import React from "react";
import s from './styles.module.scss';

const InputSelect = ({name, id, data}) => {
    return (
        <select 
            className={s.select}
            name={name}
            id={id}
        >
            {
                data.map((item, index) => {
                    return <option key={index} value={index}>{item}</option>
                })
            }
        </select>
    )
};

export default InputSelect;