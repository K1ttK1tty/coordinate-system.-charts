import React from 'react';
import cl from './Test.module.css'
const Test = function () {
    return (
        <div className={cl.page}>
            <h2 className={cl.title}>Тест</h2>
            
                <input id={cl.input} className={cl.input} type="radio" name=""/>
                <label className={cl.label} htmlFor={cl.input}></label>

        </div>
    )
};
export default Test;